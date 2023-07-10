import '../App.css';
import {useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom"

import NavBar from './NavBar'
import Header from './Header'
import PlayerList from './PlayerList'
import NewPlayerForm from './NewPlayerForm'
import UpdatePlayerForm from './UpdatePlayerForm'

function App() {

  const [players, setPlayers] = useState([])
  const [postFormData, setPostFormData] = useState({})
  const [idToUpdate, setIdToUpdate] = useState(0)
  const [patchFormData, setPatchFormData] = useState({})

  useEffect(() => {
    fetch('/players')
    .then(response => response.json())
    .then(playerData => setPlayers(playerData))
  }, [])

  useEffect(() => {
    if(players.length > 0 && players[0].id){
      setIdToUpdate(players[0].id)
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
      body: JSON.stringify(postFormData)
    })
    .then(response => response.json())
    .then(newPlayer => setPlayers(players => [...players, newPlayer]))
  }

  function updatePlayer(event){
    event.preventDefault()
    fetch(`/players/${idToUpdate}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(patchFormData)
    })
    .then(response => response.json())
    .then(updatedPlayer => {
      setPlayers(players => {
        return players.map(player => {
          if(player.id === updatedPlayer.id){
            return updatedPlayer
          }
          else{
            return player
          }
        })
      })
    })
  }

  function deletePlayer(id){
    fetch(`/players/${id}`, {
      method: "DELETE"
    })
    .then(() => setPlayers(players => {
      return players.filter(player => {
        return player.id !== id
      })
    }))
  }

  function updatePostFormData(event){
    setPostFormData({...postFormData, [event.target.name]: event.target.value})
  }

  function updatePatchFormData(event){
    setPatchFormData({...patchFormData, [event.target.name]: event.target.value})
  }

  return (
    <div className="app">
      <NavBar/>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Welcome! Here is a list of Hangtime Ballers in your local area... </h1>
          <PlayerList players={players} deletePlayer={deletePlayer}/>
        </Route>
        <Route path="/add_player">
          <NewPlayerForm addPlayer={addPlayer} updatePostFormData={updatePostFormData}/>
        </Route>
        <Route path="/update_player">
          <UpdatePlayerForm updatePlayer={updatePlayer} setIdToUpdate={setIdToUpdate} updatePatchFormData={updatePatchFormData} players={players}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
