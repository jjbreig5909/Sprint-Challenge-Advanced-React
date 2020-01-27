import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Components/Navbar';

class App extends React.Component {

  state ={
    players: []
  };


  
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(result => {
        console.log(result);
        this.setState({...this.state, players: result.data});
      })
      .catch(err=> console.log("error on get:", err));
  }


  render() {
    return (
    <div className="App">
      <Navbar />
      <div className="player-data">
        {this.state.players.map(player => {
          return (
            <div className="player-card" key={player.id}>
              <p>{player.name}</p>
              <p>{player.country}</p>
              <p>{player.searches}</p>
            </div>
          );
        })}
      </div>
    </div>
    );
  }
} 

export default App;
