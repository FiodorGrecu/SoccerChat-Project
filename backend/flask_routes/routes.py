from flask import Flask, request, jsonify
from models.games import Game

API_BASE = "https://api-football-beta.p.rapidapi.com"
key =  "804b1594a5msh69900911a788156p125a69jsna7c589797665"


app = Flask(__name__)


@app.route('/', methods=["GET"])
def home():
    return jsonify({"hey": "Hey you!"})

@app.route('/api/one_game/', methods=["GET"])
def one_game():
    game = Game.game_h2h(40,50)
    return jsonify({"fixtures": game})

@app.route('/api/last5/', methods=["GET"])
def last5():
    last5 = Game.last_5()
    return jsonify({'fixtures': last5})

if __name__ == "__main__":
    app.run()#debug=True)
