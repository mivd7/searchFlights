import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import MatchList from './MatchList';

class SearchResults extends Component {
  render() {
    console.log(this.props)
    const result = this.props.search.results
    const matches = this.props.search.match
    const flights = this.props.flights

    if (!matches || flights === null) return (<div></div>)
    if (matches.length === 0) return (<div>Flight not found!</div>)
    return (
      <div>
        {result && 
        <div className="search search--result"><Link to={`/flights/${result.id}`}><h2>Flight {result.flight}</h2></Link>
                                          From {result.start} to {result.destination}
                                          <br/>
                                          Departure time: {result.departure} on {result.date.split('-').reverse().join('-')}
                                          <h3>Airline: {result.airline}</h3></div>}              
        {!result && matches && matches.length < flights.length && 
                                          <div className="search search--matches search--matches__list"><MatchList matches={matches}/></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, null)(SearchResults);