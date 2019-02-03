import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {loadFlights} from '../actions/flights'
import { connect } from 'react-redux';

class SearchResults extends React.Component {

  render() {
    const result = this.props.search.results
    const matches = this.props.search.match
    console.log(result)
    console.log(this.props)
    if (!matches) return (<div></div>)
    if (matches.length === 0) return (<div>Flight number not found!</div>)
    return (
      <div>
        {result && <div>
        <Link to={`/flights/${result.id}`}><h2>Flight number: {result.flight}</h2></Link>
                                          From {result.start} to {result.destination}
                                          <br/>
                                          Departure time: {result.departure} on {result.date} from gate G20
                                          <h3>Airline: {result.airline}</h3></div>}
        {!result && matches && <div><h2>Did you mean:</h2>{matches.map(match => <ul><li>{match}</li></ul>)}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, {loadFlights})(SearchResults);