import {useState} from 'react'

function UpdatePlayerForm({updatePlayer, setIdToUpdate, updatePatchFormData, players}){

    const [updateFormSubmitted, setUpdateFormSubmitted] = useState(false)

    return (
        <div className="player-form">
            <h2>Update Player Form</h2>
            {updateFormSubmitted ? <h1>Player Updated!</h1> :
            <form onSubmit={event => {
                updatePlayer(event)
                setUpdateFormSubmitted(updateFormSubmitted => !updateFormSubmitted)
            }}>
                <label>Choose a Player: </label>
                <select onChange={(event) => {
                    setIdToUpdate(event.target.value)
                }} name="id">
                {players.map(player => {
                    return <option key={player.id} value={player.id}>{`${player.id}: ${player.username} - ${player.gender} | ${player.height} | ${player.weight} | ${player.position} `}</option>
                })}
                </select>
                <input onChange={updatePatchFormData} type="text" name="name" placeholder="Player name"/>
                <input onChange={updatePatchFormData} type="text" name="image" placeholder="Image URL"/>
                <input type="submit" value="Update Player"/>
            </form>}
        </div>
    )
}

export default UpdatePlayerForm