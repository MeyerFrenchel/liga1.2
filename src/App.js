import React, { Component } from 'react';


import { CardList } from './components/card-list/card-list.component';

import  { SearchBox } from './components/search-box/search-box.component';



import './App.css';
// import Lot from './Lot';
import Lotul from './Lotul';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ClasamentList } from './components/card-list/clasament-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      echipe: [],
      searchField: ''
      
      };

    
  }

  componentDidMount() {
    fetch('https://liga1-db.herokuapp.com/teams')
    .then(response => response.json())
    .then(teams => this.setState({ echipe: teams }));

   
  }
  

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { echipe, searchField } = this.state;
    const sortedEchipe = echipe.sort((a, b) => a.loc - b.loc);
    const filteredEchipe = echipe.filter(echipa =>
      echipa.name.toLowerCase().includes(searchField.toLowerCase())
      );
      return (
      <Router>
        <div className="App">
         <Switch>
          <Route path="/" exact>
            <h1> Liga 1 App</h1>
             <SearchBox
              placeholder='search teams'
              handleChange={this.handleChange}
             />
          
             <CardList echipe={filteredEchipe} />
             <h1>Clasament Liga 1</h1> 
             <ClasamentList echipe={sortedEchipe} /> 
          </Route>
           
          <Route path="/lotul/:teamId" component={Lotul} />
          
         
         </Switch>
           
        </div>
        </Router>

        

      );
    
  }
}


export default App;


