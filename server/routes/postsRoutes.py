from flask import Blueprint, jsonify, request
from db import get_db

post_bp = Blueprint('post_bp', __name__)

#ex: http://127.0.0.1:5000/posts/all
@post_bp.route('/all', methods=['GET'])
def get_all_posts():
    db = get_db()
    posts_collection = db['posts']
    try:
        posts = list(posts_collection.find({}))
        for post in posts:
            post['_id'] = str(post['_id'])  # Convert ObjectId to string for JSON serialization
        return jsonify(posts)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


#ex: http://127.0.0.1:5000/posts/?date=08/19/2003&timestamp=00:11:23&user=O803101
@post_bp.route('/', methods=['GET'])
def get_post():
    db = get_db()
    posts_collection = db['posts']
    try:
        date = request.args.get('date')
        timestamp = request.args.get('timestamp')
        user = request.args.get('user')
        if not date or not timestamp or not user:
            return jsonify({'error': 'Missing query parameters'}), 400
        
        post = posts_collection.find_one({
            'date': date,
            'timestamp': timestamp,
            'user': user
        })
        
        if not post:
            return jsonify({'message': 'Post not found'}), 404
        
        post['_id'] = str(post['_id'])  # Convert ObjectId to string for JSON serialization
        return jsonify(post)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
