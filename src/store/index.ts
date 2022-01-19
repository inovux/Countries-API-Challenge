import { applyMiddleware, compose, createStore } from 'redux'

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
          })
        : compose

const middleware: any = []

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore((state = { hello: 'there' }) => {
    return state
}, enhancer)
