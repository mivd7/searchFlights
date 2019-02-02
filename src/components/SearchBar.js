import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchFlight} from '../actions/search';
import SearchResults from './SearchResults';

class SearchBar extends Component {
  render() {
    const {searchFlight} = this.props;
    const match = this.props.search.match
    return (
      <div>
        <input
          className="form-control"
          placeholder = "Flight No."
          onChange={(e) => searchFlight(e.target.value)}
         />
        <SearchResults match={match} flights={this.props.flights} />
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, {searchFlight})(SearchBar)