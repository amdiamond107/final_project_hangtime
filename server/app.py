#!/usr/bin/env python3

import ipdb

from flask import Flask, make_response, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS

from models import db, Player, PlayerGame, Game, Court

app = Flask(__name__)
app.secret_key = b'~\xee\xfb\x97>W\\\xc0\x88\xce\n\xb0\xcf\xf6\xa1\xc1'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///players.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


CORS(app)

api = Api(app)
@app.route('/')
def index():
    return '<h1>players database</h1>'

class Login(Resource):
    def post(self):
        player = Player.query.filter(Player.username == request.json.get('username')).first()
        if player:
            session['player_id'] = player.id
            response_body = player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'player_image'))
            games_list = []
            for game in player.games:
                games_list.append(game.to_dict(only=('id', 'date_time', 'skill_level', 'gender', 'game_type', 'spots_remaining', 'court_id')))

            response_body.update({
                "games": games_list
            })

            return make_response(jsonify(response_body), 201)
        
        response_body = {
            "error": "invalid username or password"
        }
        return make_response(jsonify(response_body), 401)
    
api.add_resource(Login, '/login')

class CheckSession(Resource):
    def get(self):
        player = Player.query.filter(Player.id == session['player_id']).first()

        if player:
            response_body = player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'player_image'))
            games_list = []
            for game in player.games:
                games_list.append(game.to_dict(only=('id', 'date_time', 'skill_level', 'gender', 'game_type', 'spots_remaining', 'court_id')))

            response_body.update({
                "games": games_list
            })

            return make_response(jsonify(response_body), 200)
        
        response_body = {
            "error": "please log in or create new profile"
        }
        return make_response(jsonify(response_body), 401)        

api.add_resource(CheckSession, '/check_session')

class Logout(Resource):
    def delete(self):
        session['player_id'] = None
        response_body = {}

        return make_response(jsonify(response_body), 204)

api.add_resource(Logout, '/logout')

class PlayerGameById(Resource):
    def get(self, id):
        playerGame = PlayerGame.query.filter(PlayerGame.id == id).first()

        if not playerGame:
            response_body = {
                "error": "game not found"
            }
            status = 404

        else:
            response_body = playerGame.to_dict(only=('id', 'home_score', 'away_score', 'player_id', 'game_id'))
            status = 200

        return make_response(jsonify(response_body), status)

api.add_resource(PlayerGameById, '/players/<int:id>')

class Players(Resource):
    def get(self):
        players = Player.query.all()

        response_body = []

        for player in players:
            response_body.append(player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'player_image')))

        return make_response(jsonify(response_body), 200)
    
    def post(self):
        try:
            json_data = request.get_json()
            new_player = Player(username=json_data.get('username'), age=json_data.get('age'), gender=json_data.get('gender'), height=json_data.get('height'), weight=json_data.get('weight'), position=json_data.get('position'), player_image=json_data.get('player_image'))
            db.session.add(new_player)
            db.session.commit()

            response_body = new_player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'player_image'))

            return make_response(jsonify(response_body), 201)
        
        except ValueError as error:
            response_body = {
                "error": error.args
            }
            return make_response(jsonify(response_body), 422)

api.add_resource(Players, '/players')

class PlayersById(Resource):
    def get(self, id):
        player = Player.query.filter(Player.id == id).first()

        if not player:
            response_body = {
                "error": "player not found"
            }
            status = 404

        else:
            response_body = player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'player_image'))
            status = 200

        return make_response(jsonify(response_body), status)
    
    def patch(self, id):
        player = Player.query.filter(Player.id == id).first()

        if not player:
            response_body = {
                "error": "Player not found"
            }
            status = 404
        else:
            json_data = request.get_json()

            for key in json_data:
                setattr(player, key, json_data.get(key))

                db.session.add(player)
                db.session.commit()

                response_body = player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'player_image'))

            return make_response(jsonify(response_body), status)
        
    def delete(self, id):
        player = Player.query.filter(Player.id == id).first()

        if not player:

            response_body = {
                "error": "Player not found"
            }
            status = 404

        else:

            db.session.delete(player)
            db.session.commit()

            response_body = {}

            status = 204

        return make_response(jsonify(response_body), status)

api.add_resource(PlayersById, '/players/<int:id>')

