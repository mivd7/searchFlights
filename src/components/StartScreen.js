import React, { Component } from 'react'
import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import {loadFlights} from '../actions/flights'

class StartScreen extends Component {
  componentDidMount() {
    this.props.loadFlights()
  }

  render() {
    return (
      <div>
        <h1>Welcome! Search for your flight</h1>
        <br/>
        <SearchBar flights={this.props.flights}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flights: state.flights
})

export default connect(mapStateToProps, {loadFlights})(StartScreen)

