import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import App from "./components/app"
import reducers from './reducers'

const middleware = routerMiddleware(browserHistory)

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
        app: reducers,
        routing: routerReducer
    }),
    applyMiddleware(middleware)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>
    </Provider>,
    document.getElementById('app')
)