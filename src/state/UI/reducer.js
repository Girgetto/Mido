import { handleActions } from 'redux-actions'
import initialState from './initial.state'
import * as actions from './actionCreators'
const ui = handleActions(
  {
    [actions.setLanguage]: (state, { payload: { language } }) => ({
      ...state,
      language,
    }),
  },
  initialState
)
export default ui
