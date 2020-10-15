import sqlite3
import os

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "soccerchat.db")
print(DATAPATH)

class Player:

    dbpath = DATAPATH
    tablename = "player"

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
