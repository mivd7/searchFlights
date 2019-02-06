import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import MatchList from './MatchList';
import {clearQuery} from '../actions/search'

class SearchResults extends Component {
  render() {
    const search = this.props.search
    const result = this.props.search.result
    const matches = this.props.search.matches
    const flights = this.props.flights

    if (!matches || flights === null) return (<div></div>)
    if (matches.length === 0) return (<div>Flight not found!</div>)

    const displayListOfResults = !result && matches && matches.length < flights.length

    return (
      <div>
        {result && 
        <div className="search search--result">
          <Link to={`/flights/${result.id}`}>
            <h2>Flight {result.flight}</h2></Link>
            From {result.start} to {result.destination}
            <br/>
            <div className="search__time">Time: {result.departure}</div>
            <div className="search__date">Date: {result.date.split('-').reverse().join('-')}</div> 
            <h3>Airline: {result.airline}</h3>
            <button className="btn btn--result" 
                    onClick={() => this.props.clearQuery(search.value)}/>
          </div>
                                        }              
        {displayListOfResults && <div className="search search--matches search--matches__list"><MatchList matches={matches}/>
                                 <button className="btn" 
                                              onClick={() => this.props.clearQuery(search.value)}/></div>}
      </div>
    );
  }
}
// {}
const mapStateToProps = (state) => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, {clearQuery})(SearchResults);