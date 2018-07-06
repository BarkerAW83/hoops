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
      rosterLength: null//,
      // currentPlayerA: null,
      // currentPlayerB: null
      }
      this.getPlayers = this.getPlayers.bind(this);
      //this.getRandomPlayers = this.getRandomPlayers.bind(this);
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
      .catch(function (error) {
        console.log(error);
      });
    }
    // getRandomPlayers(){
    //   this.setState({currentPlayerA: this.state.players[(Math.floor(Math.random() * (this.state.rosterLength - 0 + 1) + 0))], currentPlayerB: this.state.players[(Math.floor(Math.random() * (this.state.rosterLength - 0 + 1) + 0))]}, ()=>{console.log(this.state.currentPlayerA, this.state.currentPlayerB)})
    // }
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