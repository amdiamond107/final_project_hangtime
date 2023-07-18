import {useState} from 'react'

function Game({game}){

    // const [joinGame, setJoinGame] = useState(
    //     game.spots_remaining--);
    
    // const [leaveGame, setLeaveGame] = useState(
    //     game.spots_remaining++);

    const [spots, setSpots] = useState(true)
    const [leaveSpots, setLeaveSpots] = useState(true)

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

            {spots ? (
            <button onClick={setSpots(true)} className="primary">
                Join Game
                </button>
            ) : (
                <button onClick={setLeaveSpots(true)}>Leave Game</button>
            )}
        </tr>
    );
}

export default Game