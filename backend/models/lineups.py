import sqlite3
import os
import requests
from pprint import pprint

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)

class Lineup:
    dbpath = DATAPATH
    tablename = "lineups"

    def __init__(self, team_id, game_id, player_id=0, fixture_id=0, pk=None):
        self.pk = pk
        self.team_id = team_id
        self.game_id = game_id
        self.player_id = player_id
        self.fixture_id = fixture_id

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
                team_id, game_id, player_id
                ) VALUES(?,?,?);""" 
            values = (self.team_id, self.game_id, self.player_id,)
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET team_id=?, game_id=?,
                    plyer_id=? WHERE pk=?;"""
            values = (self.team_id, self.game_id, self.player_id, self.pk)
            cursor.execute(sql, values)

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
    def select_all(cls):
    ## get all entries from our database
    ## SELECT * FROM tablename WHERE
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()          
            sql = f""" SELECT * FROM {cls.tablename};"""  
            cursor.execute(sql)
            return cursor.fetchall()


    @classmethod
    def lineups_from_game_by_date(cls, fixture_id):
        url = f"https://rapidapi.p.rapidapi.com/v2/lineups/{fixture_id}"
        headers = {
            'x-rapidapi-key': "804b1594a5msh69900911a788156p125a69jsna7c589797665",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }
        response = requests.request("GET", url, headers=headers)
        data = response.json()
        return(data)

if __name__=='__main__':


    lineups = Lineup.lineups_from_game_by_date("592211")
    pprint(lineups)