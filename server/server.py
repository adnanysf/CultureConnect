#pip install Flask
#pip install mongoengine

#start backend: after you run 'cd server', run 'python server.py'

from flask import Flask, jsonify
from db import init_db
from models.posts import Post
from routes.postsRoutes import post_bp

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

@app.route('/getUserProfile')
def retrieveUserProfile():
    userSid = request.args.get('userSid', type=str)

    response = getUserProfile( sid = userSid )
    return response

if __name__ == '__main__':
    app.run(port=5000, debug=True)
