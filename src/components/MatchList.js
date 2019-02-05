import React, { Component } from 'react'

export default class MatchList extends Component {
  render() {
    return (
      <div>
        <div className="search--matches__heading">
        <h2>Did you mean </h2></div>{this.props.matches.map(match => 
        <div className="search--matches__list"><ul><li>{match}</li></ul></div>)}
      </div>
    )
  }
}
