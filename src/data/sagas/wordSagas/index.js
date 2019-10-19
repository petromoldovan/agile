import { takeLatest, put, select } from 'redux-saga/effects'
import get from 'lodash/get'
import types from "../../actions/types"
import {updateWordFormattingSuccess} from "../../actions/actions"

function* updateServiceSaga({ payload: { item, style } }) {
  try {
    const currentStyles = yield select(state => get(state, `[${item}]`, {}))
    const newStyles = Object.assign({}, currentStyles)
    if (!currentStyles[style]) {
      newStyles[style] = true
    } else {
      newStyles[style] = false
    }

    yield put(updateWordFormattingSuccess({item, styles: newStyles}))
  } catch (e) {
    console.log('e', e)
  }
}

const serviceSagas = [
  takeLatest(types.REQUEST_UPDATE_WORD_FORMATTING, updateServiceSaga)
]

export default serviceSagas
