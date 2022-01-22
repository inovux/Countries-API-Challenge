import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { countryReducer } from './countries/reducer'
import { RootState } from './state'

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
          })
        : compose

function* logMySaga(action: any) {
    yield action
}

function* mySaga() {
    yield takeEvery('LOG_EVENT', logMySaga)
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(
    combineReducers({ filters: countryReducer }),
    RootState,
    enhancer
)

sagaMiddleware.run(mySaga)
