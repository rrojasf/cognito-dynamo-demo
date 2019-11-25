import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./containers/Login/Login"
import Detail from "./components/Detail/Detail"
import AppliedRoute from "./components/AppliedRoute/AppliedRoute"


export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Detail} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
    </Switch>
  )
}
