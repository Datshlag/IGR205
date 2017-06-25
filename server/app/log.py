from flask import Flask, request, make_response, jsonify, abort, send_file, send_from_directory
import os, base64, sys, json, statistics

from app import db, app
from app.models import User, Session, Action

@app.route("/")
def spa():
    def create_session():
        newCookie = base64.b64encode(os.urandom(24)).decode("utf-8")
        ip = request.environ['REMOTE_ADDR']
        newUser = User(ip, newCookie)
        db.session.add(newUser)
        db.session.commit()
        return newCookie

    cookie = request.cookies.get("id")
    if len(sys.argv) > 1 and sys.argv[1] ==  "--debug":
        # Ugly
        response = make_response(send_file("../../hotkey-app/dist/index.html"))
    else:
        response = make_response(send_file('/var/www/igr/index.html'))
    if cookie is None:
        newCookie = create_session()
        response.set_cookie("id", newCookie)
    else:
        user = User.query.filter(User.cookieId == cookie).one_or_none()
        if user is None:
            response.set_cookie("id", create_session())
    return response

@app.route("/log/action", methods=['POST'])
def action():
    data = request.get_json(force=True)
    print(data)
    result = data["result"]
    newAction = Action(result["sessionId"], result["time"], result["actionId"],
                       result["correctAnswer"], result["hotkeyUsed"],
                       result["menuOpened"],
                       result["menuDelay"] if "menuDelay" in result else None
                       )
    db.session.add(newAction)
    db.session.commit()
    return "{}"

@app.route("/sessions")
def sessions():
    users = User.query.all()
    for user in users:
        if len(user.sessions) > 0:
            # We take only the first session,
            session = user.sessions[0]
            print(session)
    result = {}
    return "{}"

@app.route("/hotkeyUsed")
def hotkeyUsed():
    sessions = Session.query.all()
    mean = statistics.mean([action.hotkeyUsed and not action.menuOpened and action.correctAnswer
                     for session in sessions for action in session.actions])
    means = {n: statistics.mean([action.hotkeyUsed and not action.menuOpened and action.correctAnswer for session in sessions if session.method == n for action in session.actions] or [0]) for n in range(4)}
    result = {"all": mean}
    return json.dumps(result)

@app.route("/log/session", methods=['POST'])
def session():
    data = request.get_json(force=True)
    print(data)
    cookieId = request.cookies.get("id")
    print(cookieId)
    if cookieId is None:
        abort(401)
    user = User.query.filter(User.cookieId == cookieId).one_or_none()
    if user is None:
        abort(401)
    session = Session(user, data["method"])
    db.session.add(session)
    db.session.commit()
    print(session.id)
    result = { "id": session.id }
    return json.dumps(result)

#Just for development, nginx will bypass it
@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('../../hotkey-app/dist/', path)


