import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      selectedPlayer: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.playerSearch = this.playerSearch.bind(this);
    }
    handleSearchChange(event){
      this.setState({searchValue: event.target.value})
    }
    handleSearchSubmit(event){
      this.playerSearch()
      event.preventDefault();
    }
    playerSearch(){
      // var playerArr = [];
      var first; 
      var last; 
      if (this.state.searchValue.split(' ').length > 2){ 
        alert('Player not found! Maybe try a few characters of the player\'s last name');
        return null;
      }
      else if (this.state.searchValue.split(' ').length === 1){
        first = ''
        last = this.state.searchValue.split(' ')
      }
      else{
        first = this.state.searchValue.split(' ')[0].toLowerCase();
        last = this.state.searchValue.split(' ')[1].toLowerCase();
      }
      this.props.players.forEach((player, idx)=>{
          if (player.lastName.toLowerCase().includes(last) && player.firstName.toLowerCase().includes(first)){
            this.setState({selectedPlayer: this.props.players[idx]}, ()=>{'SELECTED PLAYERS FROM src/search', console.log(this.state.selectedPlayer)})
          }
      })
    }
    render(){
      return(
        <div>
          <form onSubmit={this.handleSearchSubmit}>
        <label>
          Search Player:
          <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <h1>Points: {this.state.selectedPlayer.points}</h1>
        </div>
        );
  }
}

export default Search;

//display player stats
//build full fantasy roster
//display roster stats