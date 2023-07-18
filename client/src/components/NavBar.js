import {NavLink} from "react-router-dom"

function NavBar({handleLogOut}){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" to="/">
                🏀 Hangtime ⛹⛹️‍♀️
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>                    
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/courts">Courts</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/find_games">Join Games</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/create_games">Create Games</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/players">Players</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li class="nav-item">
                    <button className="nav-link" onClick={handleLogOut}>Log Out</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;