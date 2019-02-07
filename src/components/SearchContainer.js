import React, {Component} from 'react';
import {connect} from 'react-redux';
import {numQuery} from '../actions/search';
import SearchResults from './SearchResults';
import DateMenu from './DateMenu'
import queryString from 'query-string'

class SearchContainer extends Component {
  componentDidUpdate() {
   //
  }
  render() {
    const { numQuery } = this.props;
    const search = this.props.search
    const flights = this.props.flights
    return (
      <div>
        <div className="input">
          <input type="text"
                name="flightnum"
                className="input input--num"
                placeholder="Flight No."
                autoComplete="off"
                onChange={(e) => numQuery(e.target.value.toUpperCase(), flights)} />          <DateMenu/>  
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

export default connect(mapStateToProps, { numQuery })(SearchContainer)
