import {NavLink} from "react-router-dom"

function Court({court}){
    return (
        <tr>
            <td className="row-name">
                <img src={court.court_image} />
            </td>
            <td>
                <span>{court.title}</span>
            </td>
            <td>
                <span>{court.location} ({court.court_type})</span>
            </td>
            <td>
                <NavLink to="/find_games">View Games</NavLink>
            </td>
            <td>
                <NavLink to="/create_games">Create New Game</NavLink>
            </td>
        </tr>
    )
}
export default Court