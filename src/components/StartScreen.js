import React, { Component } from 'react'
import {connect} from 'react-redux'
import SearchContainer from './SearchContainer'
import {loadFlights} from '../actions/flights'

class StartScreen extends Component {
  componentDidMount() {
    this.props.loadFlights()
  }

  render() {
    console.log(this.props)
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

