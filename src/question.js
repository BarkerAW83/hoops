import React from 'react';

class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPlayerA: null,
      currentPlayerB: null,
      randomPlayer: null,
      randomPlayerVar: null,
      propsLoaded: false
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
      var number = (Math.floor(Math.random() * (1 - 0 + 1) + 0));
      var randomA = (Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0));
      var randomB = (Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0));
      this.setState({currentPlayerA: this.props.players[randomA], 
                    currentPlayerB: this.props.players[randomB],
                    propsLoaded: true,
                    randomPlayer: ((this.state.randomPlayerVar > 0) ? this.props.players[randomA] : this.props.players[randomB])})//, 
                    //()=>console.log(this.state.currentPlayerA, this.state.currentPlayerB, 'RANDOM PLAYER IS, ', this.state.randomPlayer))
    }
    handleButtonClick(clickedKey, event){
      //console.log(clickedKey, ': IS THE CLICKED KEY ,', this.state.randomPlayer._id, ': IS THE RANDOM KEY' )
      var result = 'incorrect';
      if (clickedKey === this.state.randomPlayer._id){
        result = 'correct'
      }
      console.log('YOU HAVE MADE THE ' + result + ' GUESS')
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
        </div>
        );
  }
}

export default Question;

//display player stats
//build full fantasy roster
//display roster stats