import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MatchList extends Component {
  render() {
    return (
      <div>
        <div className="search--matches__heading">
        <h2>Did you mean </h2></div>{this.props.matches.map(match => 
        <div><ul><Link to={`flights/${match.id}`}><li>{match.flight}: {match.start} - {match.destination}
                                                     </li></Link></ul></div>)}
      </div>
    )
  }
}
