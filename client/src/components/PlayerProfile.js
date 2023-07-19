import React from "react";
import Game from "./Game";
import Player from './Player'
import {useState, useEffect} from 'react'

function PlayerProfile({loggedInPlayer}) {

  console.log()

  return (
    <div class="profile">
        <h2>
        </h2>
        <ul>

          <div class="card mb-3" style={{marginRight: + 'em'}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={loggedInPlayer.player_image} class="img-fluid rounded-start" alt={loggedInPlayer.username} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">{loggedInPlayer.username}
                </h2>
                <p class="card-text"> 🎵… Basketball is my favorite sport
                  I like the way they dribble up and down the court
                  Just like I'm the King on the microphone so is Dr. J and Moses Malone
                  I like Slam dunks take me to the hoop
                  My favorite play is the alley oop
                  I like the pick-and-roll, I like the give-and-go
                  Cause it's Basketball, uh, Mister Kurtis Blow 🎵
                </p>
                <p class="card-text"><small class="text-body-secondary">            {loggedInPlayer.age} | {loggedInPlayer.gender} | {loggedInPlayer.height} |   {loggedInPlayer.weight} | {loggedInPlayer.position}</small></p>
            </div>
            </div>
            </div>

          </div>
          </ul>
            {loggedInPlayer.games.map(game => {
              return (
              <div key={game.id}>
                <h4>Upcoming Games</h4>
                <table class="table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Game #</th>
                      <th scope="col">Date/Time</th>
                      <th scope="col">Location</th>
                      <th scope="col">Skill Level</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Game Type</th>
                      <th scope="col">Spots Remaining</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    <tr>
                      <th scope="row">1</th>
                      <td>{game.date_time}</td>
                      <td>{game.court.title}</td>
                      <td>{game.skill_level}</td>
                      <td>{game.gender}</td>
                      <td>{game.game_type}</td>
                      <td>{game.spots_remaining}</td>
                    </tr>
                  </tbody>
                </table>
               
              </div>
              )
            })}
    </div>
)
}
  
export default PlayerProfile;

{/* <table class="table table-sm">
<thead>
  <tr>
    <th className="row-name">
    
    </th>
    <th>
    Court Name Placeholder
    </th>
    <th>
    {game.skill_level}
    </th>
    <th>
    
    </th>
    <th>
    
    </th>
    <th>
    
    </th>
  </tr>
</thead>

</table> */}
