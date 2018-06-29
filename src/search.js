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
      var playerArr = [];
      if (this.state.searchValue.split(' ').length > 2){ 
        alert('Player not found! Maybe try a few characters of the player\'s last name');
        return null;
      }
      else if (this.state.searchValue.split(' ').length === 1){
        var first = ''
        var last = this.state.searchValue.split(' ')
      }
      else{
        var first = this.state.searchValue.split(' ')[0]
        var last = this.state.searchValue.split(' ')[1]
      }
      this.props.players.forEach((player, idx)=>{
          if (player.lastName.includes(last) && player.firstName.includes(first)){
          playerArr.push(idx);
          this.setState({selectedPlayer: this.props.players[idx]}, ()=>{console.log(this.state.selectedPlayer, playerArr)})
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