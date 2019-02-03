import {SEARCH_QUERY} from '../actions/search';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SEARCH_QUERY: {
      
      const value = action.payload.value;
      const flights = action.payload.flights
      const flightNums = flights.map(flights => flights.flight)
      const match = flightNums.filter((val) => val.includes(value))
      function getFlightByNum(num) {
        var i;
        for (i = 0; i < flights.length; i++) {
            if(flights[i]['flight'] == num)
            return flights[i]
        }}
      const results = getFlightByNum(match)
      return {...state, value, match, results};
    }
    default:
      return state;
  }
}