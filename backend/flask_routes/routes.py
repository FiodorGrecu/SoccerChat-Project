from flask import Flask, request, jsonify
from games import Game

API_BASE = "https://api-football-beta.p.rapidapi.com"
key =  "804b1594a5msh69900911a788156p125a69jsna7c589797665"


app = Flask(__name__)


@app.route('/', methods=["GET"])
def home():
    return jsonify({"hey": "Hey you!"})

@app.route('/api/fixtures/<game_h2h>', methods=["GET"])
def fixtures(game_h2h):
    game = Game.game_h2h(game_h2h)
    return jsonify("fixtures": game['homeTeam'])



if __name__ == "__main__":
    app.run()#debug=True)
