import {combineReducers} from 'redux'
import flights from './flights'
import flight from './flight'
import search from './search'
import appHandlers from './appHandlers'

export default combineReducers({
  flights,
  flight,
  search,
  appHandlers
})