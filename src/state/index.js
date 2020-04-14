import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from './index-reducers'
import rootSagas from './sagas-registration'

const sagaMiddleware = createSagaMiddleware()

const history = createBrowserHistory({
  baseUrl: '/remida',
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-undef
const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui'],
  stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (initialState = {}) => {
  const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    enhancer
  )
  const persistor = persistStore(store)
  sagaMiddleware.run(rootSagas)
  routerMiddleware(history)
  persistStore(store)

  return { store, persistor }
}

const { store, persistor } = configureStore()

export { store, persistor, history }
