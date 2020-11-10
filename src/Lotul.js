import React, { Component } from 'react';


import { LotulCardList } from './components/card-list/lotul-list.component';
import  { SearchBox } from './components/search-box/search-box.component';



import './App.css';

class Lotul extends Component {
  constructor() {
    super();

    this.state = {
      players:[],
      searchField:'',
      echipe:[]
    };
  }

  componentDidMount() {
    fetch(`https://liga1-db.herokuapp.com/jucatori?teamId=${this.props.match.params.teamId}`)
    .then(response => response.json())
    .then(jucatori => this.setState({ players: jucatori }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { players, searchField } = this.state;
    const filteredPlayers = players.filter(player =>
      player.fullName.toLowerCase().includes(searchField.toLowerCase())
      );

      return(
        <div className="App">
          <h1>Lotul Echipei</h1>
          
          <SearchBox
              placeholder='search players'
              handleChange={this.handleChange}
             />
          <LotulCardList players={filteredPlayers} /> 
        </div>
      );
  }
}

export default Lotul;