import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MatchList extends Component {
  render() {
    return (
      <div>
        <div className="search--matches__heading">
        <h2>Did you mean: </h2></div>{this.props.matches.map(match => 
        <div>
          <ul key={match.id}>
            <Link to={`flights/${match.id}`}>
              <li key={match.id}>{match.flight}: {match.start} - {match.destination}</li>
            </Link>
          </ul>
        </div>)}
      </div>
    )
  }
}
