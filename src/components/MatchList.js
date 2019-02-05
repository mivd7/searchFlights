import React, { Component } from 'react'

export default class MatchList extends Component {
  render() {
    return (
      <div>
        <h2>Did you mean </h2>{this.props.matches.map(match => 
        <ul><li>{match}</li></ul>)}
      </div>
    )
  }
}
