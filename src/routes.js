import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, AboutUs, Services, Contacts } from './components/pages'
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
      path={ROUTES.contacts}
      exact
      component={() => (
        <MainLayout>
          <Contacts />
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
    <Redirect to="/" />
  </Switch>
)

export default Routes
