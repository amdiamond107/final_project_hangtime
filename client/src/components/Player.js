function Player({player, joinGame}){

    return (
        <tr>
            <td className="row-name">
                {/* <img src={player.image} /> */}
            </td>
            <td>
                <span>{player.username}</span>
            </td>
            <td>
                <span>{player.gender}</span>
            </td>
            <td>
                <span>{player.position}</span>
            </td>
            <td>
                <span>{player.height}</span>
            </td>
            <td>
                <span>{player.weight}</span>
            </td>
            <button onClick={() => joinGame(player.id)}>Invite to Play</button>
        </tr>
    )

    // return (
    //     <li className="player">
    //         <h1>Player # {player.id}: {player.username} - {player.gender} | {player.height} | {player.weight} | {player.position}  </h1>
    //         <img src={player.image} alt={player.username} />
    //         <button onClick={() => deletePlayer(player.id)}>Delete Player # {player.id}</button>
    //     </li>
    // )
}

export default Player