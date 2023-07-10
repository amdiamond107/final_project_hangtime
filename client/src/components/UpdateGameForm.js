import {useState} from 'react'

function UpdateGameForm({updateGame, setIdToUpdate, updatePatchFormData, games}){

    const [updateFormSubmitted, setUpdateFormSubmitted] = useState(false)

    return (
        <div className="game-form">
            <h2>Update Game Form</h2>
            {updateFormSubmitted ? <h1>Game Updated!</h1> :
            <form onSubmit={event => {
                updateGame(event)
                setUpdateFormSubmitted(updateFormSubmitted => !updateFormSubmitted)
            }}>
                <label>Choose a Game: </label>
                <select onChange={(event) => {
                    setIdToUpdate(event.target.value)
                }} name="id">
                {games.map(game => {
                    return <option key={game.id} value={game.id}>{`${game.id}: ${game.description} on ${game.date_time} at ${court.title} (${court.court_type})`}</option>
                })}
                </select>
                <input onChange={updatePatchFormData} type="text" name="name" placeholder="Game name"/>
                <input onChange={updatePatchFormData} type="text" name="image" placeholder="Image URL"/>
                <input type="submit" value="Update Game"/>
            </form>}
        </div>
    )
}

export default UpdateGameForm