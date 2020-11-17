from flask import Flask, request, jsonify
from models.games import Game
from models.teams import Team
from models.countries import Country
from models.leagues import League
from models.players import Player
from models.chats import Chat
from models.accounts import Account


API_BASE = "https://api-football-beta.p.rapidapi.com"
key =  "804b1594a5msh69900911a788156p125a69jsna7c589797665"


app = Flask(__name__)


@app.route('/', methods=["GET"])
def home():
    return jsonify({"Welcome": "Welcome to Premier League"})

# USER LOGIN 
@app.route('/api/login', methods=["POST"])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    account = Account.login(username, password)
    if account:
        account.api_authenticate = Account.random_api_key()
        account.save()
        return jsonify({'session_id': account.api_authenticate,
                        'username': account.username})
    return jsonify({'session_id': None,
                       'username': ""})


# USER SIGNUP
@app.route('/api/sign_up', methods=["POST"])
def new_user():
    data = request.get_json()
    key = Account.random_api_key()
    new_account = Account(data.get('username'), data.get('password'), key, data.get('email'))
    new_account._insert()
    return jsonify({'session_id': new_account.api_authenticate,
                        'username': new_account.username})


@app.route('/api/countries', methods=["GET"])
def display_countries():
    all_countries = Country.all_countries()
    return jsonify({'countries':all_countries})

@app.route('/api/world_competitions/<country>/<season>', methods=["GET"])
def world_competitions(country, season):
    world_competitions = League.world_competitions(country, season)
    return jsonify({'leagues': world_competitions})

@app.route('/api/leagues_by_country/<country>/<season>', methods=["GET"])
def leagues(country, season):
    leagues_by_country = League.leagues_from_all_countries(country, season)
    return jsonify({'leagues': leagues_by_country})

@app.route('/api/last/<num_games>', methods=["GET"])
def last_5(num_games):
    last_5 = Game.last_5(num_games)
    return jsonify({'fixtures': last_5})

@app.route('/api/games_by_date/<date>', methods=["GET"])
def games_by_date(date):
    date = Game.games_by_date(date)
    return jsonify({'fixtures': date})

@app.route('/api/game_stats/<fixture_id>', methods=["GET"])
def game_stats(fixture_id):
    stats = Game.game_stats(fixture_id)
    return jsonify({"fixtures": stats})

@app.route('/api/h2h/<team_id_1>/<team_id_2>', methods=["GET"])
def game_h2h(team_id_1, team_id_2):
    h2h = Game.game_h2h(team_id_1, team_id_2)
    return jsonify({"fixtures": h2h})    

@app.route('/api/team_by_id/<team_id>', methods=["GET"])
def team_by_id(team_id):
    team = Team.team_by_id(team_id)
    return jsonify({'teams': team})

# EVENTS

@app.route('/api/game_events/<fixture_id>', methods=["GET"])
def game_events(fixture_id):
    events = Game.events_fixture_id(fixture_id)
    return jsonify({"fixtures/events": events})

# PLAYERS 

@app.route('/api/lineups/<fixture_id>', methods=['GET'])
def fixture_lineups(fixture_id):
    lineups = Player.lineups_from_fixture(fixture_id)
    return jsonify({"lineUps": lineups})

@app.route('/api/save_chat', methods=['POST'])
def save_chat():
    data = request.get_json()
    chat = Chat(data.get('time'), data.get('text'), data.get('account_id'), data.get('game_id'))
    chat.save()
    return jsonify({"chat": data})

@app.route('/api/get_chat/<fixture_id>', methods=['POST'])
def get_chat(fixture_id):
    data = request.get_json()
    user_chat = Chat.get_chat(fixture_id)
    return jsonify({"chat": user_chat})


if __name__ == "__main__":
    app.run()#debug=True)
