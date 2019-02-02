import {combineReducers} from 'redux'
import flights from './flights'
import flight from './flight'
import search from './search'

export default combineReducers({
  flights,
  flight,
  search
})