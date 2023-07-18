import Court from './Court'

function CourtList({courts, joinGame}){

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>
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
    // const gameComponents = games.map(game => {
    //     return <Game key={game.id} game={game} joinGame={joinGame}/>
    // })

    // return (
    //     <ul className="game-list">{gameComponents}</ul>
    //     )
}

//     const courtComponents = courts.map(court => {
//         return <Court key={court.id} court={court} deleteCourt={deleteCourt}/>
//     })

//     return (
//         <ul className="court-list">{courtComponents}</ul>
//         )
// }

export default CourtList