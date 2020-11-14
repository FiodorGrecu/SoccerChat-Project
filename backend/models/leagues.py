import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)


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
         