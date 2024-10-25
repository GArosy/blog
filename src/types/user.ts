export interface UserJwt {
  sub: string
  name: string
  picture: string
  email: string
  iat: number
  exp: number
  jti: string
}

export interface UserSession {
  name: string
  email: string
  image: string
}
