from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

#migration yet to take effect: added "image" in courts table


class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'

# Table Columns:
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String, nullable=False)
    height = db.Column(db.String, nullable=False)
    weight = db.Column(db.String, nullable=False)
    position = db.Column(db.String, nullable=False)
    player_image = db.Column(db.String)
# TBD on whether these will be necessary for API database:
    # dunkability = db.Column(db.String)
    # frequency = db.Column(db.String)
    # skill_level = db.Column(db.String)
# Table Relationships:
    player_games = db.relationship('PlayerGame', back_populates='player', cascade='all, delete-orphan')
    games = association_proxy('player_games', 'game',
        creator=lambda g: PlayerGame(game=g))

# Validations:
    validates('username')
    def validate_name(self, key, value):
        if not (3 <= len(value) <= 25):
            raise ValueError(f'Not a valid {key} - must be between 3 and 25 characters in length...')
        return value

    validates('age')
    def validate_name(self, key, value):
        if not (12 <= value <= 80):
            raise ValueError(f'Not a valid {key} - must be between 12 and 80 years of age...')
        return value

    validates('gender')
    def validate_name(self, key, value):
        if not (value in ['male', 'female']):
            raise ValueError(f'Please insert "male" or "female" as your {key}')
        return value

    # validates('height')
    # def validate_name(self, key, value):
    #     if value is not (36 <= value <= 96):
    #         raise ValueError(f'Not a valid {key} - must be between 36 and 96 inches tall')
    #     return value

    # validates('weight')
    # def validate_name(self, key, value):
    #     if not (80 <= value <= 400):
    #         raise ValueError(f'Not a valid {key} - must be between 80 and 400 pounds')
    #     return value 

    validates('position')
    def validate_name(self, key, value):
        if value is (not 'PG') or (not 'SG') or (not 'SG') or (not 'PF') or (not 'C'):
            raise ValueError(f'Not a valid {key} - must be "PG", "SG", "SF", "PF", or "C"')
        return value
    
    def __repr__(self):
        return f"Player # {self.id}: {self.username} player"

class PlayerGame(db.Model, SerializerMixin):
    __tablename__ = 'player_games'

# Table Columns:
    id = db.Column(db.Integer, primary_key=True)
    home_score = db.Column(db.Integer)
    away_score = db.Column(db.Integer)

    player_id = db.Column(db.Integer, db.ForeignKey('players.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))

# Table Relationships:
    player = db.relationship('Player', back_populates='player_games')
    game = db.relationship('Game', back_populates='player_games')

# # Validations:
#     validates('score')
#     def validate_name(self, key, value):
#         pass

    def __repr__(self):
        return f"PlayerGame # {self.id}: {self.score}"
    
class Game(db.Model, SerializerMixin):
    __tablename__ = 'games'

# Table Columns: 
    id = db.Column(db.Integer, primary_key=True)
    date_time = db.Column(db.String)
    skill_level = db.Column(db.String)
    gender = db.Column(db.String)
    game_type = db.Column(db.String)
    spots_remaining = db.Column(db.Integer)
    court_id = db.Column(db.Integer, db.ForeignKey('courts.id'))

# Table Relationships:
    player_games = db.relationship('PlayerGame', back_populates='game')
    court = db.relationship('Court', back_populates='games')
    players = association_proxy('player_games', 'player', creator=lambda p: PlayerGame(player=p))

#     validates('game_type')
#     def validate_name(self, key, value):
#         if not (value in ['Indoor', 'Outdoor']):
#             raise ValueError(f'Not a valid {key} - must be "Indoor" or "Outdoor"')
#         return value
    
# # Validations:
    # validates('date_time')
    # def validate_name(self, key, value):
    #     pass

    # validates('type')
    # def validate_name(self, key, value):
    #     pass

    # validates('description')
    # def validate_name(self, key, value):
    #     pass

    def __repr__(self):
        return f"Game # {self.id}: {self.skill_level} {self.gender} {self.game_type} at {self.date_time} - {self.spots_remaining} open player spots remaining."
    
class Court(db.Model, SerializerMixin):
    __tablename__ = 'courts'

# Table Columns:
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    court_image = db.Column(db.String)
    court_type = db.Column(db.String, nullable=False)
    
    # Table Relationships:
    games = db.relationship('Game', back_populates='court', cascade='all, delete-orphan')

    # validates('title')
    # def validate_title(self, key, value):
    #     if not (3 <= len(value) <= 25):
    #         raise ValueError(f'Not a valid {key} - must be between 3 and 25 characters in length...')
    #     return value
    
    # validates('court_type')
    # def validate_name(self, key, value):
    #     if not (value in ['Indoor', 'Outdoor']):
    #         raise ValueError(f'Not a valid {key} - must be "Indoor" or "Outdoor"')
    #     return value
# # Validations:
#     validates('title')
#     def validate_name(self, key, value):
#         pass

#     validates('location')
#     def validate_name(self, key, value):
#         pass  
    def __repr__(self):
        return f"Court # {self.id}: {self.title} ({self.court_type}) at {self.location}."
    