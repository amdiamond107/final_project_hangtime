function Court({court, deleteCourt}){
    return (
        <li className="court">
            <h1>Court # {court.id}: {court.title} located at {court.location}</h1>
            <img src={court.image} alt={court.title} />
            <button onClick={() => deleteCourt(court.id)}>Delete Court # {court.id}</button>
        </li>
    )
}

export default Court