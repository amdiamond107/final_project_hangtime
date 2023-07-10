import Game from './Game'

function GameList({games, deleteGame}){

    const gameComponents = games.map(game => {
        return <Game key={game.id} game={game} deleteGame={deleteGame}/>
    })

    return (
        <ul className="game-list">{gameComponents}</ul>
        )
}

export default GameList