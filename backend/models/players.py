import sqlite3
import os
import requests
from pprint import pprint

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "soccerchat.db")
# print(DATAPATH)
API_BASE = "https://api-football-beta.p.rapidapi.com"
API_KEY = "804b1594a5msh69900911a788156p125a69jsna7c589797665"

class Player:

    dbpath = DATAPATH
    tablename = "players"

    def __init__(self, player_id, name, jersey_num=0, position="", 
                 team_id=0, pk=None):
        self.pk = pk
        self.player_id = player_id
        self.name = name
        self.jersey_num = jersey_num
        self.position = position
        self.team_id = team_id

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
                player_id,
                name,
                jersey_num,
                position,
                team_id
                ) VALUES (?,?,?,?,?);"""
            values = (self.player_id, self.name, self.jersey_num,
                      self.position, self.team_id)
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET 
                    player_id=?,
                    name=?,
                    jersey_num=?,
                    position=?,
                    team_id=? WHERE pk=?"""
            values = (self.player_id, self.name, self.jersey_num,
                      self.position, self.team_id, self.pk)    
            cursor.execute(sql, values)

    @classmethod
    def select_one(cls, where_clause):
        "Selects one event from our database and display's the results"
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
    def select_all(cls):
    ## get all entries from our database
    ## SELECT * FROM tablename WHERE
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()          
            sql = f""" SELECT * FROM {cls.tablename};"""  
            cursor.execute(sql)
            return cursor.fetchall()  

    @classmethod
    def delete_player(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""DELETE FROM teams WHERE pk =?;"""
            values = (pk,)
            cursor.execute(sql, values)
            return True
        return False               

    @classmethod
    def lineups_from_fixture(cls, fixture):
        url = f"https://api-football-v1.p.rapidapi.com/v2/lineups/{fixture}"

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers)
        data = response.json()
        return(data)
    
    @classmethod
    def top_scorers(cls, season, league_id):
        url = f"https://api-football-beta.p.rapidapi.com/players/topscorers"
        querystring = {"season": {season},"league": {league_id}}
        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com"
            }
        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)



if __name__=='__main__':


    # lineups = Player.lineups_from_fixture('592215')
    topscorers = Player.top_scorers('2020','39')
    pprint(topscorers)