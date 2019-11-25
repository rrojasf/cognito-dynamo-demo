const API_USERS_URL = "https://taskmgr-ms-user-api.herokuapp.com/api/users/"
const API_TASKS_URL = "https://taskmgr-ms-task-api.herokuapp.com/api/tasks/"
const PAGE_OFFSET = 20
const PAGE_LIMIT = 20

export { API_USERS_URL, API_TASKS_URL, PAGE_OFFSET, PAGE_LIMIT }

export default {
  apiGateway: {
    REGION: "us-east-1",
    URL: "http://localhost:8080/api/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_OLTmV62ji", //"us-east-1_WC1ix2EzM",
    APP_CLIENT_ID: "3df8l0cbn8kosauplk4b2v8vvp", //"76lnr2n9kl3u9dlsin4fj432od",
    IDENTITY_POOL_ID: "us-east-1:e79156a7-91bb-4d09-921e-c0faeab8f201" //"us-east-1:86b687a6-dc4c-4f9c-95e4-5223543d9bfc"
  }
}
