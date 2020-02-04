import React, {Component} from 'react';
import CosmonautList from './components/CosmonautList'
import SearchBar from './components/SearchBar'
import './App.css';
const BASE_URL = 'http://localhost:3000/cosmonauts'

class App extends Component {

  state = {
    cosmonauts: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(cosmonauts => this.setState({
      cosmonauts
    }))
  }

  updateSearchTerm = term =>{
    this.setState({
      searchTerm: term
    })
    this.filterCosmonauts(term)
  }
  
  filterCosmonauts = () => {
    const {cosmonauts, searchTerm} = this.state
   return cosmonauts.filter(cosmonaut => {
      return cosmonaut.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || cosmonaut.last_name.toLowerCase().includes(searchTerm.toLowerCase()) 
    })
  }

  render(){
  return (
    <div className="App">
      <header>
       <h1>Crazy Cosmonauts</h1>
       <SearchBar searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/> 
      </header>
      <CosmonautList cosmonauts={this.filterCosmonauts()}/>      
    </div>
  );
  }
}

export default App;
