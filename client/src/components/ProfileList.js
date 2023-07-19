import React from "react"
import Game from './Game'
import PlayerProfile from './PlayerProfile'

function ProfileList({games, loggedInPlayer}){

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                    <th className="row-name">
                    </th>
                    <th>
                        Date/Time
                    </th>
                    <th>
                        Location
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
                </tr>
            </thead>
            <tbody>

                {games.map(game => {
                    return <PlayerProfile key={game.id} game={game} loggedInPlayer={loggedInPlayer}/>
                    /** ^^^Render a list of <Store> components here. */
                })}
            </tbody>
        </table>
    )
}

export default ProfileList
