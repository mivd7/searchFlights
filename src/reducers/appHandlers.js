import {APP_LOADING, APP_LOADED, GOT_ERROR} from '../actions/flights'

export default (state = null, action = {}) => {
  switch (action.type) {
    case APP_LOADING:
      return {...state, isLoading: true}
    case APP_LOADED:
      return {...state, isLoading: false, isError: false, errorMessage: ''}
    case GOT_ERROR:
      return {...state, isError: true, errorMessage: action.payload}
    default:
      return state
  }
}