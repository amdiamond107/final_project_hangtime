function Player({player, joinGame}){

    return (
        <tr class="align-middle">
            <td>
                <img src={player.player_image} class="img-resize" alt="player_name"/>
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
            <td>
            <button  class="btn btn-primary" type="button" onClick={() => joinGame(player.id)}>Invite to Play</button>
            </td>
        </tr>
    )
}

export default Player