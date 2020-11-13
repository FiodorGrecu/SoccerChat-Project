import sqlite3
import os


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "soccerchat.db")
print(DATAPATH)

def schema(dbpath = DATAPATH):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()

        cursor.execute("""
        CREATE TABLE teams (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER,
            name VARCHAR,
            logo VARCHAR,
            year_founded INTEGER,
            FOREIGN KEY (team_id) REFERENCES teams(team_id)
        );""")

        cursor.execute("""
        CREATE TABLE games (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            game_schedule DATETIME,
            league_id INTEGER,
            teams VARCHAR,
            round VARCHAR,
            home_team_id VARCHAR,
            away_team_id VARCHAR,
            FOREIGN KEY (home_team_id) REFERENCES teams(pk)
            FOREIGN KEY (away_team_id) REFERENCES teams(pk)

        );""")

        cursor.execute ("""
        CREATE TABLE event (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER,
            game_id INTEGER,
            date DATETIME,
            timestamp STRING,
            league_id INTEGER,
            time_elapsed INTEGER,
            FOREIGN KEY (team_id) REFERENCES teams(team_id)
        );""")

        cursor.execute ("""
        CREATE TABLE players (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            player_id INTEGER,
            name VARCHAR,
            jersey_num INTEGER,
            position VARCHAR,
            team_id INTEGER,
            FOREIGN KEY (team_id) REFERENCES teams(team_id)
        );""")

        cursor.execute ("""
        CREATE TABLE venue (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            venue_id INTEGER,
            name VARCHAR,
            address VARCHAR,
            city VARCHAR,
            capacity INTEGER,
            surface VARCHAR,
            image VARCHAR,
            team_id INTEGER,
            FOREIGN KEY (team_id) REFERENCES teams(event)
        );""")

        cursor.execute ("""
        CREATE TABLE lineups (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER,
            game_id INTEGER,
            player_id INTEGER,
            FOREIGN KEY (team_id) REFERENCES teams(team_id)
        );""")

        cursor.execute(""" 
        CREATE TABLE accounts (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            username VARCHAR(16) UNIQUE NOT NULL,
            password_hash VARCHAR(128),
            user_key VARCHAR 
        );""")
        
        cursor.execute("""
        CREATE TABLE chats (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp FLOAT,
            text VARCHAR,
            account_id INTEGER,
            game_id INTEGER,
            FOREIGN KEY (account_id) REFERENCES accounts(pk)
            FOREIGN KEY (game_id) REFERENCES games(pk)
        );""")

        cursor.execute("""
        CREATE TABLE tables (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER,
            contents VARCHAR,
            account_id INTEGER,
            game_id INTEGER,
            FOREIGN KEY (account_id) REFERENCES accounts(pk)
            FOREIGN KEY (game_id) REFERENCES games(pk)
        );""")
        
        
        # Have the home team and away team as columns for the games table
        # Chats foregn key should reference the games           


if __name__ == "__main__":
    schema()