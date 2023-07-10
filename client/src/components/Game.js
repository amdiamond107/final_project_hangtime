function Game({game, deleteGame}){
    return (
        <li className="game">
            <h1>Game # {game.id}: {game.description} | {game.date_time} | {game.type} </h1>
            <img src={game.image} alt={game.description} />
            <button onClick={() => deleteGame(game.id)}>Delete Game # {game.id}</button>
        </li>
    )
}

export default Game