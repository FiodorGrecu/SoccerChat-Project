import sqlite3
import os


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "soccerchat.db")
print(DATAPATH)

def schema(dbpath = DATAPATH):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()

        cursor.execute("""
        CREATE TABLE accounts(
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            username VARCHAR(16)UNIQUE NOT NULL,
            password_hash VARCHAR(128),

        )""")

        cursor.execute("""
        CREATE TABLE teams (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER,
            name VARCHAR,
            logo VARCHAR,
            year_founded INTEGER,
            venue_name VARCHAR,
            venue_capacity INTEGER,
            venue_city VARCHAR               
        );""")

        cursor.execute("""
        CREATE TABLE games (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            fixture_id INTEGER,
            league_id INTEGER,
            game_date VARCHAR,
            game_time TIMESTAMP,
            home_team VARCHAR,
            away_team VARCHAR
        );""")

        cursor.execute("""
        CREATE TABLE chats(
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            username VARCHAR,
            team_id,

        );""")

        
        # Have the home team and away team as columns for the games table
        # Chats foregn key should reference the games    

        


if __name__ == "__main__":
    schema()