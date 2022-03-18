import sqlite3
import os

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")



class Message:

    dbpath = DATAPATH
    tablename = "messages"

    def __init__(self,timestamp, contents, account_id=0, game_id=0, pk=None):
       self.pk = pk 
       self.timestamp = timestamp
       self.contents = contents
       self.account_id = account_id
       self.game_id = game_id

    def _insert(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""INSERT INTO {self.tablename} (
                timestamp, contents, account_id, game_id
                ) VALUES (?,?,?,?);"""
            values = (self.timestamp, self.contents, self.account_id,
                      self.game_id)
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid
    
    def _update(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET timestamp=?, contents=?,
                    account_id=?, game_id=? WHERE pk=?;"""
            values = (self.timestamp, self.contents, self.account_id,
                      self.game_id, self.pk)
            cursor.execute(sql, values)

    def save(self):
        if self.pk:
            self._update()
        else:
            self._insert()
    
    @classmethod
    def delete(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""DELETE FROM accounts WHERE pk=?;"""
            values = (pk,)
            cursor.execute(sql, values)
            return True
        return False
    
    @classmethod
    def select_all(cls):
    ## get all entries from our database
    ## get all some particupar entries from our database
    ## SELECT * FROM tablename WHERE
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()          
            sql = f""" SELECT * FROM {cls.tablename};"""  
            cursor.execute(sql)
            return cursor.fetchall()

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