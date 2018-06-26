import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }
    handleSearchChange(event){
      this.setState({searchValue: event.target.value})
    }
    handleSearchSubmit(event){
      alert('A name was submitted: ' + this.state.searchValue)
      event.preventDefault();

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
        </div>
        );
  }
}

export default Search;