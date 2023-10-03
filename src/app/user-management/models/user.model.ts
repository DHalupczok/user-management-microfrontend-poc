export type Role =  'admin' | 'user' | 'banned'
export interface User {
  id?: number,
  login: string,
  password: string,
  role: Role
}
