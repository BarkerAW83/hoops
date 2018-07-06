import React from 'react';

class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPlayerA: null,
      currentPlayerB: null
    }
    this.getRandomPlayers = this.getRandomPlayers.bind(this);
    }
    componentDidUpdate(){
      if (this.props.rosterLength !== null && this.state.currentPlayerA === null){
        this.getRandomPlayers()
      }
    }
    getRandomPlayers(){
      this.setState({currentPlayerA: this.props.players[(Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0))], currentPlayerB: this.props.players[(Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0))]}, ()=>{console.log(this.state.currentPlayerA, this.state.currentPlayerB)})
    }
    render(){
      return(
        <div>

        </div>
        );
  }
}

export default Question;

//display player stats
//build full fantasy roster
//display roster stats