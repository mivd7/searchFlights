import React, { Component } from 'react'
import {connect} from 'react-redux'
import SearchContainer from './SearchContainer'
import LoadingScreen from './LoadingScreen'
import {loadFlights} from '../actions/flights'

class StartScreen extends Component {
  componentDidMount() {
    this.props.loadFlights()
  }

  render() {
    const handlers = this.props.appHandlers
    console.log(handlers)
    return (
      <div>
      {this.props.flights && handlers.isLoading === false && handlers.isError === false
        && <div>
              <div className="header__text-box">
                <h1>Search for your flight...</h1>
              </div>
                <br/>
                <SearchContainer flights={this.props.flights}/>
            </div>}
        {!handlers || handlers.isLoading === true && 
          <div><LoadingScreen /></div>}</div>
    )
  }
}

const mapStateToProps = state => ({
  flights: state.flights,
  search: state.search,
  appHandlers: state.appHandlers
})

export default connect(mapStateToProps, {loadFlights})(StartScreen)

