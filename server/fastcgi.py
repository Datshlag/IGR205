#!/usr/bin/env python3
from flup.server.fcgi import WSGIServer
from server import app

if __name__ == '__main__':
    WSGIServer(app, bindAddress='/var/sockets/fcgi.sock').run()
