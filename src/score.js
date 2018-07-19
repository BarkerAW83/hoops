import React from 'react';

class Score extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      stuff: null
    }
  }
  render(){
    //console.log('SCORE PROPS ARE', this.props)
    return(
      <div>SCORE: {this.props.score}</div>
      )
    
  }
}

export default Score;