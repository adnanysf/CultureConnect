#pip install Flask
#pip install mongoengine
#pip install flask-cors

#start backend: after you run 'cd server', run 'python server.py'

from flask import Flask, jsonify, request
from flask_cors import CORS
from db import init_db
from models.posts import Post
from routes.postsRoutes import post_bp
from backend import getUserProfile, likePostForUser, favoritePostForUser, getCalendar, createUserPost

app = Flask(__name__)
cors = CORS(app, resources={ 
                             r"/posts": {"origins": "*"},
                             r"/posts/all": {"origins": "*"},
                             r"/getUserProfile": {"origins":"*"},
                             r"/likePostForUser": {"origins": "*"},
                             r"/favoritePostForUser": {"origins":"*"},
                             r"/createUserPost": {"origins": "*"},
                             r"/getCalendar": {"origins":"*"},
                           })

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

#http://127.0.0.1:5000/likePostForUser?userSid=a987654&postId=1234
@app.route('/likePostForUser')
def likePost():
    userSid = request.args.get('userSid', type=str)
    postId = request.args.get('postId', type=str)

    response = likePostForUser( sid = userSid, pid = postId )
    return response

#http://127.0.0.1:5000/favoritePostForUser?userSid=a123456&postId=1234TestId
@app.route('/favoritePostForUser')
def favoritePost():
    userSid = request.args.get('userSid', type=str)
    postId = request.args.get('postId', type=str)

    response = favoritePostForUser( sid = userSid, pid = postId )
    return response

#http://127.0.0.1:5000/createUserPost?userSid=a123456&tags=["Landmarks"]&title=The Statue of Liberty&text=""&image=""&firm=Houston
@app.route('/createUserPost', methods=['POST'])
def postByUser():
    userSid = request.json.get('userSid')
    tags = request.json.get('tags')
    title = request.json.get('title')
    text = request.json.get('text')
    image = request.json.get('image')
    firm = request.json.get('firm')

    response = createUserPost( userSid, tags, title, text, image, firm )
    return response

#http://127.0.0.1:5000/getCalendar?year=2024_TEST
@app.route('/getCalendar')
def getHolidayCalendar():
    year = request.args.get('year', type=str)

    response = getCalendar( year = year )
    return response

if __name__ == '__main__':
    app.run(port=5000, debug=True)
