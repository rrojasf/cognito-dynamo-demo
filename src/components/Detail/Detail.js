import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { AuthContext } from "../../components/App/App"
import Header from "../elements/Header/Header"
import Navigation from "../elements/Navigation/Navigation"
import DashboardHeader from "../elements/DashboardHeader/DashboardHeader"
import Dashboard from "../elements/Dashboard/Dashboard"
import DetailsList from "../elements/DetailsList/DetailsList"

import { API_URL, API_URL_LOCAL } from "../../config"
import { useFetch } from "../../helpers/hooks"

/*const initialState = {
  items: [],
  isFetching: false,
  hasError: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUEST":
      return {
        ...state,
        isFetching: true,
        hasError: false
      }
    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        items: action.payload
      }
    case "FETCH_ITEMS_FAILURE":
      return {
        ...state,
        hasError: true,
        isFetching: false
      }
    default:
      return state
  }
} */

const Detail = ({ className }) => {
  // const { state: authState } = React.useContext(AuthContext)
  const [data, loading] = useFetch(API_URL + "/details")
  /* const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    dispatch({
      type: "FETCH_ITEMS_REQUEST"
    })
    fetch(API_URL_LOCAL + "/details")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }
      })
      .then(resJson => {
        console.log("abc")
        dispatch({
          type: "FETCH_ITEMS_SUCCESS",
          payload: resJson
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({
          type: "FETCH_ITEMS_FAILURE"
        })
      })
  }, [authState.token]) */

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
