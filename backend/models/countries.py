import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)


class Country:
    
    dbpath = DATAPATH
    tablename = "countries"

    def __init__(self, name, code, flag, pk):
        self.pk = pk
        self.name = name
        self.code = code
        self.flag = flag
        self.country = country