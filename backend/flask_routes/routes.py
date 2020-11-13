from flask import Flask, request, jsonify
from models.games import Game
from models.teams import Team

API_BASE = "https://api-football-beta.p.rapidapi.com"
key =  "804b1594a5msh69900911a788156p125a69jsna7c589797665"


app = Flask(__name__)


@app.route('/', methods=["GET"])
def home():
    return jsonify({"hey": "Hey you!"})

@app.route('/api/h2h/<team_id_1>/<team_id_2>', methods=["GET"])
def game_h2h(team_id_1, team_id_2):
    h2h = Game.game_h2h(team_id_1, team_id_2)
    return jsonify({"fixtures": h2h})

@app.route('/api/last5/', methods=["GET"])
def last5():
    last5 = Game.last_5()
    return jsonify({'fixtures': last5})

@app.route('/api/games_by_date/<date>', methods=["GET"])
def games_by_date(date):
    date = Game.games_by_date(date)
    return jsonify({'fixtures': date})

@app.route('/api/team_by_id/<team_id>', methods=["GET"])
def team_by_id(team_id):
    team = Team.team_by_id(team_id)
    return jsonify({'teams': team})

if __name__ == "__main__":
    app.run()#debug=True)
