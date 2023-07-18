function Court({court, joinGame}){
    

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
            <button className="btn btn-outline-secondary" onClick={() => joinGame(court.id)}>View Games</button>
            </td>
            <td>
            <button className="btn btn-primary" onClick={() => joinGame(court.id)}>Schedule a Game</button>
            </td>
        </tr>
    )
}
//     return (
//         <li className="court">
//             <h1>Court # {court.id}: {court.title} located at {court.location}</h1>
            // <img src={court.image} alt={court.title} />
//             <button onClick={() => joincourt(court.id)}>Join court</button>
//         </li>
//     )
// }

export default Court