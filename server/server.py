#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
import os

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
    method = db.Column(db.Integer, nullable=False)
    userAction = db.Column(db.Integer, nullable=False)
    expectedAction = db.Column(db.Integer, nullable=False)
    shortcut = db.Column(db.Boolean, nullable=False)
    time = db.Column(db.Integer, nullable=False)

    def __init__(self, user, method, userAction, expectedAction, shortcut, time):
        self.user = user
        self.method = method
        self.userAction = userAction
        self.expectedAction = expectedAction
        self.shortcut = shortcut
        self.time = time

    def __repr__(self):
        return "{} did action {} in {}".format(self.user, self.userAction, self.time)

@app.route("/")
def spa():
    def create_session():
        newCookie = os.urandom(16).hex()
        print(newCookie)
        ip = request.environ['REMOTE_ADDR']
        newUser = User(ip, newCookie)
        db.session.add(newUser)
        db.session.commit()
        return newCookie

    cookie = request.cookies.get("id")
    if cookie is None:
        newCookie = create_session()
        response = make_response("Hello new user")
        response.set_cookie("id", newCookie)
    else:
        response = make_response("Heeeelo")
        user = User.query.filter_by(cookieId=cookie).first()
        if user is None:
            response.set_cookie("id", create_session())
    return response

@app.route("/log/action", methods=['POST'])
def action():
    cookieId = request.cookies.get("id")
    if cookieId is None:
        abort(401)
    data = request.get_json(force=True)
    user = User.query.filter_by(cookieId=cookieId).first()
    if user is None:
        abort(401)
    newAction = Action(user, int(data['method']), int(data['userAction']),
                       int(data['expectedAction']), data['shortcut'], int(data['time']))
    db.session.add(newAction)
    db.session.commit()
    return "{}"

if __name__ == "__main__":
        app.run()
