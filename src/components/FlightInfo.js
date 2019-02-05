import React, { Component } from 'react'
import {loadFlight} from '../actions/flights'
import {connect} from 'react-redux'

class FlightInfo extends Component {
  componentDidMount() {
    this.props.loadFlight(this.props.match.params.id)
  }
  render() {
    const flight = this.props.flight
    return (
      <div>
        {flight && <div className="flight"><h2>Your flight to {flight.destination} with {this.props.flight.airline} will depart from {flight.start} at {flight.departure}</h2>
          <br/><p>We've got this! Have a nice luggage-free trip and rendez vous with your belongings in {flight.destination}!</p></div>}
        {!flight && <div>loading flight ...</div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flight: state.flight
})

export default connect(mapStateToProps, {loadFlight})(FlightInfo)

