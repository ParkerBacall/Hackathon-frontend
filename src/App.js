import React, {Component} from 'react';
import CosmonautList from './components/CosmonautList'
import './App.css';
const BASE_URL = 'http://localhost:3000/cosmonauts'

class App extends Component {

  state = {
    cosmonauts: []
  }

  componentDidMount() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(cosmonauts => this.setState({
      cosmonauts
    }))
  }
  

  render(){
  return (
    <div className="App">
      <h1>No Mercy</h1>
      <CosmonautList cosmonauts={this.state.cosmonauts}/>      

    </div>
  );
  }
}

export default App;
