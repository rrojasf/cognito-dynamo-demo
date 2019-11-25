import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Auth } from "aws-amplify"

import Login from "../../containers/Login/Login"
import Detail from "../Detail/Detail"

/**
 *
 */
const App = props => {
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isAuthenticated, userHasAuthenticated] = useState(false)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      await Auth.currentSession()

      userHasAuthenticated(true)
    } catch (e) {
      if (e !== "No current user") {
        alert(e)
      }
    }

    setIsAuthenticating(false)
  }

  return (
    <div className="App">
      <Router>
        <div className="container">
          <Route
            path="/"
            exact
            component={Detail}
            appProps={{ isAuthenticated, userHasAuthenticated }}
          />
          <Route
            path="/login"
            component={Login}
            appProps={{ isAuthenticated, userHasAuthenticated }}
          />
        </div>
      </Router>
    </div>
  )
}

export default App
