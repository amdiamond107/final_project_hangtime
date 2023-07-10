#!/usr/bin/env python3

import ipdb

from flask import Flask, make_response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS

from models import db, Player, PlayerGame, Game, Court

app = Flask(__name__)
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

class Players(Resource):
    def get(self):
        players = Player.query.all()

        response_body = []

        for player in players:
            response_body.append(player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'image')))

        return make_response(jsonify(response_body), 200)
    
    def post(self):
        try:
            json_data = request.get_json()
            new_player = Player(username=json_data.get('username'), age=json_data.get('age'), gender=json_data.get('gender'), height=json_data.get('height'), weight=json_data.get('weight'), position=json_data.get('position'), image=json_data.get('image'))
            db.session.add(new_player)
            db.session.commit()

            response_body = new_player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'image'))

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
            response_body = player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'image'))
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

                response_body = player.to_dict(only=('id', 'username', 'age', 'gender', 'height', 'weight', 'position', 'image'))

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
            response_body.append(game.to_dict(only=('id', 'date_time', 'type', 'description')))

        return make_response(jsonify(response_body), 200)
    
    def post(self):
        try:
            json_data = request.get_json()
            new_game = Game(court_id=json_data.get('court_id'), date_time=json_data.get('date_time'), type=json_data.get('type'), description=json_data.get('description'))
            db.session.add(new_game)
            db.session.commit()

            response_body = new_game.to_dict(only=('id', 'date_time', 'type', 'description', 'court_id'))
        
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
            response_body = game.to_dict(only=('id', 'date_time', 'type', 'description', 'court_id'))
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

                response_body = game.to_dict(only=('id', 'date_time', 'type', 'description', 'court_id'))
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
            response_body.append(court.to_dict(only=('id', 'title', 'location')))

        return make_response(jsonify(response_body), 200)
    
    def post(self):
        try:
            json_data = request.get_json()
            new_court = Court(title=json_data.get('title'), location=json_data.get('location'))
            db.session.add(new_court)
            db.session.commit()

            response_body = new_court.to_dict(only=('id', 'title', 'location'))
        
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
            response_body = court.to_dict(only=('id', 'title', 'location'))
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

                response_body = court.to_dict(only=('id', 'title', 'location'))
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