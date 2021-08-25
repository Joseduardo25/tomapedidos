import * as TYPE from '../types/auth'

const initialState = {
  authenticated: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case TYPE.DO_AUTHENTICATED:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state
  }
}