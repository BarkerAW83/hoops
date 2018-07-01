import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search'
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      players: []
    }
    }
    componentDidMount(){
      this.getPlayers();
    }
    getPlayers(){
      axios.get('/players')
      .then((response)=> {
        this.setState({players: response.data}//, ()=>{console.log('updated players', this.state.players)})
      , ()=>{console.log('GET PLAYERS FROM src/index', this.state.players)})
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render(){
      return(
      <div>
        <Search players={this.state.players}/>
      </div>
          );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));