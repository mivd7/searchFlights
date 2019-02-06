import request from 'superagent'

export const NUM_QUERY = 'NUM_QUERY';
export const DATE_QUERY = 'DATE_QUERY';
export const MATCHES_LOADED = 'MATCHES_LOADED'
export const CLEAR_QUERY = 'CLEAR_QUERY' 

const baseUrl = 'http://localhost:4000'

const numQuery = (value, flights) => {
  return {
    type: NUM_QUERY, 
    payload: {value, flights}
  };
}

const dateQuery = (value, flights) => {
  return {
    type: DATE_QUERY, 
    payload: {value, flights}
  };
}

export const clearQuery = (query) => {
  return {
    type: CLEAR_QUERY,
    query
  }
} 

export const loadMatches = (matches, flights) => {
  return {
    type: MATCHES_LOADED,
    payload: {matches, flights}
  }
}

export const findFlightByNum = (num) => (dispatch) => {
  request(`${baseUrl}/flights`)
    .then(response => {
      dispatch(numQuery(num, response.body))
    })
    .catch(console.error)
}

export const findFlightByDate = (date) => (dispatch) => {
  request(`${baseUrl}/flights`)
    .then(response => {
      dispatch(dateQuery(date, response.body))
    })
    .catch(console.error)
}
