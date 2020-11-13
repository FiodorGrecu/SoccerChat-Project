import sqlite3
import os
import requests
from pprint import pprint

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)
API_BASE = "https://api-football-beta.p.rapidapi.com"
API_KEY = "804b1594a5msh69900911a788156p125a69jsna7c589797665"


class Team:

    dbpath = DATAPATH
    tablename = "teams"

    def __init__(self, team_id, name, logo="", year_founded=None, pk=None):
        self.pk = pk        
        self.team_id = team_id
        self.name = name
        self.logo = logo
        self.year_founded = year_founded

    # make a save function for permanent storage in the db
    # a load function that can load by id (Show_one func)

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
                team_id, name, logo, year_founded  
                ) VALUES (?,?,?,?);"""
            values = (self.team_id, self.name, self.logo, 
                    self.year_founded )
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET team_id=?, name=?, logo=?, 
                    year_founded=? WHERE pk=?;"""
            values = (self.team_id, self.name, self.logo, self.year_founded,
                      self.pk)
            cursor.execute(sql, values)
    
    @classmethod
    def delete_team(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""DELETE FROM teams WHERE pk =?;"""
            values = (pk,)
            cursor.execute(sql, values)
            return True
        return False
    
    @classmethod
    def select_all(cls):
    ## get all entries from our database
    ## SELECT * FROM tablename WHERE
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()          
            sql = f""" SELECT * FROM {cls.tablename};"""  
            cursor.execute(sql)
            return cursor.fetchall()

    @classmethod
    def select_one(cls, where_clause):
    #     # select one entry from our database, based on criteria passed 
    #     # to our function as a string of the format "WHERE <clause here>"
    #     # select_one("WHERE team pk=12 or 1 or whatever")
    #     # "SELECT * FROM listings " + where_clause
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
    def lookup_team(cls, team_id, name):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""SELECT * FROM {cls.tablename} WHERE league_id=?, season=?;"""
            values = (team_id, name)
            cursor.execute(sql, values)
            return cursor.fetchone()

    @classmethod
    def team_for_league(cls, team_id, league_id, season):
        url = "https://rapidapi.p.rapidapi.com/teams/statistics" 
        querystring = {"team":team_id, "league": league_id,"season":season}
        headers = {
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com",
            'x-rapidapi-key': "804b1594a5msh69900911a788156p125a69jsna7c589797665"
            }
        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        print(data)
        team = cls(team_id, data["response"]["team"]["name"], logo=data["response"]["team"]["logo"])
        # name, logo="", year_founded="", pk=None)
        team.save()
            
    @classmethod
    def teams_for_league(cls, league_id, season):
        url = "https://rapidapi.p.rapidapi.com/teams/" 
        querystring = {"league": league_id,"season":season}
        headers = {
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com",
            'x-rapidapi-key': "804b1594a5msh69900911a788156p125a69jsna7c589797665"
            }
        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return data['response']

    @classmethod
    def team_stat_by_date(cls,league_id, team_id, date):
        url = f"https://api-football-v1.p.rapidapi.com/v2/statistics/{league_id}/{team_id}/{date}"

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers)
        data = response.json()
        return(data)
        
    @classmethod
    def team_by_id(cls, team_id):
        url = f"https://api-football-v1.p.rapidapi.com/v2/teams/team/{team_id}"

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers)
        data = response.json()
        return (data)

    @classmethod
    def league_table(cls, league_id):
        url = "https://api-football-beta.p.rapidapi.com/standings"

        querystring = {"season":"2020","league": league_id}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)

if __name__=='__main__':

    # team = Team.team_by_id('34')
    # stat = Team.team_stat_by_date(2,33,"2019-12-19")
    table = Team.league_table('39')
    pprint(table)