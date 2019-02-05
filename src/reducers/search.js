import {NUM_QUERY, DATE_QUERY, MATCHES_LOADED} from '../actions/search';
import {getFlightByNum, getFlightByDate} from '../lib/finders'
import {formatDate} from '../lib/dateFormats'

export default (state = [], action = {}) => {
  switch(action.type) {
    case NUM_QUERY: {
      const value = action.payload.value
      const flights = action.payload.flights
      const match = flights.map(flights => flights.flight)
                          .filter((val) => val.includes(value))
      const results = getFlightByNum(flights, match)
      return {...state, value, match, results};
    }
    case DATE_QUERY: {
      const formatted = formatDate(action.payload.value)
      const flights = action.payload.flights
      const match = flights.map(flights => flights.date)
                          .filter((val) => val.includes(formatted))
      const results = getFlightByDate(flights, match)
      return {...state, formatted, match, results};
    }
    case MATCHES_LOADED: {
      return action.payload
    }
    default:
      return state;
  }
}