import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Auth } from "aws-amplify"

import Login from "../../containers/Login/Login"
import Detail from "../Detail/Detail"

export const AuthContext = React.createContext() // added this

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true
        // user: action.payload.user,
        // token: action.payload.token
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false
        // user: null
      }
    default:
      return state
  }
}

/**
 *
 */
const App = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
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
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="App">
        {!state.isAuthenticated ? <Login /> : <Detail />}
      </div>
    </AuthContext.Provider>
  )
  //
  /*return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="App">
        <Router>
          <div className="container">
            <Route
              path="/"
              exact
              component={Detail}
              appProps={{
                isAuthenticated,
                userHasAuthenticated
              }}
            />
            <Route
              path="/login"
              component={Login}
              appProps={{
                isAuthenticated,
                userHasAuthenticated
              }}
            />
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  )*/
}

export default App
