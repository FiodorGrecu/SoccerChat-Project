import sqlite3

class Team:

    dbpath = "soccerchat.db"
    tablename = "team"

    def __init__(self, team_id, name, logo="", year_founded="", venue_name="", venue_capacity="", venue_city="", pk=None):
        self.team_id = team_id
        self.name = name
        self.logo = logo
        self.year_founded = year_founded
        self.venue_name = venue_name
        self.venue_capacity = venue_capacity
        self.venue_city = venue_city
        self.pk = pk        
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
                team_id, name, logo, year_founded, 
                venue_name, venue_capacity, 
                venue_city) VALUES (?,?,?,?,?,?,?);"""
            values = (self.team_id, self.name, self.logo, 
                    self.year_founded, self.venue_name, self.venue_capacity, 
                    self.venue_city, self.pk)
            cursor.execute(sql, values)

    def _update(self):
        """Update this row in the database by primary key, to reflect
        all new attribtues
        """
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql= f"""UPDATE {self.tablename} SET team_id=?, name=?, logo=?, 
                    year_founded=?, venue_name=?, venue_capacity=?, venue_city=?
                     WHERE pk=?;"""
            values = (self.team_id, self.name, self.logo, self.year_founded, 
                     self.venue_name, self.venue_capacity, self.venue_city, self.pk)
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
    #     # select one entry from our database, based on criteria passed 
    #     # to our function as a string of the format "WHERE <clause here>"
    #     # select_one("WHERE team pk=12 or 1 or whatever")
    #     # "SELECT * FROM listings " + where_clause
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""SELECT * FROM {cls.tablename} {where_clause};"""      
            cursor.execute(sql)
            return cursor.fetchone()

    @classmethod
    def select_many(cls):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f'''SELECT * FROM {cls.tablename} WHERE team_id=10 and ranking=10;''' #not sure what to do hre
            cursor.execute(sql)
            return cursor.fetchmany()