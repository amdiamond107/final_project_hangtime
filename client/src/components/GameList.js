import React from "react"
import Game from './Game'

function GameList({games, joinGame, updateJoinGameFormData}){

    return(
        <table class="table table-striped">
            <thead class="table-dark">
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
            </thead>
                <tbody>

                    {games.map(game => {
                        return <Game key={game.id} game={game} joinGame={joinGame} updateJoinGameFormData={updateJoinGameFormData} />
                        /** ^^^Render a list of <Store> components here. */

                    })}
                </tbody>
        </table>
    )
}

export default GameList
