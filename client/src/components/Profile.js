import React from "react";
import Game from "./Game";

function Profile({ games, joinGame}) {
    const gameList = games.map((game) => (
      <Game key={game.id} game={game} joinGame={joinGame} />
    ));
  
    return (
      <div>
        <h2>Upcoming Games</h2>
        {gameList}
      </div>
    );
  }
  
export default Profile;


