from flask import Flask, request
from backend import getUserProfile
import json

app = Flask(__name__)

@app.route('/')
def home():
    return 'Culture Connect V1.0'

@app.route('/getUserProfile')
def retrieveUserProfile():
    userSid = request.args.get('userSid', type=str)

    response = getUserProfile( sid = userSid )
    return response

if __name__ == '__main__':
    app.run(debug=True)
