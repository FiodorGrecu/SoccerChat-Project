import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
# print(DATAPATH)


class League:
    
    dbpath = DATAPATH
    tablename = "leagues"


    def __init__(self, league_id, name, competition_type, logo, country, pk):
        self.pk = pk
        self.league_id = league_id
        self.name = name
        self.competition_type = competition_type
        self.logo = logo
        self.country = country
    
    def save(self):
        """Call _insert if the row does not exist in the database, otherwise
        call _update
        """
        if self.pk:
            self._update()
        else:
            self._insert()

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET
                    league_id=?, name=?, competition_type=?, 
                    logo=?, country=? WHERE=?;"""
            values = (self.league_id, self.name, self.competition_type,
                      self.logo, self.country, self.pk)
            cursor.execute(sql, values)

    def _insert(self):
        """Insert this new data into the database
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""INSERT INTO {self.tablename} SET (
                    league_id, name, competition_type, 
                    logo, country
                    ) VALUES(?,?,?,?,?);"""
            values  = (self.league_id, self.name, self.competition_type,
                       self.logo, self.country )
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid

  
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
    def all_leagues(cls):
        url = "https://api-football-v1.p.rapidapi.com/v2/leagues"

        querystring = {"season": "2020", "country": "England"}

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = response.json()
        return(data)

    @classmethod
    def leagues_from_all_countries(cls, country, season):
        url = f"https://api-football-v1.p.rapidapi.com/v2/leagues/country/{country}/{season}"

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers)
        data = response.json()
        return(data)
    
    @classmethod
    def world_competitions(cls, country, season):
        url = f"https://api-football-v1.p.rapidapi.com/v2/leagues/country/{country}/{season}"

        headers = {
            'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
            'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers)
        data = response.json()
        return(data)


if __name__=='__main__':


    # all_leagues = League.all_leagues()
    all_country_leagues = League.leagues_from_all_countries("italy", "2020")
    # world_competitions = League.world_competitions("world", "2020")
    pprint(all_country_leagues)
    # pprint(world_competitions)