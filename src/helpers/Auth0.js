import auth0 from "auth0-js"

const REACT_APP_AUTH0_DOMAIN = "dev-rrojasf.auth0.com"
const REACT_APP_AUTH0_CLIENT_ID = "yQ1g8et9GCQvnH4FeBBbBMtn5GDWldmL"
const REDIRECT_URI_CALLBACK = "http://localhost:3001/?callback"

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: REACT_APP_AUTH0_DOMAIN,
      audience: `https://${REACT_APP_AUTH0_DOMAIN}/userinfo`,
      clientID: REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: REDIRECT_URI_CALLBACK,
      responseType: "id_token",
      scope: "openid profile"
    })

    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  signIn() {
    this.auth0.authorize()
  }

  getProfile() {
    return this.profile
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err)
        if (!authResult || !authResult.idToken) {
          return reject(err)
        }

        this.idToken = authResult.idToken
        this.profile = authResult.idTokenPayload
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000
        resolve()
      })
    })
  }
}
