export interface AuthData {
  email: string
  password: string
  returnSecureToken?: boolean
}
export interface FbAuthResponse {
  idToken?: string | any
  expiresIn?: string | any
}
