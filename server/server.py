#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify, abort, send_file, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os, base64, sys

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# To suppress the warning:
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String(45), nullable=False)
    cookieId = db.Column(db.String(32), nullable=False)

    def __init__(self, ip, cookieId):
        self.ip = ip
        self.cookieId = cookieId

    def __repr__(self):
        return "User with ip {} and cookie {}".format(self.ip, self.cookieId)

class Action(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', uselist=False)
    time = db.Column(db.Integer, nullable=False)
    actionId = db.Column(db.Integer, nullable=False)
    correctAnswer = db.Column(db.Boolean, nullable=False)
    hotKeyUsed = db.Column(db.Boolean, nullable=False)
    errorCount = db.Column(db.Integer, nullable=False)
    menuOpenened = db.Column(db.Boolean, nullable=False)
    menuDelay = db.Column(db.Integer, nullable=False)

    def __init__(self, user, time, actionId, correctAnswer, hotKeyUsed, errorCount, menuOpenened, menuDelay):
        self.user = user
        self.time = time
        self.actionId = actionId
        self.correctAnswer = correctAnswer
        self.correctAnswer = correctAnswer
        self.correctAnswer = correctAnswer
        self.correctAnswer = correctAnswer
        self.hotKeyUsed = hotKeyUsed
        self.errorCount = errorCount
        self.menuOpenened = menuOpenened
        self.menuDelay = menuDelay

    def __repr__(self):
        return "{} did action {} in {}".format(self.user, self.actionId, self.time)

@app.route("/")
def spa():
    def create_session():
        newCookie = base64.b64encode(os.urandom(24))
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
        user = User.query.filter_by(cookieId=cookie).first()
        if user is None:
            response.set_cookie("id", create_session())
    return response

@app.route("/log/action", methods=['POST'])
def action():
    print("got action")
    cookieId = request.cookies.get("id")
    if cookieId is None:
        abort(401)
    data = request.get_json(force=True)
    user = User.query.filter_by(cookieId=cookieId).first()
    if user is None:
        abort(401)
    newAction = Action(user, data.result.time, data.result.actionId, data.result.correctAnswer,
                       data.result.hotKeyUsed, data.result.errorCount, data.result.menuOpenened, data.result.menuDelay)
    db.session.add(newAction)
    db.session.commit()
    return "{}"
@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('../hotkey-app/dist/', path)

if __name__ == "__main__":
    app.run()
