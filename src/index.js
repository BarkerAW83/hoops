import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search'
import Question from './question'
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      players: [],
      rosterLength: null
      }
      this.getPlayers = this.getPlayers.bind(this);
    }
    componentDidMount(){
      this.getPlayers();
    }
    getPlayers(){
      axios.get('/players')
        .then((response)=> {
          this.setState({players: response.data, rosterLength: response.data.length}//, ()=>{this.getRandomPlayers()}
          )
        })
        .catch((error) => {
          console.log(error);
        });
    }
    render(){
      return(
      <div>
        <Search players={this.state.players}/>
        <Question players={this.state.players} rosterLength={this.state.rosterLength}/>
      </div>
          );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));

//npm start = starts server/index.js with nodemon
//npm run dev = starts webpack watching the files in development mode (per package.json)
//mongod = runs mongodb
//mongo --host 127.0.0.1:27017 = connects mongo to the localhost