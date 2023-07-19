import {useState} from 'react'

function Game({game, joinGame, updateJoinGameFormData}){
    const [hasJoinedGame, setHasJoinedGame] = useState(false);
    return (
        <tr>
            <td className="row-name">
                <span>{game.date_time}</span>
            </td>
            <td>
                <span>{game.court.title} ({game.court.court_type})</span>
            </td>
            <td>
                <span>{game.skill_level}</span>
            </td>
            <td>
                <span>{game.gender}</span>
            </td>
            <td>
                <span>{game.game_type}</span>
            </td>
            <td>
                <span>{game.spots_remaining}</span>
            </td>

            {hasJoinedGame ? (
            <button class="btn btn-primary" type="button" onClick={() => {
                joinGame(game.id, game.spots_remaining + 1)
                setHasJoinedGame(false)
            }} className="primary">Leave Game
            </button>
            
            ) : (
                
                <button class="btn btn-primary" type="button" onClick={() => {
                    joinGame(game.id, game.spots_remaining - 1)
                    setHasJoinedGame(true)
                }}>Join Game</button>
            )}
        </tr>
    );
}

export default Game