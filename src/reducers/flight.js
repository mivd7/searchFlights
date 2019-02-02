import {FLIGHT_FETCHED} from '../actions/flights'

export default (state = null, action = {}) => {
  switch (action.type) {
    case FLIGHT_FETCHED:
      return action.flight
    default:
      return state
    }
  }