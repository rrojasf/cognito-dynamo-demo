import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Auth } from "aws-amplify"

import "./Navigation.css"

const navigationPropTypes = {
  className: PropTypes.string
}

const Navigation = ({ className, props }) => {
  const handleLogout = async () => {
    await Auth.signOut()

    // userHasAuthenticated(false)

    props.history.push("/login")
  }

  return (
    <div className={className}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collpase nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Detail
              </Link>
            </li>
            <li className="navbar-item">
              <span>OMNI MIA</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

Navigation.propTypes = navigationPropTypes

export default Navigation
