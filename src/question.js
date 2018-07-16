import React from 'react';

class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPlayerA: null,
      currentPlayerB: null,
      propsLoaded: false
    }
    this.getRandomPlayers = this.getRandomPlayers.bind(this);
    }
    componentDidUpdate(){
      if (this.props.rosterLength !== null && this.state.currentPlayerA === null){
        this.getRandomPlayers()
      }
    }
    getRandomPlayers(){
      this.setState({currentPlayerA: this.props.players[(Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0))], 
                     currentPlayerB: this.props.players[(Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0))]}, 
                    ()=>{this.setState({nameA: this.state.currentPlayerA.lastName, nameB: this.state.currentPlayerB.lastName, propsLoaded: true}, 
                    ()=>{console.log(this.state.currentPlayerA, this.state.currentPlayerB)}
                    )})
    }
    render(){
      var playerA;
      var playerB;

      if (this.state.propsLoaded){
        playerA = this.state.currentPlayerA.lastName,
        playerB = this.state.currentPlayerB.lastName
      }
      else{
        playerA = null,
        playerB = null
      }
      return(
        <div>
        <div><button>{playerA}</button></div>
        <div><button>{playerB}</button></div>
        </div>
        );
  }
}

export default Question;

//display player stats
//build full fantasy roster
//display roster stats