import sqlite3
# import os

"""
pk INTEGER
name VARCHAR
logo VARCHAR
founded INTEGER
stadium VARCHAR
city VARCHAR
stadium_capacity INTEGER
"""

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "database.db")

def schema(dbpath = DATAPATH):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()

        sql = """CREATE TABLE IF NOT EXISTS database (
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR,
                logo VARCHAR,
                founded INTEGER,
                stadium VARCHAR,
                city VARCHAR,
                stadium_capacity INTEGER
            );"""

        cursor.execute(sql)
if __name__ == "__main__":
    schema()