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
            firstname VARCHAR,
            lastname VARCHAR,
            username VARCHAR,
            email VARCHAR,
            password_hash VARCHAR(128),
            user_key VARCHAR 
        );""")
        
        cursor.execute("""
        CREATE TABLE chats (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp FLOAT,
            game_id INTEGER,
            account_id INTEGER,
            text VARCHAR,
            username VARCHAR,
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
        
            FOREIGN KEY (account_id) REFERENCES accounts(pk),
            FOREIGN KEY (game_id) REFERENCES games(pk)
        );""")

# Not sure the FOREIGN KEY FOR "leagues" table can be

        cursor.execute("""
        CREATE TABLE leagues (
            league_id INTEGER,
            name VARCHAR,
            competition_type VARCHAR,
            logo VARCHAR,
            game_id INTEGER,
            country VARCHAR,
            FOREIGN KEY (league_id) REFERENCES accounts(pk)
            FOREIGN KEY (game_id) REFERENCES accounts(pk)
        );""")
        
# Not sure the FOREIGN KEY FOR "countries" table can be

        cursor.execute("""
        CREATE TABLE countries (
            country_name VARCHAR,
            country_code VARCHAR,
            country_flag VARCHAR,
            FOREIGN KEY (league_id) REFERENCES accounts(pk)
            FOREIGN KEY (game_id) REFERENCES accounts(pk)
        );""")
        
        # Have the home team and away team as columns for the games table
        # Chats foregn key should reference the games           

        cursor.execute("""
        CREATE TABLE predictions (
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            game_schedule DATETIME,
            league_id INTEGER,
            teams VARCHAR,
            round VARCHAR,
            home_team_id VARCHAR,
            away_team_id VARCHAR,
            # FOREIGN KEY (home_team_id) REFERENCES teams(teams_id)
            # FOREIGN KEY (away_team_id) REFERENCES teams(team_id)
            # FOREIGN KEY (game_id) REFERENCES teams(pk)
            # FOREIGN KEY (team_id) REFERENCES teams(pk)


        );""")


if __name__ == "__main__":
    schema()