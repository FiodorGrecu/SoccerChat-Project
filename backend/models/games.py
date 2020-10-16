import sqlite3
import os

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