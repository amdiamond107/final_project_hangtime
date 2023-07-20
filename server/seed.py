#!/usr/bin/env python3

from app import app
from datetime import datetime
from models import db, Player, PlayerGame, Game, Court 

with app.app_context():
    
    Player.query.delete()
    PlayerGame.query.delete()
    Game.query.delete()
    Court.query.delete()

    players = []
    players.append(Player(username="dishindimes88", password="Amd1071988", age=34, gender="male", height="6 feet 0 inches", weight="200 pounds", position="SG", player_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcBwOU8ObIGXPKNXInNlGSHXUPE1p3ztkQw&usqp=CAU'))
    players.append(Player(username="Ms. Don't Miss", password="scorer123", age=28, gender="female", height="5 feet 8 inches", weight="135 pounds", position="PG", player_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNXhYk1U5pnioghzq2MyWqJl5XA_0lZ38Ng&usqp=CAU'))
    players.append(Player(username="dunkmasterflex", password="dunk123", age=25, gender="male", height="6 feet 9 inches", weight="250 pounds", position="C", player_image='https://thumbs.dreamstime.com/b/street-ball-basketball-streetballer-dunk-942736.jpg'))

    games = []
    games.append(Game(date_time="09/09/2023, 01:30 PM", skill_level="Advanced", gender="Men", game_type="Half Court (3v3)", spots_remaining=4, court_id=1))
    games.append(Game(date_time="10/10/2023, 02:30 PM", skill_level="Intermediate", gender="Ladies", game_type="Full Court (5v5)", spots_remaining=3, court_id=2))
    games.append(Game(date_time="11/11/2023, 03:30 PM", skill_level="Recreational", gender="Co-Ed", game_type="Full Court (5v5)", spots_remaining=2, court_id=3))

    player_games = []
    player_games.append(PlayerGame(home_score=100, away_score=99, player_id=1, game_id=1))
    player_games.append(PlayerGame(home_score=88, away_score=87, player_id=2, game_id=3))
    player_games.append(PlayerGame(home_score=94, away_score=90, player_id=3, game_id=3))

    courts = []
    courts.append(Court(title="Holcombe Rucker Park", location="West 155th St, New York, NY, 10039", court_image='https://cassiuslife.com/wp-content/uploads/sites/47/2021/06/16226430909232.jpg?strip=all&quality=80&w=1024&crop=0,0,100,683px', court_type="Outdoor"))
    courts.append(Court(title="PS 6 Gym", location="45 East 81st St, New York, NY, 10028", court_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KnwWtjHo8hcAQsWQJ9tprOf1kq1ScWyP3g&usqp=CAU', court_type="Indoor"))
    courts.append(Court(title="Columbia Prep Gym", location="5 West 93rd St, New York, NY, 10025", court_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NXGocvFGynBwnOQH1R2IZ_sIa2Fqo9uaCA&usqp=CAU', court_type="Indoor"))

    db.session.add_all(players)
    db.session.add_all(player_games)
    db.session.add_all(games)
    db.session.add_all(courts)
    db.session.commit()
    print("🌱 Players, Player Games, Games, and Courts successfully seeded! 🌱")
