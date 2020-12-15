import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
# print(DATAPATH)


class Country:
    
    dbpath = DATAPATH
    tablename = "countries"

    def __init__(self, name, code, flag, pk):
        self.pk = pk
        self.name = name
        self.code = code
        self.flag = flag
        
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
            sql = f"""INSERT INTO {self.tablename} SET (
                    name, code, flag
                    ) VALUES(?,?,?);"""
            values  = (self.name, self.code, self.flag)
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid
    
    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET
                    name=?, code=?, flag=? WHERE=?;"""
            values = (self.name, self.code, self.flag, self.pk)
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
    def all_countries(cls):
        url = "https://api-football-v1.p.rapidapi.com/v2/countries"

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers)
        data = response.json()
        return(data)

if __name__=='__main__':
     

     countries = Country.all_countries()
     pprint(countries)