import {NUM_QUERY, DATE_QUERY, MATCHES_LOADED, CLEAR_QUERY} from '../actions/search';
import {getFlightByNum, getFlightByDate} from '../lib/finders'
import {formatDate} from '../lib/dateFormats'

export default (state = [], action = {}) => {
  switch(action.type) {
    case NUM_QUERY: {
      const value = action.payload.value
      const flights = action.payload.flights
      const matches = flights.filter(flight => flight.flight.includes(value))

      const result = getFlightByNum(flights, matches.map(match => match.flight))
      return {...state, value, matches, result};
    }
    case DATE_QUERY: {
      const formatted = formatDate(action.payload.value)
      const flights = action.payload.flights
      const matches = flights.map(flights => flights.date)
                            .filter((val) => val.includes(formatted))
      const result = getFlightByDate(flights, matches)
      return {...state, formatted, matches, result};
    }
    case MATCHES_LOADED: {
      return action.payload
    }
    case CLEAR_QUERY: {
      console.log()
      return state.value.split().length = ''
    }
    default:
      return state;
  }
}