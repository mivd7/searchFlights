import request from 'superagent'

export const SEARCH_QUERY = 'SEARCH_QUERY';
export const SEARCH_SUCCEESS = 'SEARCH_SUCCEESS'

const baseUrl = 'http://localhost:4000'

const searchQuery = (value, flights) => {
  return {
    type: SEARCH_QUERY, 
    payload: {value, flights}
  };
}

export const findFlightByNum = (num) => (dispatch) => {
  request(`${baseUrl}/flights`)
    .then(response => {
      dispatch(searchQuery(num, response.body))
    })
    .catch(console.error)
}