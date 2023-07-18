import {useState} from 'react'

function UpdatePlayerForm({updatePlayer, setPlayerIdToUpdate, updatePatchPlayerFormData, players}){

    const [updatePlayerFormSubmitted, setUpdatePlayerFormSubmitted] = useState(false)

    return (
        <div className="player-form">
            <h2>Update Player Form</h2>
            {updatePlayerFormSubmitted ? <h1>Player Updated!</h1> :
            <form onSubmit={event => {
                updatePlayer(event)
                setUpdatePlayerFormSubmitted(updatePlayerFormSubmitted => !updatePlayerFormSubmitted)
            }}>
                <label>Choose a Player: </label>
                <select onChange={(event) => {
                    setPlayerIdToUpdate(event.target.value)
                }} name="player-id">
                {players.map(player => {
                    return <option key={player.id} value={player.id}>{`${player.id}: ${player.username} - ${player.gender} | ${player.height} | ${player.weight} | ${player.position} `}</option>
                })}
                </select>
                <input onChange={updatePatchPlayerFormData} type="text" name="name" placeholder="Player name"/>
                <input onChange={updatePatchPlayerFormData} type="text" name="image" placeholder="Image URL"/>
                <input type="submit" value="Update Player"/>
            </form>}
        </div>
    )
}

export default UpdatePlayerForm