import {NavLink} from "react-router-dom"

function ProfileNavBar(){
    return (
        <nav>
            <h1>You've got next!
            </h1>
                <p>Request an invite for an upcoming game or schedule a newly created game of your own...</p>
                <div>
                    <NavLink to="/find_games">Create Profile</NavLink>
                    <NavLink to="/create_games">Update Profile</NavLink>
                </div>
        </nav>
    )
}

export default ProfileNavBar;