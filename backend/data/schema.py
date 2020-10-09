import sqlite3
import os

def schema(dbpath = "soccerchat.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()

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
            league VARCHAR
        );""")

        # cursor.execute("""
        # CREATE TABLE game (
        #     pk INTEGER PRIMARY KEY AUTOINCREMENT,
        #     event_date INTEGER,
        #     event_timestamp VARCHAR,
        #     team_id INTEGER, 
        #     team_id INTEGER,
        #     venue_name VARCHAR,
        #     venue_capacity INTEGER,
        #     venue_city VARCHAR                
        # );""")
            

        


if __name__ == "__main__":
    schema()