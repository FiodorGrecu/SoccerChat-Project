import sqlite3
import os 
from hashlib import sha256
import random 
# from models.messages import Message


PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)

class Account:

    dbpath = DATAPATH
    tablename = "accounts"

    def __init__(self, username, password_hash, user_key="", pk=None):
        self.pk = pk
        self.username = username
        self.password_hash = password_hash
        self.user_key = user_key      

    def _insert(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""INSERT INTO {self.tablename} (
                username, password_hash, user_key
                ) VALUES(?,?,?);"""
            values = (self.username, self.password_hash, self.user_key)
            cursor.execute(sql, values)
            return cursor.lastrowid

    # def my_messages(self):
    #     """Look up all Messages a User has executed
    #     """
    #     return Message.all_for_user(self.pk)

    def _update(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET username=?, password_hash=?,
                    user_key=? WHERE pk=?;"""
            values = (self.username, self.password_hash, self.user_key, self.pk)
            cursor.execute(sql, values)

    @classmethod
    def login(cls, username, password):
        """Will need to hash input password, and then return eithr a 
        User instance or None
        """
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""SELECT * FROM accounts WHERE username=? AND password_hash=?;"""
            cursor.execute(sql,(username, cls.hash_password(password)))
            account = cursor.fetchone()
            if  account:
                return Account(*account[:1], account[0])
            return None

    @classmethod
    def delete(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""DELETE FROM accounts WHERE pk=?;"""
            values = (pk,)
            cursor.execute(sql, values)
            return True
        return False

    @classmethod
    def api_authenticate(cls, user_key):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = """SELECT * FROM accounts WHERE user_key=?;"""
            cursor.execute(sql, (user_key,))
            return cursor.fetchone()

    @staticmethod
    def hash_password(password):
        hasher = sha256()
        hasher.update(password.encode())
        return hasher.hexdigest()

    @staticmethod
    def random_api_key(length=15):
        random_string = "".join([str(random.randint(1,10)) for i in range(25)])
        hasher = sha256()
        hasher.update(random_string.encode())
        return hasher.hexdigest()[:length]