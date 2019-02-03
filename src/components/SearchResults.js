import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {loadFlights} from '../actions/flights'
import { connect } from 'react-redux';

class SearchResults extends React.Component {

  render() {
    const result = this.props.search.results
    console.log(result)
    if (!this.props) return (<div>searching</div>)
    return (
      <div>
        {result && <div>
        <Link to={`/flights/${result.id}`}>{result.destination}</Link></div>}
        {!result && <div>searching</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, {loadFlights})(SearchResults);