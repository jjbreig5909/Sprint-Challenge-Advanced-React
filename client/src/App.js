import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Components/Navbar';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

class App extends React.Component {

  state ={
    players: []
  };


  
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(result => {
        this.setState({...this.state, players: result.data});
      })
      .catch(err=> console.log("error on get:", err));
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="chart">
          <VictoryChart>
            <VictoryAxis
              tickValues={[1, 25, 75, 100]}
              tickFormat={["", "", "", ""]}
            />
            <VictoryBar data={this.state.players} x="name" y="searches" />
          </VictoryChart>
        </div>
        <div className="player-data" data-testid="player-data">
          {this.state.players.map(player => {
            return (
              <div className="player-card" key={player.id}>
                <p>Player: {player.name}</p>
                <p>Country: {player.country}</p>
                <p>Number of Searches: {player.searches}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
} 

export default App;
