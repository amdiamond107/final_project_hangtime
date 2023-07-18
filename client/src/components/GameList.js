import React from "react"
import Game from './Game'

function GameList({games, joinGame, updateJoinGameFormData}){

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Date/Time
                    </th>
                    <th>
                        Court
                    </th>
                    <th>
                        Skill Level
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Game Type
                    </th>
                    <th>
                        Spots Remaining
                    </th>
                    <th>
                        Join Game
                    </th>
                </tr>
                {games.map(game => {
                    return <Game key={game.id} game={game} joinGame={joinGame} updateJoinGameFormData={updateJoinGameFormData} />
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

export default GameList

/* <table>
<tbody>
    <tr>
        <th className="row-name">
            Name
        </th>
        <th>
            Image
        </th>
        <th>
            Season
        </th>
        <th>
            Episode
        </th>
    </tr>
    {/** Render a list of <Store> components here. */
// </tbody>

// </table> */}