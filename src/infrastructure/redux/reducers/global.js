import { SHOW_MODAL_INITIAL } from '../constants/global'

const initialState = {
  showModalInitial: false
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_INITIAL:
      return {
        ...state,
        showModalInitial: action.show
      }

    default:
      return state
  }
}

export default globalReducer
