from flask_sqlalchemy import SQLAlchemy
from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String(45), nullable=False)
    cookieId = db.Column(db.String(32), nullable=False, unique=True)
    sessions = db.relationship('Session', back_populates='user')

    def __init__(self, ip, cookieId):
        self.ip = ip
        self.cookieId = cookieId

    def __repr__(self):
        return "user with ip {} and cookie {}".format(
            self.ip, self.cookieId)

class Session(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', back_populates='sessions')
    method = db.Column(db.String(20), nullable=False)
    actions = db.relationship('Action', back_populates='session')

    def __init__(self, user, method):
        self.user = user
        self.method = method

    def __repr__(self):
        return "session of {} with method {}".format(
            self.user, self.method)


class Action(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sessionId = db.Column(db.Integer, db.ForeignKey('session.id'), nullable=False)
    session = db.relationship('Session', back_populates='actions')
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
        self.hotkeyUsed = hotkeyUsed
        self.menuOpened = menuOpened
        self.menuDelay = menuDelay

    def __repr__(self):
        return "action of {} took {} and was {}".format(
            self.user, self.time, "correct" if self.correctAnswer else "not correct")


