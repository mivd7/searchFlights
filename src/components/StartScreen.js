import React, { Component } from 'react'
import {connect} from 'react-redux'
import SearchContainer from './SearchContainer'
import {loadFlights} from '../actions/flights'
import queryString from 'query-string'

class StartScreen extends Component {
  componentDidMount() {
    this.props.loadFlights()
  }

  queryToURL(value) {
    this.props.location.search = 'q?=' + value[0]
  }

  render() {
    const values = queryString.parse(this.props.search.value)
    this.queryToURL(Object.keys(values))
    return (
      <div>
        <div className="header__text-box">
        <h1>Search for your flight...</h1>
        </div>
        <br/>
        <SearchContainer flights={this.props.flights}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flights: state.flights,
  search: state.search
})

export default connect(mapStateToProps, {loadFlights})(StartScreen)

