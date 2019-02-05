import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findFlightByNum, findFlightByDate} from '../actions/search';
import SearchResults from './SearchResults';
import DateMenu from './DateMenu'

class SearchBar extends Component {
  render() {
    const {findFlightByNum} = this.props;
    const search = this.props.search
    const flights = this.props.flights
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
          <SearchResults search={search} flights={flights}/>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, {findFlightByNum})(SearchBar)
