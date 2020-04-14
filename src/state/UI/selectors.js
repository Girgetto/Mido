import { handleActions } from 'redux-actions'
import initialState from './initial.state'

const ui = handleActions({}, initialState)

export default ui
