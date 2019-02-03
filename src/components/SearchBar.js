import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findFlightByNum} from '../actions/search';
import {Link} from 'react-router-dom'
import SearchResults from './SearchResults';

class SearchBar extends Component {
  render() {
    console.log(this.props)
    const {findFlightByNum} = this.props;
    const search = this.props.search
    console.log(search)
    return (
      <div>
        <input
          className="form-control"
          placeholder = "Flight No."
          onChange={(e) => findFlightByNum(e.target.value)}
         /><button onSubmit="submit">Search</button>
        <SearchResults results={search.results} />
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, {findFlightByNum})(SearchBar)
