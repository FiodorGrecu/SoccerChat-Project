from flask import Flask, request, jsonify
from models.games import Game
from models.teams import Team
from models.countries import Country
from models.leagues import League
from models.players import Player
from models.chats import Chat
from models.accounts import Account
from flask_cors import CORS
from models.last5 import last5
from models.next5 import next5
from models.all_rest_fixtures import all_rest_fixtures
from models.all_past_fixtures import all_past_fixtures
from models.onegame import onegame
from models.events import Event
from models.top_scorers import top_scorers
from models.table import table_fake
from models.H2H import H2H



API_BASE = "https://api-football-beta.p.rapidapi.com"
key =  "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5"


# key =  "804b1594a5msh69900911a788156p125a69jsna7c589797665"

app = Flask(__name__)
CORS(app)


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
        account.user_key = Account.random_api_key()
        account.save()
        return jsonify({'session_id': account.user_key,
                        'username': account.username})
    return jsonify({'session_id': None,
                       'username': ""})

# USER SIGNUP
@app.route('/api/sign_up', methods=["POST"])
def new_user():
    data = request.get_json()
    user_key = Account.random_api_key()
    hashed_password = Account.hash_password(data.get('password'))
    new_account = Account(data.get('firstname'), data.get('lastname'),  
                         data.get('username'), data.get('email'), hashed_password, 
                         user_key)
    new_account._insert()
    return jsonify({'session_id': new_account.user_key,
                        'firstname': new_account.firstname,
                        'lastname': new_account.lastname,
                         'username':new_account.username})


@app.route('/api/countries', methods=["GET"])
def display_countries():
    all_countries = Country.all_countries()
    all_countries.save()
    return jsonify({'countries':all_countries})

@app.route('/api/world_competitions/<country>/<season>', methods=["GET"])
def world_competitions(country, season):
    world_competitions = League.world_competitions(country, season)
    return jsonify({'leagues': world_competitions})

@app.route('/api/leagues_by_country/<country>/<season>', methods=["GET"])
def leagues(country, season):
    leagues_by_country = League.leagues_from_all_countries(country, season)
    leagues_by_country.save()
    return jsonify({'leagues': leagues_by_country})


#### GAMES/GAME
@app.route('/api/last/<num_games>', methods=["GET"])
def last_5(num_games):
    # last_5 = Game.last_5(num_games)
    last_5 = last5
    # last_5.save() 
    return jsonify({'fixtures': last_5})


@app.route('/api/next/<num_games>', methods=["GET"])
def next_5(num_games):
    # next5 = Game.next_5(num_games)
    next_5 = next5
    # last_5.save() 
    return jsonify({'fixtures': next_5})



####### TOP SCORERS
@app.route('/api/topscorers/<season>/<league_id>', methods=[ "GET"])
def topscorers(season, league_id):
    # topscorers_lst = Player.top_scorers(season,league_id)
    topscorers_lst = top_scorers
    return jsonify({'scorers': topscorers_lst})

@app.route('/api/table/<season>/<league_id>', methods=['GET'])
def get_table(season, league_id):
    # table = Team.league_table(season, league_id)
    table = table_fake
    return jsonify(table)


@app.route('/api/games_by_date/<date>', methods=["GET"])
def games_by_date(date):
    date = Game.games_by_date(date)
    return jsonify({'fixtures': date})


@app.route('/api/one_game/<fixture_id>', methods=['GET'])
def one_game(fixture_id):
    # game = Game.game_by_fixture_id(fixture_id)
    game = onegame
    # game.save()
    return jsonify({'fixtures': game})

@app.route('/api/game_stats/<fixture_id>', methods=["GET"])
def game_stats(fixture_id):
    stats = Game.game_stats(fixture_id)
    return jsonify({"fixtures": stats})

@app.route('/api/h2h/<team_id_1>/<team_id_2>', methods=["GET"])
def game_h2h(team_id_1, team_id_2):
    # h2h = Game.game_h2h(team_id_1, team_id_2)
    h2h = H2H
    return jsonify({"fixtures": h2h})   

# http://127.0.0.1:5000/api/upcoming_fixt/39/2020/2021-01-19/2021-06-30
@app.route('/api/upcoming_fixt/<league_id>/<season>/<from_date>/<to_date>', methods=["GET"])
def upcoming_fixt(league_id, season, from_date, to_date):
    # upcoming_fixt = Game.all_upcoming_fixtures(league_id, season, from_date, to_date)
    upcoming_fixt = all_rest_fixtures
    return jsonify({"fixtures":upcoming_fixt})

# http://127.0.0.1:5000/api/past_fixt/39/2020/2020-09-12/2021-01-24
@app.route('/api/past_fixt/<league_id>/<season>/<from_date>/<to_date>', methods=["GET"])
def past_fixt(league_id, season, from_date, to_date):
    # past_fixt = Game.all_past_fixtures(league_id, season, from_date, to_date)
    past_fixt = all_past_fixtures
    return jsonify({"fixtures":past_fixt})

@app.route('/api/team_by_id/<team_id>', methods=["GET"])
def team_by_id(team_id):
    team = Team.team_by_id(team_id)
    return jsonify({'fixtures': team})

# EVENTS

@app.route('/api/game_events/<fixture_id>', methods=["GET"])
def game_events(fixture_id):
    events = Event.events_fixture_id(fixture_id)
    return jsonify({"fixtures": events})

# PLAYERS 

@app.route('/api/lineups/<fixture_id>', methods=['GET'])
def fixture_lineups(fixture_id):
    lineups = Player.lineups_from_fixture(fixture_id)
    return jsonify({"fixtures": lineups})

@app.route('/api/save_chat', methods=['POST'])
def save_chat():
    data = request.get_json()
    print(data)
    chat = Chat(data.get('time'), data.get('text'), data.get('account_id'), data.get('game_id'), data.get('username'))
    chat.save()
    new_chat = Chat.get_chat(data.get('game_id'))
    return jsonify({"chat": new_chat})

@app.route('/api/get_chat/<fixture_id>', methods=['GET'])
def get_chat(fixture_id):
    # data = request.get_json()
    new_chat = Chat.get_chat(fixture_id)
    return jsonify({"chat": new_chat})



if __name__ == "__main__":
    app.run()#debug=True)
