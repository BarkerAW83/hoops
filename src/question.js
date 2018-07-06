import React from 'react';

class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPlayerA: null,
      currentPlayerB: null,
      nameA: null,
      nameB: null
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
                    ()=>{this.setState({nameA: this.state.currentPlayerA.firstName, nameB: this.state.currentPlayerB.firstName}, 
                    ()=>{console.log(this.state.currentPlayerA, this.state.currentPlayerB)})})
    }

    render(){
      return(
        <div>
        <button>{this.state.nameA}</button>
        <button>{this.state.nameB}</button>
        </div>
        );
  }
}

export default Question;

//display player stats
//build full fantasy roster
//display roster stats