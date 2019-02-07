import request from 'superagent'
import {baseUrl} from '../config'

export const FLIGHTS_FETCHED = 'FLIGHTS_FETCHED'
export const FLIGHT_FETCHED = 'FLIGHT_FETCHED'
export const APP_LOADING = 'APP_LOADING'
export const APP_LOADED = 'APP_LOADED'
export const GOT_ERROR = 'GOT_ERROR'

const flightsFetched = flights => ({
  type: FLIGHTS_FETCHED,
  flights
})

const flightFetched = flight => ({
  type: FLIGHT_FETCHED,
  flight
})

const appLoaded = (loaded) => ({
  type: APP_LOADED,
  loaded
})

const appLoading = (loading) => ({
  type: APP_LOADING,
  loading
})

const errorHandler = (error) => ({
  type: GOT_ERROR,
  payload: error,
  error: true
})

export const loadFlights = () => (dispatch, getState) => {
  if (getState().flights) return
  dispatch(appLoading('app loading'))

  request(`${baseUrl}/flights`)
    .then(response => {
      dispatch(flightsFetched(response.body))
      dispatch(appLoaded('appLoaded'))
    })
    .catch(
      console.error,
      dispatch(errorHandler('No data returned from API. Is the json-server running?'))
    )
}

export const loadFlight = (id) => (dispatch, getState) => {
  const state = getState()
  if (state && state.id === id) return

  request(`${baseUrl}/flights/${id}`)
    .then(response => {
      dispatch(flightFetched(response.body))
    })
    .catch(console.error,
      dispatch(errorHandler()))
}


