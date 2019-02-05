import React, { Component } from 'react'
import {loadFlight} from '../actions/flights'
import {connect} from 'react-redux'

class FlightInfo extends Component {
  componentDidMount() {
    this.props.loadFlight(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        {this.props.flight && <div className="flight">{this.props.flight.airline}</div>}
        {!this.props.flight && <div>loading flight ...</div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flight: state.flight
})

export default connect(mapStateToProps, {loadFlight})(FlightInfo)

