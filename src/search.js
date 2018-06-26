import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      selectedPlayer: 'TESTPLAYER'
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.playerSearch = this.playerSearch.bind(this);
    }
    handleSearchChange(event){
      this.setState({searchValue: event.target.value})
    }
    handleSearchSubmit(event){
      //alert('A name was submitted: ' + this.state.searchValue)
      this.playerSearch()
      event.preventDefault();
    }
    playerSearch(){
      //console.log(this.props)
      this.props.players.forEach((player)=>{
        if (player.lastName === this.state.searchValue){
          //console.log('THE PLAYER IS ', player.firstName)
          this.setState({selectedPlayer: player.firstName})
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
        <h1>{this.state.selectedPlayer}</h1>
        </div>
        );
  }
}

export default Search;