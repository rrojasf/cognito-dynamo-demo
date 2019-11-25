import React, { useState } from "react"
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"
import { Auth } from "aws-amplify"

import LoaderButton from "../../components/LoaderButton/LoaderButton"
import "./Login.css"

const Login = props => {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validateForm = () => {
    return email.length > 0 && password.length > 0
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await Auth.signIn(email, password)
      alert("Logged in")
      props.userHasAuthenticated(true)
      props.history.push("/")
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
