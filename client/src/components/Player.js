function Player({player, deletePlayer}){
    return (
        <li className="player">
            <h1>Player # {player.id}: {player.username} - {player.gender} | {player.height} | {player.weight} | {player.position}  </h1>
            <img src={player.image} alt={player.username} />
            <button onClick={() => deletePlayer(player.id)}>Delete Player # {player.id}</button>
        </li>
    )
}

export default Player