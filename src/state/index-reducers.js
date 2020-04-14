import { combineReducers } from 'redux'
import ui from './UI/reducer'

const AppReducer = combineReducers({ ui })

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') return AppReducer({}, action)
  return AppReducer(state, action)
}

export default rootReducer
