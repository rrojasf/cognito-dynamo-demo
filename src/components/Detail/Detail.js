import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Header from "../elements/Header/Header"
import Navigation from "../elements/Navigation/Navigation"
import DashboardHeader from "../elements/DashboardHeader/DashboardHeader"
import Dashboard from "../elements/Dashboard/Dashboard"
import DetailsList from "../elements/DetailsList/DetailsList"

import { useFetch } from "../../helpers/hooks"

const Detail = ({ className }) => {
  const [data, loading] = useFetch("http://localhost:8080/api/users")

  return (
    <div className={className}>
      <Header />
      <Navigation />
      <span>Detalle de la campa&ntilde;a</span>
      <div>
        <br />
        {loading ? (
          "Loading!!!"
        ) : (
          <React.Fragment>
            <DashboardHeader />
            <Dashboard />
            <DetailsList items={data} />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Detail
