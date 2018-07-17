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
    this.searchBreak = this.searchBreak.bind(this);
    }
    handleSearchChange(event){
      this.setState({searchValue: event.target.value})
    }
    handleSearchSubmit(event){
      this.searchBreak(this.state.searchValue);
      event.preventDefault();
    }
    searchBreak(searchValue){
      var first; 
      var last; 
      if (searchValue.split(' ').length > 2){ 
        alert('Player not found! Maybe try a few characters of the player\'s last name');
        return null;
      }
      else if (searchValue.split(' ').length === 1){
        first = ''
        last = searchValue.split(' ')
      }
      else{
        first = searchValue.split(' ')[0].toLowerCase();
        last = searchValue.split(' ')[1].toLowerCase();
      }
      this.playerSearch(first, last)
    }
    playerSearch(first, last){
      this.setState({selectedPlayer: null}, ()=>{
        var rosterChecked = false;
        var match = false;
        var matchIndex = null
        this.props.players.forEach((player, idx)=>{
          if (player.lastName.toLowerCase().includes(last) && player.firstName.toLowerCase().includes(first)){
            match = true;
            matchIndex = idx;
          }
          if (!match && idx === this.props.players.length - 1){
            rosterChecked = true;
          }
          if (!match && rosterChecked){
            alert('Player not found! Maybe try a few characters of the player\'s last name');
          }
          if (matchIndex){
            this.setState({selectedPlayer: this.props.players[matchIndex]})
          }
        })
      })
    }
    render(){
      var points;
      if (this.state.selectedPlayer){
        points = this.state.selectedPlayer.points;
      }
      else{
        points = null;
      }
      return(
        <div>
          <form onSubmit={this.handleSearchSubmit}>
        <label>
          Search Player:
          <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <h1>Points: {points}</h1>
        </div>
        );
  }
}

export default Search;



// import React from 'react';

// class Search extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       searchValue: '',
//       selectedPlayer: ''
//     }
//     this.handleSearchChange = this.handleSearchChange.bind(this);
//     this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
//     this.playerSearch = this.playerSearch.bind(this);
//     this.searchBreak = this.searchBreak.bind(this);
//     }
//     handleSearchChange(event){
//       this.setState({searchValue: event.target.value})
//     }
//     handleSearchSubmit(event){
//       this.playerSearch()
//       event.preventDefault();
//     }
//     searchBreak(){}
//     playerSearch(){
//       var first; 
//       var last; 
//       if (this.state.searchValue.split(' ').length > 2){ 
//         alert('Player not found! Maybe try a few characters of the player\'s last name');
//         return null;
//       }
//       else if (this.state.searchValue.split(' ').length === 1){
//         first = ''
//         last = this.state.searchValue.split(' ')
//       }
//       else{
//         first = this.state.searchValue.split(' ')[0].toLowerCase();
//         last = this.state.searchValue.split(' ')[1].toLowerCase();
//       }
//       this.setState({selectedPlayer: null}, ()=>{
//         var check = false;
//         this.props.players.forEach((player, idx)=>{
//           if (player.lastName.toLowerCase().includes(last) && player.firstName.toLowerCase().includes(first)){
//             this.setState({selectedPlayer: this.props.players[idx]}, ()=>{console.log('SELECTED PLAYER FROM src/search', this.state.selectedPlayer)})
//           }
//           if (!this.state.selectedPlayer && idx === this.props.players.length - 1){
//             check = true;
//           }
//           if (this.state.selectedPlayer && check === true){
//             alert('Player not found! Maybe try a few characters of the player\'s last name');
//           }
//       })
      
//       // this.props.players.forEach((player, idx)=>{
//       //   if (player.lastName.toLowerCase().includes(last) && player.firstName.toLowerCase().includes(first)){
//       //     this.setState({selectedPlayer: this.props.players[idx]}, ()=>{console.log('SELECTED PLAYER FROM src/search', this.state.selectedPlayer)})
//       //   }


//         // else if (!player.lastName.toLowerCase().includes(last) && idx >= this.props.players.length){
//         //   this.setState({selectedPlayer: null}, ()=>{alert('Player not found! Maybe try a few characters of the player\'s last name');
//         // })
//         // }
//       })
//     }
//     render(){
//       var points;
//       if (this.state.selectedPlayer){
//         points = this.state.selectedPlayer.points;
//       }
//       else{
//         points = null;
//       }
//       return(
//         <div>
//           <form onSubmit={this.handleSearchSubmit}>
//         <label>
//           Search Player:
//           <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange} />
//         </label>
//         <input type="submit" value="Submit" />
//         </form>
//         {/* <h1>Points: {this.state.selectedPlayer.points}</h1> */}
//         <h1>Points: {points}</h1>
//         </div>
//         );
//   }
// }

// export default Search;