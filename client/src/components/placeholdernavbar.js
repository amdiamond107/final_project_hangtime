import {NavLink} from "react-router-dom"

function NavBar(){
    return (
        <nav>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <h1>
            🏀 Hangtime - The App for Pickup BBall 
            <span className="logo" role="img">
            ⛹⛹️‍♀️
            </span>
            </h1>
            <div>
                <NavLink to="/courts">Courts</NavLink>
                <NavLink to="/games">Games</NavLink>
                <NavLink to="/players">Players</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;