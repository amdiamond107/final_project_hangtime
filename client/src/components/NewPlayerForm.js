import {useState} from 'react'

function NewPlayerForm({addPlayer, updatePostPlayerFormData}){

    const [playerFormSubmitted, setPlayerFormSubmitted] = useState(false)

    return (
        <div className="player-form">
            <h2>Add New Player Form</h2>
            {playerFormSubmitted ? <h1>Thanks for creating your new player player!</h1> :
            <form onSubmit={event => {
                addPlayer(event)
                setPlayerFormSubmitted(playerFormSubmitted => !playerFormSubmitted)
            }}>
                <input onChange={updatePostPlayerFormData} type="text" name="name" placeholder="Player name" required/>
                <input onChange={updatePostPlayerFormData} type="text" name="image" placeholder="Image URL" required/>
                <input type="submit" value="Add Player"/>
            </form>}
        </div>
    )
}

export default NewPlayerForm