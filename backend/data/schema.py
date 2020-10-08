import sqlite3
# import os

def schema(dbpath = "soccerchat.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()

        cursor.execute("""
        CREATE TABLE Teams (
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR,
                logo VARCHAR,
                founded INTEGER,
                stadium_name VARCHAR,
                stadium_capacity INTEGER,
                stadium_city VARCHAR,                
            );""")

        cursor.execute()



if __name__ == "__main__":
    schema()