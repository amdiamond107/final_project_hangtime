const [postPlayerFormData, setPostPlayerFormData] = useState({})
const [playerIdToUpdate, setPlayerIdToUpdate] = useState(0)
const [patchPlayerFormData, setPatchPlayerFormData] = useState({})


useEffect(() => {
    if(players.length > 0 && players[0].id){
      setPlayerIdToUpdate(players[0].id)
    }
  }, [players])


  function addPlayer(event){
    event.preventDefault()

    fetch('/players', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(postPlayerFormData)
    })
    .then(response => response.json())
    .then(newPlayer => setPlayers(players => [...players, newPlayer]))
  }

  function updatePlayer(event){
    event.preventDefault()
    fetch(`/players/${playerIdToUpdate}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(patchPlayerFormData)
    })
    .then(response => response.json())
    .then(updatedPlayer => {
      setPlayers(players => {
        return players.map(player => {
          if(player.id === updatedPlayer.id){
            return updatedPlayer
          }
          else {
            return player
          }
        })
      })
    })
  }

  function updatePostPlayerFormData(event){
    setPostPlayerFormData({...postPlayerFormData, [event.target.name]: event.target.value})
  }

  function updatePatchPlayerFormData(event){
    setPatchPlayerFormData({...patchPlayerFormData, [event.target.name]: event.target.value})
  }

//   <NewPlayerForm addPlayer={addPlayer} updatePostPlayerFormData={updatePostPlayerFormData}/>

//   <UpdatePlayerForm updatePlayer={updatePlayer} setPlayerIdToUpdate={setPlayerIdToUpdate} updatePatchPlayerFormData={updatePatchPlayerFormData} players={players}/>

function joinGame(id){
  fetch(`/games/${gameIdToUpdate}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(patchGameFormData)
  })
  .then(response => response.json())
  .then(updatedGame => {
    setGames(games => {
      return games.map(game => {
        if(game.spots_remaining > 0){
          return updatedGame
        }
        else {
          return game
        }
      })
    })
  })
}


const [profile, setProfile] = useState([]);

function updateJoinGameFormData(event){
  setPatchGameFormData({...patchGameFormData, [event.target.name]: event.target.value})
}

function handleJoinGame(gameToJoin) {
  const gameJoined = profile.find((game) => game.id === gameToJoin.id);
  if(!gameJoined) {
      setProfile([...profile, gameToJoin])
  }
}

function handleLeaveGame(gameToLeave) {
  setProfile((profile) => profile.filter((game) => game.id !== gameToLeave.id)
  );
}

<Profile games={profile} onJoinGame={handleJoinGame} onLeaveGame={handleLeaveGame}/>
