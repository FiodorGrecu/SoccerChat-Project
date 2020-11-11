from flask import Flask, request, jsonify

API_BASE = "https://api-football-beta.p.rapidapi.com"
key =  "804b1594a5msh69900911a788156p125a69jsna7c589797665"


app = Flask(__name__)


@app.route('/', methods=["GET"])
def home():
    return jsonify({"hey": "Hey you!"})

@app.route('/hey_back', methods=["GET"])
def reply_home():
    return jsonify({"hey": "Hey the Horse!"})


if __name__ == "__main__":
    app.run()#debug=True)
