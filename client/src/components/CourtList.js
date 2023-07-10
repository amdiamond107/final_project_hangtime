import Court from './Court'

function CourtList({courts, deleteCourt}){

    const courtComponents = courts.map(court => {
        return <Court key={court.id} court={court} deleteCourt={deleteCourt}/>
    })

    return (
        <ul className="court-list">{courtComponents}</ul>
        )
}

export default CourtList