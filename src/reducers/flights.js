import {FLIGHTS_FETCHED} from '../actions/flights'

export default (state = null, action = {}) => {
  switch (action.type) {
    case FLIGHTS_FETCHED:
      return action.flights
    default:
      return state
    }
  }