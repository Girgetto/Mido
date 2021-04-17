import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, AboutUs, Services } from './components/pages'
import { MainLayout } from './components/layout'
import { ROUTES } from './constants'

const Routes = (
  <Switch>
    <Route
      path={ROUTES.aboutUs}
      exact
      component={() => (
        <MainLayout>
          <AboutUs />
        </MainLayout>
      )}
    />
    <Route
      path={ROUTES.index}
      exact
      component={() => (
        <MainLayout>
          <Home />
        </MainLayout>
      )}
    />
    <Route
      path={ROUTES.services}
      exact
      component={() => (
        <MainLayout>
          <Services />
        </MainLayout>
      )}
    />
    <Route
      path="*"
      exact
      component={() => (
        <MainLayout>
          <Redirect to={ROUTES.index} />
        </MainLayout>
      )}
    />
    <Redirect to={ROUTES.index} />
  </Switch>
)

export default Routes
