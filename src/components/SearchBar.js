import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findFlightByNum, findFlightByDate} from '../actions/search';
import SearchResults from './SearchResults';
import DateMenu from './DateMenu'

class SearchBar extends Component {
  render() {
    console.log(this.props)
    const {findFlightByNum} = this.props;
    const search = this.props.search
    console.log(search)
    return (
      <div>
        <input type="text"
               name="flightnum"
               className="form-control"
               placeholder = "Flight No."
               onChange={(e) => findFlightByNum(e.target.value)}
         /><button onSubmit="submit">Search</button>
         <br/>
          <DateMenu />
          <SearchResults value={search.value} results={search.results} />
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, {findFlightByNum})(SearchBar)
