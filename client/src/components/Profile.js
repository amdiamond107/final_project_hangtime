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



// import Player from './Player'

// function Profile({players}){
//     players.map(player => {
//         if (player.id === players.id){
//             return <Player key={player.id} player={player}/>
//         } else {
//             return false
//         }
//     })
// }


// export default Profile