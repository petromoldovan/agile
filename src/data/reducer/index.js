import types from "../actions/types"

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.SUCCESS_UPDATE_WORD_FORMATTING:
      console.log('got action', action)
      const newState = Object.assign({}, state, {
        [action.payload.item]: action.payload.styles
      })

      console.log('sttate', newState)

      return newState
    default:
      return state
  }
}

export default reducer
