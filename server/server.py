#pip install Flask
#pip install mongoengine

from flask import Flask, jsonify
from db import init_db
from models.posts import Post

app = Flask(__name__)

init_db()

@app.route('/')
def index():
    return 'Welcome to the Flask app with MongoEngine!'

@app.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.objects()
    return jsonify(posts)

if __name__ == '__main__':
    app.run(port=5000)
