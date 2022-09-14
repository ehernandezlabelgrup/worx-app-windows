
import { SET_LOGOUT, SET_PROFILE, SET_TOKEN } from '../constants/user'
export const actionSetToken = (data, user) => ({
  type: SET_TOKEN,
  data,
  user
})

export const actionSetProfile = (data) => ({
  type: SET_PROFILE,
  data: data
})

export const actionSetLogout = () => ({
  type: SET_LOGOUT
})
