#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify, abort, send_file, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os, base64, sys, json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# To suppress the warning:
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String(45), nullable=False)
    cookieId = db.Column(db.String(32), nullable=False, unique=True)
    sessions = db.relationship('Session', back_populates='user')

    def __init__(self, ip, cookieId):
        self.ip = ip
        self.cookieId = cookieId

    def __repr__(self):
        return "User with ip {} and cookie {} with {} sessions".format(
            self.ip, self.cookieId, len(self.sessions))

class Session(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', back_populates='sessions')
    action = db.relationship('Action', back_populates='session')

    def __init__(self, user):
        self.user = user


class Action(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sessionId = db.Column(db.Integer, db.ForeignKey('session.id'), nullable=False)
    session = db.relationship('Session', back_populates='action')
    time = db.Column(db.Integer, nullable=False)
    actionId = db.Column(db.Integer, nullable=False)
    correctAnswer = db.Column(db.Boolean, nullable=False)
    hotkeyUsed = db.Column(db.Boolean, nullable=False)
    menuOpened = db.Column(db.Boolean, nullable=False)
    menuDelay = db.Column(db.Integer, nullable=True)

    def __init__(self, sessionId, time, actionId, correctAnswer, hotkeyUsed, menuOpened, menuDelay):
        self.sessionId = sessionId
        self.time = time
        self.actionId = actionId
        self.correctAnswer = correctAnswer
        self.correctAnswer = correctAnswer
        self.correctAnswer = correctAnswer
        self.correctAnswer = correctAnswer
        self.hotkeyUsed = hotkeyUsed
        self.menuOpened = menuOpened
        self.menuDelay = menuDelay

    def __repr__(self):
        return "{} did action {} in {}".format(self.user, self.actionId, self.time)

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
        response = make_response(send_file("../hotkey-app/dist/index.html"))
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
    print("got action")
    data = request.get_json(force=True)
    result = data["result"]
    newAction = Action(result["sessionId"], result["time"], result["actionId"],
                       result["correctAnswer"], result["hotkeyUsed"],
                       result["menuOpened"],
                       result["menuDelay"] if "menuDelay" in result else None
                       )
    db.session.add(newAction)
    db.session.commit()
    return "{}"

@app.route("/log/session", methods=['POST'])
def session():
    cookieId = request.cookies.get("id")
    print(cookieId)
    if cookieId is None:
        abort(401)
    user = User.query.filter(User.cookieId == cookieId).one_or_none()
    if user is None:
        abort(401)
    session = Session(user)
    db.session.add(session)
    db.session.commit()
    print(session.id)
    result = { "id": session.id }
    return json.dumps(result)

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('../hotkey-app/dist/', path)

if __name__ == "__main__":
    app.run()
