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
def index():
    return 'Welcome to the Flask app with MongoEngine!'

@app.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.objects()
    return jsonify(posts)

if __name__ == '__main__':
    app.run(port=5000)
