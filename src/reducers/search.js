import {SEARCH_QUERY} from '../actions/search';
import data from '../data.json'

const flightNums = data.flights.map(flight => flight.flight)
console.log(flightNums)
const initialState = {flightNums: flightNums, value: '', match: []};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_QUERY: {
      const {value} = action;
      const match = state.flightNums.filter((val) => val.includes(value));
      return {...state, value, match};
    }
    default:
      return state;
  }
}