import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)

class Game:
    
    dbpath = DATAPATH
    tablename = "games"

    def __init__(self, game_schedule, league_id, teams="", round="", 
                home_team_id="", away_team_id="", pk=None):
        self.pk = pk
        self.game_schedule = game_schedule
        self.league_id = league_id
        self.teams = teams
        self.round = round
        self.home_team_id = home_team_id
        self.away_team_id = away_team_id

    def save(self):
        """Call _insert if the row does not exist in the database, otherwise
        call _update
        """
        if self.pk:
            self._update()
        else:
            self._insert()

    def _insert(self):
        """Insert this new data into the database
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""INSERT INTO {self.tablename} (
                game_schedule, 
                league_id, 
                teams, 
                round,
                home_team_id, 
                away_team_id
                ) VALUES (?,?,?,?,?,?);"""
            values = (self.game_schedule, self.league_id, self.teams, 
                      self.round, self.home_team_id, self.away_team_id)
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET 
                    game_schedule=?, 
                    league_id=?,
                    teams=?,
                    round=?,
                    home_team_id=?,
                    away_team_id=? WHERE pk=?;"""
            values = (self.game_schedule, self.league_id, self.teams,
                      self.round, self.home_team_id, self.away_team_id, 
                      self.pk)
            cursor.execute(sql, values)

    @classmethod
    def select_all(cls, where_clause):
    ## get all entries from our database
    ## SELECT * FROM tablename WHERE
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()          
            sql = f""" SELECT * FROM {cls.tablename} WHERE {where_clause};"""  
            cursor.execute(sql)
            return cursor.fetchall()
    
    @classmethod
    def select_one(cls, where_clause):
    
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""SELECT * FROM {cls.tablename} WHERE {where_clause};"""      
            cursor.execute(sql)
            row = cursor.fetchone()
            # database returns pk as the first thing ...needs to be the last thing
            row = row[1:] + row[:1]
            # create the t=return object
            return cls(*row)

    @classmethod
    def delete_game(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""DELETE FROM games WHERE pk =?;"""
            values = (pk,)
            cursor.execute(sql, values)
            return True
        return False

    @classmethod
    def lookup_game(cls, league_id):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""SELECT * FROM {cls.tablename} WHERE league_id=?;"""
            values = (league_id)
            cursor.execute(sql, values)
            return cursor.fetchone()

    # I need an Endpoint that gives me one game
    @classmethod
    def game_h2h(cls, team_id_1=0, team_id_2=0):
        url = f"https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/{team_id_1}/{team_id_2}"

        querystring = {"timezone":"Europe/London"}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        # team1_name = data['api']['teams'][0]['name']
        # round = data['api']['teams'][0]
        # round = data['api']['teams']
        # pprint(data)
        # home_team = data['api']['fixtures'][28]['homeTeam']['team_name']
        # h_t_logo = data['api']['fixtures'][28]['homeTeam']['logo']
        # away_team = data['api']['fixtures'][28]['awayTeam']['team_name']
        # a_t_logo = data['api']['fixtures'][28]['awayTeam']['logo']
        
        # game1 = {"team_id": home_team, 
        #         "home_logo": h_t_logo,  
        #         "team_id": away_team, 
        #         "away_logo": a_t_logo}
        # pprint(data)
        return((data))
        # pprint(((home_team, h_t_logo), (a_t_logo, away_team)))
    
    @classmethod
    def games_by_date(cls, date):
        url = "https://api-football-beta.p.rapidapi.com/fixtures"

        querystring = {"league":"39","season":"2020","date":{date}}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)

    @classmethod
    def next_fixtures(cls): 
        url = "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2/next/10"

        querystring = {"timezone":"Europe/London"}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)

        data = response.json()
        pprint(data)


    @classmethod
    def game_stats(cls, fixture_id):
        url = "https://api-football-beta.p.rapidapi.com/fixtures/statistics"
        
        querystring = {"fixture": fixture_id}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)

    @classmethod
    def last_5(cls, num_games):
        url = f"https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2/last/{num_games}"

        querystring = {"timezone":"Europe/London"}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)

    @classmethod
    def last_10(cls, num_games):

        url = "https://api-football-beta.p.rapidapi.com/fixtures/rounds"

        querystring = {"season":"2020","league":"39"}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)

# GAMES  BY LEAGUEA  (FIXTURE/GAMES ARE USED INTERCHANGABLY)
    @classmethod
    def fixtures_by_league(cls):
        pass

if __name__=='__main__':
    

    # games_by_date = Game.games_by_date("2020-11-07")
    # h2h = Game.game_h2h(40,50)
    # last10 = Game.last_10(10)
    game_stats = Game.game_stats('592215')
    
    pprint(game_stats)
   

 