class Games(Resource):
    def get(self):
        games = Game.query.all()
        
        response_body = []

        for game in games:
            game_dictionary = game.to_dict(only=('id', 'date_time', 'game_type', 'skill_level', 'spots_remaining', 'gender'))
            game_dictionary.update({'court': game.court.to_dict(only=('title', 'court_type'))})
            response_body.append(game_dictionary)

        return make_response(jsonify(response_body), 200)
    
    def post(self):
        try:
            json_data = request.get_json()
            new_game = Game(court_id=json_data.get('court_id'), date_time=json_data.get('date_time'), game_type=json_data.get('game_type'), skill_level=json_data.get('skill_level'), spots_remaining=json_data.get('spots_remaining'), gender=json_data.get('gender'))
            db.session.add(new_game)
            db.session.commit()

            response_body = new_game.to_dict(only=('id', 'date_time', 'game_type', 'skill_level', 'court_id', 'spots_remaining', 'gender'))
            response_body.update({'court': new_game.court.to_dict(only=('title', 'court_type'))})
        
            return make_response(jsonify(response_body), 201)
        
        except ValueError as error:
            response_body = {
                "error": error.args
            }
            return make_response(jsonify(response_body), 422)
        
api.add_resource(Games, '/games')

class GamesById(Resource):
    def get(self, id):
        game = Game.query.filter(Game.id == id).first()

        if not game:
            response_body = {
                "error": "Game not found"
            }
            status = 404
        else:
            response_body = game.to_dict(only=('id', 'date_time', 'game_type', 'skill_level', 'court_id', 'spots_remaining', 'gender'))
            status = 200

        return make_response(jsonify(response_body), status)
    
    def patch(self, id):
        game = Game.query.filter(Game.id == id).first()
        
        if not game:
            response_body = {
                "error": "Game not found"
            }
            status = 404
        else:
            json_data = request.get_json()

            for key in json_data:
                setattr(game, key, json_data.get(key))

                db.session.add(game)
                db.session.commit()

                response_body = game.to_dict(only=('id', 'date_time', 'game_type', 'skill_level', 'court_id', 'spots_remaining', 'gender'))
                status = 200
            
            return make_response(jsonify(response_body), status)
        
    def delete(self, id):
        game = Game.query.filter(Game.id == id).first()

        if not game:

            response_body = {
                "error": "Game not found"
            }
            status = 404

        else:

            db.session.delete(game)
            db.session.commit()

            response_body = {}

            status = 204

            return make_response(jsonify(response_body), status)
        
api.add_resource(GamesById, '/games/<int:id>')


class Courts(Resource):
    def get(self):
        courts = Court.query.all()
        
        response_body = []
        
        for court in courts:
            response_body.append(court.to_dict(only=('id', 'title', 'location', 'court_type', 'court_image')))

        return make_response(jsonify(response_body), 200)
    
    def post(self):
        try:
            json_data = request.get_json()
            new_court = Court(title=json_data.get('title'), location=json_data.get('location'))
            db.session.add(new_court)
            db.session.commit()

            response_body = new_court.to_dict(only=('id', 'title', 'location', 'court_type', 'court_image'))
        
            return make_response(jsonify(response_body), 201)
    
        except ValueError as error:
            response_body = {
                "error": error.args
            }
            return make_response(jsonify(response_body), 422)

api.add_resource(Courts, '/courts')

class CourtsById(Resource):
    def get(self, id):
        court = Court.query.filter(Court.id == id).first()

        if not court:
            response_body = {
                "error": "Court not found"
            }
            status = 404
        else:
            response_body = court.to_dict(only=('id', 'title', 'location', 'court_type', 'court_image'))
            status = 200

        return make_response(jsonify(response_body), status)
    
    def patch(self, id):
        court = Court.query.filter(Court.id == id).first()
        
        if not court:
            response_body = {
                "error": "Court not found"
            }
            status = 404
        else:
            json_data = request.get_json()

            for key in json_data:
                setattr(court, key, json_data.get(key))

                db.session.add(court)
                db.session.commit()

                response_body = court.to_dict(only=('id', 'title', 'location', 'court_type', 'court_image'))
                status = 200
            
            return make_response(jsonify(response_body), status)
        
    def delete(self, id):
        court = Court.query.filter(Court.id == id).first()

        if not court:

            response_body = {
                "error": "Court not found"
            }
            status = 404

        else:

            db.session.delete(court)
            db.session.commit()

            response_body = {}

            status = 204

        return make_response(jsonify(response_body), status)
    
api.add_resource(CourtsById, '/courts/<int:id>')

if __name__ == '__main__':
    app.run(port=7000, debug=True)