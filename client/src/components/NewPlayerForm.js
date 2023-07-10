import {useState} from 'react'

function NewPlayerForm({addPlayer, updatePostFormData}){

    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <div className="player-form">
            <h2>Add New Player Form</h2>
            {formSubmitted ? <h1>Thanks for adding a new player!</h1> :
            <form onSubmit={event => {
                addPlayer(event)
                setFormSubmitted(formSubmitted => !formSubmitted)
            }}>
                <input onChange={updatePostFormData} type="text" name="name" placeholder="Player name" required/>
                <input onChange={updatePostFormData} type="text" name="image" placeholder="Image URL" required/>
                <input type="submit" value="Add Player"/>
            </form>}
        </div>
    )
}

export default NewPlayerForm