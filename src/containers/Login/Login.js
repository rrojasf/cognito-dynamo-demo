import React, { useState } from "react"
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"
import { Auth } from "aws-amplify"

import { AuthContext } from "../../components/App/App"
import LoaderButton from "../../components/LoaderButton/LoaderButton"
import "./Login.css"

const Login = props => {
  const { dispatch } = React.useContext(AuthContext)

  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  }

  const [data, setData] = React.useState(initialState)

  const validateForm = () => {
    return email.length > 0 && password.length > 0
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await Auth.signIn(email, password)

      dispatch({
        type: "LOGIN",
        payload: ""
      })
      // props.userHasAuthenticated(true)
      props.history.push("/")

      alert("Logged in")
    } catch (e) {
      alert(e.message)
      setIsLoading(false)
    }
  }

  /*handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }*/

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>
    </div>
  )
}

export default Login
