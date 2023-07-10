import Player from './Player'

function PlayerList({players, deletePlayer}){

    const playerComponents = players.map(player => {
        return <Player key={player.id} player={player} deletePlayer={deletePlayer}/>
    })

    return (
        <ul className="player-list">{playerComponents}</ul>
        )
}

export default PlayerList