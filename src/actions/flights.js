import request from 'superagent'
import {baseUrl} from '../config'

export const FLIGHTS_FETCHED = 'FLIGHTS_FETCHED'
export const FLIGHT_FETCHED = 'FLIGHT_FETCHED'
export const SEARCH_QUERY = 'SEARCH_QUERY'

export const flightsFetched = flights => ({
  type: FLIGHTS_FETCHED,
  flights
})

const flightFetched = flight => ({
  type: FLIGHT_FETCHED,
  flight
})

export const loadFlights = () => (dispatch, getState) => {
  if (getState().flights) return
  // dispatch(appLoading)
  request(`${baseUrl}/flights`)
    .then(response => {
      dispatch(flightsFetched(response.body))
      // dispatch(appLoaded)
    })
    .catch(
      console.error,
      // dispatch(ohNoes)
    )
}

export const loadFlight = (id) => (dispatch, getState) => {
  const state = getState()
  if (state && state.id === id) return

  request(`${baseUrl}/flights/${id}`)
    .then(response => {
      dispatch(flightFetched(response.body))
    })
    .catch(console.error)
}


