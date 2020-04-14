import { createAction } from 'redux-actions'
import * as actionTypes from './actionTypes'

export const setLoading = createAction(
  actionTypes.SET_LOADING,
  (isLoading) => ({ isLoading })
)
export const setError = createAction(actionTypes.SET_ERROR, (error) => ({
  error,
}))
export const setLanguage = createAction(
  actionTypes.SET_LANGUAGE,
  (language) => ({ language })
)
