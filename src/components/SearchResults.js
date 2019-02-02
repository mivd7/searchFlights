import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {findFlight} from '../lib/find'

class SearchResults extends React.Component {

  render() {
    return (
      <div>{this.props.match.length === 0 && <div>Here be search results</div>}
      {this.props.match.length > 0 && this.props.match.map(
        match => <ul><li><Link to={`/flights/${match}`}>{match}</Link></li></ul>)}
      </div>
    );
  }
}

export default connect(null)(SearchResults);