import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { filtersReducer } from './filters'
import countrySagas from './countries/saga'
import { countriesReducer } from './countries/reducer'

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
          })
        : compose

function* rootSaga() {
    yield all([countrySagas()])
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(
    combineReducers({ countries: countriesReducer, filters: filtersReducer }),
    enhancer
)

sagaMiddleware.run(rootSaga)
