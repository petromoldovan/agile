import { all } from 'redux-saga/effects'
import wordSagas from "./wordSagas"

export function* rootSaga() {
  yield all(wordSagas)
}
