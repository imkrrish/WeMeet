import React from 'react'
import { Route } from 'react-router'
import { Home } from '@material-ui/icons'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Welcome />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/register">
        <Signup />
      </Route>

      <Route path="/signin">
        <Login />
      </Route>
    </>

  )
}

export default App
