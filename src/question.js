import React from 'react';
import Score from './score'


class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPlayerA: null,
      currentPlayerB: null,
      randomPlayer: null,
      randomPlayerVar: null,
      propsLoaded: false,
      score: 0
    }
    this.getRandomPlayers = this.getRandomPlayers.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    componentDidMount(){
      this.setState({randomPlayerVar: Math.floor(Math.random() * (1 - 0 + 1) + 0)})
    }
    componentDidUpdate(){
      if (this.props.rosterLength !== null && this.state.currentPlayerA === null){
        this.getRandomPlayers()
      }
    }
    getRandomPlayers(){
      var randomA = (Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0));
      var randomB = (Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0));
      if (randomA === randomB){
        randomB = (Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0));
      }
      this.setState({currentPlayerA: this.props.players[randomA], 
                    currentPlayerB: this.props.players[randomB],
                    propsLoaded: true,
                    randomPlayer: ((this.state.randomPlayerVar > 0) ? this.props.players[randomA] : this.props.players[randomB])}//, 
                    //()=>console.log(this.state.currentPlayerA, this.state.currentPlayerB, 'RANDOM PLAYER IS, ', this.state.randomPlayer)
    )}

    handleButtonClick(clickedKey, event){
      var result = 'correct';
      var addendum = ' ';
      if (clickedKey !== this.state.randomPlayer._id){
        result = 'incorrect';
        //addendum = ' '
      }
      alert('YOU HAVE MADE THE ' + result + ' GUESS' + addendum)
      this.setState({randomPlayerVar: (Math.floor(Math.random() * (1 - 0 + 1) + 0)), 
      score: ((clickedKey === this.state.randomPlayer._id) ? (this.state.score + 5) : (this.state.score - 5))},
      ()=>this.getRandomPlayers())
    }
    render(){
      var playerA;
      var playerB;
      var idA;
      var idB;
      var randomPoints;

      if (this.state.propsLoaded){
        playerA = this.state.currentPlayerA.firstName + ' ' + this.state.currentPlayerA.lastName,
        idA = this.state.currentPlayerA._id,
        playerB = this.state.currentPlayerB.firstName + ' ' + this.state.currentPlayerB.lastName
        idB = this.state.currentPlayerB._id
        randomPoints = Number(this.state.randomPlayer.points / (this.state.randomPlayer.min / 36)).toFixed(2);
      }
      return(
        <div>
        <h2>THIS PLAYER SCORED {randomPoints} POINTS PER 36 MINUTES</h2>
        <div><button onClick={()=>this.handleButtonClick(idA)}>{playerA}</button></div>
        <div><button onClick={()=>this.handleButtonClick(idB)}>{playerB}</button></div>
        <h2></h2>
        <Score score={this.state.score}/>
        </div>
        );
  }
}

export default Question;

//display player stats
//build full fantasy roster
//display roster stats