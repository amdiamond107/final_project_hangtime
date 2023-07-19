import Court from './Court'

function CourtList({courts, joinGame}){

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                    <th className="row-name">
                    </th>
                    <th>
                        Court
                    </th>
                    <th>
                        Location
                    </th>
                    <th>
                        View Game
                    </th>
                    <th>
                        Schedule Game
                    </th>
                </tr>
            </thead>
            <tbody>
                {courts.map(court => {
                    return <Court key={court.id} court={court} joinGame={joinGame}/>
                    /** ^^^Render a list of <Store> components here. */

                })}
            </tbody>
        </table>
    )
}

export default CourtList