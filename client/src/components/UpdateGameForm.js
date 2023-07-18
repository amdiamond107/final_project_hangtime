import {useState} from 'react'

function UpdateGameForm({updateGame, setGameIdToUpdate, updatePatchGameFormData, games}){

    const [updateGameFormSubmitted, setUpdateGameFormSubmitted] = useState(false)

    return (
        <div className="game-form">
            <h2>Update Game Form</h2>
            {updateGameFormSubmitted ? <h1>Game Updated!</h1> :
            <form onSubmit={event => {
                updateGame(event)
                setUpdateGameFormSubmitted(updateGameFormSubmitted => !updateGameFormSubmitted)
            }}>
                <label>Choose a Game:</label>
                <select onChange={(event) => {
                    setGameIdToUpdate(event.target.value)
                }} name="game-id">
                {games.map(game => {
                    return <option key={game.id} value={game.id}>{`${game.id}: ${game.description} on ${game.date_time} at ${game.court_id} (${game.game_type})`}</option>
                })}
                </select>
                <input onChange={updatePatchGameFormData} type="text" name="name" placeholder="Game name"/>
                <input onChange={updatePatchGameFormData} type="text" name="image" placeholder="Image URL"/>
                <input type="submit" value="Update Game"/>
            </form>}
        </div>
    )
}

export default UpdateGameForm