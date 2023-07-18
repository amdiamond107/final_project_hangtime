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
}

export default Player