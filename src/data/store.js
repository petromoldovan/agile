import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer"
import {rootSaga} from "./sagas"

export const buildStore = (initialStore = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = compose(applyMiddleware(
    thunk,
    sagaMiddleware
  ))

  const store = createStore(reducer, initialStore, middleware)

  sagaMiddleware.run(rootSaga)

  return store
}
