import sqlite3
import os

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, "../data/soccerchat.db")
print(DATAPATH)

class Venue:

    dbpath = DATAPATH
    tablename = "venue"

    def __init__(self, venue_id, name, address="", city="", 
                capacity="", surface="", image="", team_id=0, pk=None):
            self.pk = pk        
            self.venue_id = venue_id
            self.name = name
            self.address = address
            self.city = city
            self.capacity = capacity
            self.surface = surface
            self.image = image
            self.team_id = team_id
        # make a save function for permanent storage in the db
        # a load function that can load by id (Show_one func)

    def save(self):
        """Call _insert if the row does not exist in the database, otherwise
        call _update
        """
        if self.pk:
            self._update()
        else:
            self._insert()

    def _insert(self):
        """Insert this new data into the database
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""INSERT INTO {self.tablename} (
                venue_id,
                name,
                address,
                city,
                capacity,
                surface,
                image,
                team_id
                ) VALUES (?,?,?,?,?,?,?);"""
            values = (self.venue_id, self.name, self.address, self.city,
                    self.capacity, self.surface, self.image, self.team_id)
            cursor.execute(sql, values)
            self.pk = cursor.lastrowid

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""UPDATE {self.tablename} SET 
                    venue_id=?,
                    name=?,
                    address=?,
                    city=?,
                    capacity=?,
                    surface=?,
                    image=?,
                    team_id=? WHERE pk=?;"""
            values = (self.venue_id, self.name, self.address, self.city,
                      self.capacity, self.surface, self.image, self.team_id,
                      self.pk)
            cursor.execute(sql, values)

    @classmethod
    def select_all(cls):
    ## get all entries from our database
    ## SELECT * FROM tablename WHERE
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()          
            sql = f""" SELECT * FROM {cls.tablename};"""  
            cursor.execute(sql)
            return cursor.fetchall()

    @classmethod
    def select_one(cls, where_clause):
    
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""SELECT * FROM {cls.tablename} WHERE {where_clause};"""      
            cursor.execute(sql)
            row = cursor.fetchone()
            # database returns pk as the first thing ...needs to be the last thing
            row = row[1:] + row[:1]
            # create the t=return object
            return cls(*row)

