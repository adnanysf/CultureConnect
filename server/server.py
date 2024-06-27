from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Culture Connect V1.0'

if __name__ == '__main__':
    app.run(debug=True)
