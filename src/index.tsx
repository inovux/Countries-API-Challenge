import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import { store } from './store'

import './styles/normalize.css'
import './styles/variables.css'

console.log(store.getState())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
