import React from 'react';

class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPlayerA : '',
      currentPlayerB : ''
    }
    this.getRandomPlayers = this.getRandomPlayers.bind(this);
    // this.handleSearchChange = this.handleSearchChange.bind(this);
    // this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    // this.playerSearch = this.playerSearch.bind(this);
    }
    componentDidMount(){
      this.getRandomPlayers();
      console.log('question props are: ', this.props)
    }
    getRandomPlayers(){
      this.setState({currentPlayerA: (Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0)), currentPlayerB: (Math.floor(Math.random() * (this.props.rosterLength - 0 + 1) + 0))}, ()=>{console.log(this.state.currentPlayerA, this.state.currentPlayerB)})
    }
    // handleSearchChange(event){
    //   this.setState({searchValue: event.target.value})
    // }
    // handleSearchSubmit(event){
    //   this.playerSearch()
    //   event.preventDefault();
    // }

    render(){
      return(
        <div>
          {/* <form onSubmit={this.handleSearchSubmit}>
        <label>
          Search Player:
          <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <h1>Points: {this.state.selectedPlayer.points}</h1> */}
        </div>
        );
  }
}

export default Question;

//display player stats
//build full fantasy roster
//display roster stats