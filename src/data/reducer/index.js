import get from 'lodash/get'
import types from "../actions/types"

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.SUCCESS_UPDATE_WORD_FORMATTING:
      return Object.assign({}, state, {
        [action.payload.item]: action.payload.styles
      })
    case types.REQUEST_UPDATE_WORD:
      const newState = get(state, `${action.payload.item}`, {})
      newState.value = action.payload.value
      const returned = Object.assign({}, state, {
        [action.payload.item]: newState
      })
      console.log('returned', returned)
      return returned
    default:
      return state
  }
}

export default reducer
