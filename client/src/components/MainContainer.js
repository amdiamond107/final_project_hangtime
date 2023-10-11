import '../normalize.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom"
import {NavLink} from "react-router-dom"
import NavBar from './NavBar'
import LoggedOutNavBar from './LoggedOutNavBar'
import Login from './Login'
import GameNavBar from './GameNavBar'
import Header from './Header'
import PlayerList from './PlayerList'
import CourtList from './CourtList'
import GameList from './GameList'
import NewPlayerForm from './NewPlayerForm'
import NewGameForm from './NewGameForm'
import UpdatePlayerForm from './UpdatePlayerForm'
import UpdateGameForm from './UpdateGameForm'
import SearchGame from "./SearchGame";
import SearchPlayers from "./SearchPlayers";
import SearchCourt from "./SearchCourt";
import PlayerProfile from "./PlayerProfile";

function MainContainer() {

  const [players, setPlayers] = useState([])
  const [postPlayerFormData, setPostPlayerFormData] = useState({})
  const [playerIdToUpdate, setPlayerIdToUpdate] = useState(0)
  const [patchPlayerFormData, setPatchPlayerFormData] = useState({})  

  const [games, setGames] = useState([])
  const [gameFormData, setGameFormData] = useState({
    "date_time": "",
    "court": {
      "title": "",
      "court_type": ""
    },
    "skill_level": "",
    "gender": "",
    "game_type": "",
    "spots_remaining": 9
  })
  const [gameIdToUpdate, setGameIdToUpdate] = useState(0)
  const [patchGameFormData, setPatchGameFormData] = useState({})

  const [courts, setCourts] = useState([])
  const [courtIdToUpdate, setCourtIdToUpdate] = useState(0)
  const [patchCourtFormData, setPatchCourtFormData] = useState({})

  const [searchGameText, setSearchGameText] = useState("")
  const [searchPlayerText, setSearchPlayerText] = useState("")
  const [searchCourtText, setSearchCourtText] = useState("")

  const [loginFormData, setLoginFormData] = useState({})
  const [loggedInPlayer, setLoggedInPlayer] = useState(null)

  useEffect(() => {
    fetch('/check_session')
    .then(response => {
      if (response.ok){
        response.json().then(player => setLoggedInPlayer(player))
      }
    })
  }, [])

  function handleLogOut(){
    fetch('/logout', {
      method: "DELETE"
    })
    .then(response => {
      if (response.ok){
        setLoggedInPlayer(null)
      }
    })
  }

  useEffect(() => {
    fetch('/players')
    .then(response => response.json())
    .then(playerData => setPlayers(playerData))
  }, [])


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

  useEffect(() => {
    fetch('/games')
    .then(response => response.json())
    .then(gameData => setGames(gameData))
  }, [])

  useEffect(() => {
    if(games.length > 0 && games[0].id){
      setGameIdToUpdate(games[0].id)
    }
  }, [games])

  function addGame(event){
    event.preventDefault()
    fetch('/games', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(gameFormData)
    })
    .then(response => response.json())
    .then(newGame => setGames(games => [...games, newGame]))
  }
  
  function updateGameFormData(event){
    console.log(event.target.attributes)
    if (event.target.name === "court_id"){
      setGameFormData({...gameFormData, [event.target.name]: Number(event.target.value)})
    } 
    else{
    setGameFormData({...gameFormData, [event.target.name]: event.target.value})
  }
  }



  function updateGame(event){
    event.preventDefault()
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
          if(game.id === updatedGame.id){
            return updatedGame
          }
          else {
            return game
          }
        })
      })
    })
  }


  function joinGame(gameIdToUpdate, spots_remaining){
        fetch(`/games/${gameIdToUpdate}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({spots_remaining: spots_remaining})
        })
        .then(response => {
        if(response.ok){
            response.json()
            .then(updatedGame => {
            setGames(games.map(game => {
                if (game.id === updatedGame.id){
                return {...game, spots_remaining: spots_remaining}
                }
                else {
                return game
                }
            }))
            })
        }
        })
    }

    function updateJoinGameFormData(event){
        setPatchGameFormData({...patchGameFormData, [event.target.name]: event.target.value})
    } 


  useEffect(() => {
    fetch('/courts')
    .then(response => response.json())
    .then(courtData => setCourts(courtData))
  }, [])
  
  
  useEffect(() => {
    if(courts.length > 0 && courts[0].id){
      setCourtIdToUpdate(courts[0].id)
    }
  }, [courts])


  const filteredGames = games.filter(game => {
    if(searchGameText === ""){
      return true
    } 
    return game.court.title.toLowerCase().includes(searchGameText.toLowerCase()) || game.date_time.toLowerCase().includes(searchGameText.toLowerCase()) || game.skill_level.toLowerCase().includes(searchGameText.toLowerCase()) || game.gender.toLowerCase().includes(searchGameText.toLowerCase()) 
    })

    const filteredPlayers = players.filter(player => {
      if(player === ""){
        return true
      } 
      return player.username.toLowerCase().includes(searchPlayerText.toLowerCase()) || player.position.toLowerCase().includes(searchPlayerText.toLowerCase()) || player.height.toLowerCase().includes(searchPlayerText.toLowerCase())  || player.weight.toLowerCase().includes(searchPlayerText.toLowerCase())  || player.gender.toLowerCase().includes(searchPlayerText.toLowerCase()) 
      })

    const filteredCourts = courts.filter(court => {
      if(searchCourtText === ""){
        return true
      } 
      return court.title.toLowerCase().includes(searchCourtText.toLowerCase()) || court.location.toLowerCase().includes(searchCourtText.toLowerCase()) || court.court_type.toLowerCase().includes(searchCourtText.toLowerCase())
      })

    function handleLogin(event){
      event.preventDefault()
      fetch('/login', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        },
        body: JSON.stringify(loginFormData)
      })
      .then(response => {
        if(response.ok){
          response.json().then(player => setLoggedInPlayer(player))
        }
        else {
          alert('invalid login - please try again')
        }
      })
    }

    function updateLoginFormData(event){
      setLoginFormData({
        ...loginFormData, [event.target.name]: event.target.value
      })
    }


  return (
    <div className="app">
      {loggedInPlayer ? <NavBar handleLogOut={handleLogOut}/> : <LoggedOutNavBar/>}

      {/* <Header/> */}
      <Switch>

        <Route exact path="/">
        {loggedInPlayer ? <div class="header-search">
            <SearchCourt setSearchCourtText={setSearchCourtText} searchCourtText={searchCourtText} />
           <CourtList courts={filteredCourts}/>
          </div> : null}
        </Route>

        <Route exact path="/login">
          <Login handleLogin={handleLogin} updateLoginFormData={updateLoginFormData}/>

        </Route>

        <Route exact path="/courts">
          <div class="header-search">
          <SearchCourt setSearchCourtText={setSearchCourtText} searchCourtText={searchCourtText} />
          </div>

          <CourtList courts={filteredCourts} joinGame={joinGame} updateJoinGameFormData={updateJoinGameFormData}/>
        </Route>

        <Route exact path="/find_games">

          <div class="header-search">
          <SearchGame setSearchGameText={setSearchGameText} searchGameText={searchGameText} />
          <br>
          </br>
          <GameList games={filteredGames} joinGame={joinGame} updateJoinGameFormData={updateJoinGameFormData}/>
          </div>
        
        </Route>

        <Route exact path="/create_games">
          <NewGameForm addGame={addGame} courts={courts} updateGameFormData={updateGameFormData}/>

        </Route>

        <Route exact path="/players">
          <SearchPlayers setSearchPlayerText={setSearchPlayerText} searchPlayerText={searchPlayerText} />
          <PlayerList players={filteredPlayers}/>
        </Route>

        <Route path="/profile">
          {loggedInPlayer ? <PlayerProfile loggedInPlayer={loggedInPlayer}/> : null

          }
        </Route>

        <Route path="/update_player">
          <UpdatePlayerForm updatePlayer={updatePlayer} setPlayerIdToUpdate={setPlayerIdToUpdate} updatePatchPlayerFormData={updatePatchPlayerFormData} players={players}/>
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;
