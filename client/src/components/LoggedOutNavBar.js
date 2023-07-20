import {NavLink} from "react-router-dom"

function LoggedOutNavBar(){
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
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/create-account">Create Account</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default LoggedOutNavBar;