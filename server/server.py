#pip install Flask
#pip install mongoengine

#start backend: after you run 'cd server', run 'python server.py'

from flask import Flask, jsonify, request
from db import init_db
from models.posts import Post
from routes.postsRoutes import post_bp
from backend import getUserProfile, incrementLike, decrementLike, favoritePostForUser

app = Flask(__name__)

init_db()

app.register_blueprint(post_bp, url_prefix='/posts')

@app.route('/')
def home():
    return 'Culture Connect V1.0'

@app.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.objects()
    return jsonify(posts)

#http://127.0.0.1:5000/getUserProfile?userSid=a123456
@app.route('/getUserProfile')
def retrieveUserProfile():
    userSid = request.args.get('userSid', type=str)

    response = getUserProfile( sid = userSid )
    return response

#http://127.0.0.1:5000/incrementLike?userSid=a123456
@app.route('/incrementLike')
def incrementLikeCountForUser():
    userSid = request.args.get('userSid', type=str)

    response = incrementLike( sid = userSid )
    return response

#http://127.0.0.1:5000/decrementLike?userSid=a123456
@app.route('/decrementLike')
def decrementLikeCountForUser():
    userSid = request.args.get('userSid', type=str)
    
    response = decrementLike( sid = userSid )
    return response

#http://127.0.0.1:5000/favoritePostForUser?userSid=a123456&postId=1234TestId
@app.route('/favoritePostForUser')
def favoritePost():
    userSid = request.args.get('userSid', type=str)
    postId = request.args.get('postId', type=str)

    response = favoritePostForUser( sid = userSid, pid = postId )
    return response

if __name__ == '__main__':
    app.run(port=5000, debug=True)
