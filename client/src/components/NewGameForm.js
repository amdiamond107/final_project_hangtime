import {useState} from 'react'

function NewGameForm({addGame, updateGameFormData, courts}){

    const [gameFormSubmitted, setGameFormSubmitted] = useState(false)
    
    return (
        <div className="game-form">
            <h2>Create a New Game</h2>
            {gameFormSubmitted ? <h1>Thanks for adding a new game!</h1> :
            <form onSubmit={event => {
                addGame(event)
                setGameFormSubmitted(gameFormSubmitted => !gameFormSubmitted)
            }}>
                <p>Select a date/time</p>
                <input onChange={updateGameFormData} type="datetime-local" name="date_time" placeholder="Game Date/Time" min="2023-07-14" max="2024-07-14" required/>

                <br />
                <br />
                <select onChange={updateGameFormData} type="text" name="court_id" placeholder="Court" required>
                    <option value="">--Select a court--</option>
                    {courts.map(court => {
                        return <option key={court.id} value={court.id}>{court.title}</option>
                    })}
                </select>

                <br />
                <br />
                <select onChange={updateGameFormData} type="text" name="skill_level" placeholder="Skill Level" required>
                    <option value="">--Select a skill level--</option>
                    <option value="Recreational">Recreational</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <br />
                <br />
                <select onChange={updateGameFormData} type="text" name="gender" placeholder="Men, Ladies, or Co-Ed" required>
                    <option value="">--Select a gender--</option>
                    <option value="Men">Men</option>
                    <option value="Ladies">Ladies</option>
                    <option value="Co-Ed">Co-Ed</option>
                </select>

                <br />
                <br />
                <select onChange={updateGameFormData} type="text" name="game_type" placeholder="Full Court (5v5) or Half Court(3v3)" required>
                    <option value="">--Select a game type--</option>
                    <option value="Full Court (5v5)">Full Court (5v5)</option>
                    <option value="Half Court (3v3)">Half Court (3v3)</option>
                </select>

                <input type="submit" value="Create Game"/>
            </form>}
        </div>
    )
}

export default NewGameForm