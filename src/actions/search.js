import request from 'superagent'

export const NUM_QUERY = 'NUM_QUERY';
export const DATE_QUERY = 'DATE_QUERY';

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

export const findFlightByNum = (num) => (dispatch) => {
  request(`${baseUrl}/flights`)
    .then(response => {
      dispatch(numQuery(num, response.body))
    })
    .catch(console.error)
}

export const findFlightByDate = (date) => (dispatch) => {
  const dateString = date.toString()
  console.log(dateString)
  console.log(date)
  request(`${baseUrl}/flights`)
    .then(response => {
      dispatch(dateQuery(date, response.body))
    })
    .catch(console.error)
}
