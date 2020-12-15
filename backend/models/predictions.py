import sqlite3
import os
import requests
from pprint import pprint


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
# print(DATAPATH)

class Prediction:

    dbpath = DATAPATH
    tablename = "predictions"

    def __init__(self,):
        pass