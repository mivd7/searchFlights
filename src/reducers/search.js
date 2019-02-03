import {NUM_QUERY, DATE_QUERY} from '../actions/search';
import {getFlightByNum, getFlightByDate} from '../lib/finders'

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
      const value = action.payload.value
      const flights = action.payload.flights
      const match = flights.map(flights => flights.flight)
                          .filter((val) => val.includes(value))
      const results = getFlightByDate(flights, match)
      return {...state, value, match, results};
    }
    default:
      return state;
  }
}