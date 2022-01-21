import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
          })
        : compose

function* logMySaga(action: any) {
    console.log(action, 'FROM SAGA')
    yield action
}

function* mySaga() {
    yield takeEvery('LOG_EVENT', logMySaga)
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore((state = { hello: 'there' }) => {
    return state
}, enhancer)

sagaMiddleware.run(mySaga)
