from flask import Blueprint, jsonify, request
from db import get_db
from bson.objectid import ObjectId
import base64

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

@post_bp.route('/', methods=['POST'])
def create_post():
    db = get_db()
    posts_collection = db['posts']
    try:
        post_data = request.json

        # Ensure required fields are present
        required_fields = ['date', 'timestamp', 'user', 'title']
        for field in required_fields:
            if field not in post_data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Process image if present
        if 'image_data' in post_data and 'image_content_type' in post_data:
            image_data = post_data.pop('image_data')
            image_content_type = post_data.pop('image_content_type')
            post_data['image'] = {
                'data': base64.b64decode(image_data),
                'contentType': image_content_type
            }
        else:
            post_data['image'] = None

        result = posts_collection.insert_one(post_data)
        return jsonify({'_id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500