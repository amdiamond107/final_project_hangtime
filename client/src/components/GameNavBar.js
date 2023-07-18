import {NavLink} from "react-router-dom"

function GameNavBar(){
    return (
        <nav>
            <p>
            YOU'VE GOT NEXT!
            
            Request an invite to an upcoming game or schedule a new one of your own...
            </p>
            <div>
                <NavLink to="/find_games">Find Games</NavLink>
                <NavLink to="/create_games">Create New Game</NavLink>
            </div>
        </nav>
    )
}

export default GameNavBar;