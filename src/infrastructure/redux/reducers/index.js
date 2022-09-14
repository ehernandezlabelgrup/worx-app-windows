import { combineReducers } from 'redux'
import userReducer from './user'
import globalReducer from './global'

export default combineReducers({
  userReducer,
  globalReducer
})
