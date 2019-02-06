import React, {Component} from 'react';
import {connect} from 'react-redux';
import {numQuery, clearQuery} from '../actions/search';
import SearchResults from './SearchResults';
import DateMenu from './DateMenu'
// import '../styling/sass/main'



class SearchBar extends Component {
  render() {
    const { numQuery } = this.props;
    const search = this.props.search
    console.log(search)
    const flights = this.props.flights
    return (
      <div>
        <div className="input">
          <input type="text"
                name="flightnum"
                className="input input--num"
                // placeholder = "Flight No."
                value={search.value}
                onChange={(e) => numQuery(e.target.value.toUpperCase(), flights)}
          />
          <DateMenu/>
        </div>
        <div className="search">
          <br/>
          <SearchResults search={search} flights={flights}/>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  search: state.search,
  flights: state.flights
})

export default connect(mapStateToProps, { numQuery, clearQuery })(SearchBar)
