function Player({player, joinGame}){

    return (
        <tr>
            <td className="row-name">
                <img src={player.player_image} class="img-resize"/>
            </td>
            <td class="table-data">
                <span>{player.username}</span>
            </td>
            <td>
                <span>{player.age}</span>
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