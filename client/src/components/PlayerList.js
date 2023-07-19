import Player from './Player'

function PlayerList({players, joinGame}){

    return(
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th className="row-name">
                    </th>
                    <th>
                        Player Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Position
                    </th>
                    <th>
                        Height
                    </th>
                    <th>
                        Weight
                    </th>
                    <th>
                        Invite
                    </th>
                </tr>
            </thead>
            <tbody>
                {players.map(player => {
                    return <Player key={player.id} player={player} joinGame={joinGame}/>
                    /** ^^^Render a list of <Store> components here. */

                })}
            </tbody>
        </table>
    )
    }

export default PlayerList