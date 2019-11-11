import React from 'react';
import axios from 'axios';

class DataFetch extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(result => {
        console.log(result);
        this.setState({ players: result.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
          <ul>
          {this.state.players.map(player => {
              return <li key={player.id}>{player.name}</li>
          })}
          </ul>
        <h1>Data</h1>
      </div>
    );
  }
}

export default DataFetch;
