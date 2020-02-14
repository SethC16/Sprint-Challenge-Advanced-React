import React from 'react';
import axios from 'axios';
import './App.css';
import Players from './components/Players';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then( res => {
      console.log(res)
      this.setState({
        players: res.data
      })
    })
    .catch( err => {
      console.log('This is an error', err)
    })
  }

  render(){
  return (
    <div className="App">
      <header >
        <Navbar />
      </header>
      <div className='player-info'>
        {this.state.players.map( stats => {
          return (
            <Players
            key={stats.id}
            name={stats.name}
            country={stats.country}
            searches={stats.searches}
            />
          )
        })}
      </div>
    </div>
  );} 
}

export default App;
