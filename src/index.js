import React, { Suspense } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { store, persistor } from './state'
import Routes from './routes'
import './style.scss'
import './i18n'
import * as serviceWorker from './serviceWorker'
import GlobalStyles from './GlobalStyles'
import { ParallaxProvider } from 'react-scroll-parallax'

AOS.init()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <Suspense fallback="loading">
        <ParallaxProvider>
          <HashRouter>{Routes}</HashRouter>
        </ParallaxProvider>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
