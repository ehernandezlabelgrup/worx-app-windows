import { SET_LOGOUT, SET_PROFILE, SET_TOKEN } from '../constants/user'

const initialState = {
  loading: false,
  error: false,
  token: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.data,
        user: action?.user
      }

    case SET_PROFILE:
      return {
        ...state,
        user: action.data
      }

    case SET_LOGOUT:
      return {
        ...state,
        token: null,
        user: null
      }

    default:
      return state
  }
}

export default userReducer
