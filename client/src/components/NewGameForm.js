import {useState} from 'react'

function NewGameForm({addGame, updatePostFormData}){

    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <div className="game-form">
            <h2>Add New Game Form</h2>
            {formSubmitted ? <h1>Thanks for adding a new game!</h1> :
            <form onSubmit={event => {
                addGame(event)
                setFormSubmitted(formSubmitted => !formSubmitted)
            }}>
                <input onChange={updatePostFormData} type="text" name="name" placeholder="Game name" required/>
                <input onChange={updatePostFormData} type="text" name="image" placeholder="Image URL" required/>
                <input type="submit" value="Add Game"/>
            </form>}
        </div>
    )
}

export default NewGameForm