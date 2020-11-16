import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)

class Event:

    dbpath = DATAPATH
    tablename = "events"

    def __init__(self, team_id, game_id, date="", 
                 timestamp="", league_id=0, time_elapsed=0, pk=None):
        self.pk = pk 
        self.team_id = team_id
        self.game_id = game_id
        self.date = date
        self.timestamp = timestamp
        self.league_id = league_id
        self.time_elapsed = time_elapsed

    def save(self):
        """Call _insert if the row does not exist in the database, otherwise
        call _update
        """
        if self.pk:
            self._update()
        else:
            self._insert()
    
    def _insert(self):
        'Insert this new data into the database'
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""INSERT INTO {self.tablename} (
                team_id,
                game_id,
                date,
                timestamp,
                league_id,
                time_elapsed
                ) VALUES (?,?,?,?,?,?);"""
            values = (self.team_id, self.game_id, self.date, 
                      self.timestamp, self.league_id, self.time_elapsed)
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET 
                    team_id=?, 
                    game_id=?,
                    date=?,
                    timestamp=?,
                    league_id=?,
                    away_team_id=? WHERE pk=?;"""
            values = (self.team_id, self.game_id, self.date,
                      self.timestamp, self.league_id, self.time_elapsed, 
                      self.pk)
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
    def events_fixture_id(cls, fixture_id):
        url = "https://api-football-beta.p.rapidapi.com/fixtures/events"

        querystring = {"fixture": fixture_id}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-beta.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)

if __name__=='__main__':

    events = Event.events_fixture_id('592215')
    pprint(events)