import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)
API_BASE = "https://api-football-beta.p.rapidapi.com"
API_KEY = "804b1594a5msh69900911a788156p125a69jsna7c589797665"

class  Chat:

    dbpath = DATAPATH
    tabename = "chats"


    def __init__(self, username, text=None, timestamp=None, pk=None):
        self.pk = pk
        self.username = username
        self.text = text
        self.timestamp = timestamp 

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
    def delete_chat(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""DELETE FROM teams WHERE pk =?;"""
            values = (pk,)
            cursor.execute(sql, values)
            return True
        return False