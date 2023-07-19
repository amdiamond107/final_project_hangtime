import {NavLink} from "react-router-dom"

function Court({court}){
    return (
        <tr class="align-middle">
            <td>
                <img src={court.court_image} class="img-resize"/>
            </td>
            <td>
                <span>{court.title}</span>
            </td>
            <td>
                <span>{court.location} ({court.court_type})</span>
            </td>
            <td>
                <NavLink className="btn btn-outline-secondary" to="/find_games">View Games</NavLink>
            </td>
            <td>
                <NavLink className="btn btn-outline-primary" to="/create_games">Create New Game</NavLink>
            </td>
        </tr>
    )
}
export default Court