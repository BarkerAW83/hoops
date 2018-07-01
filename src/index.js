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
      rosterLength: 475
    }
    }
    componentDidMount(){
      this.getPlayers();
    }
    getPlayers(){
      axios.get('/players')
      .then((response)=> {
        this.setState({players: response.data, rosterLength: response.data.length}//, ()=>{console.log('updated players', this.state.players, 'rosterLength: ', this.state.rosterLength)})
        )
      })
      .catch(function (error) {
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