import {NavLink} from "react-router-dom"

function NavBar(){
    return (
        <nav>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/add_player">Add Player</NavLink>
                <NavLink to="/update_player">Update Player</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;