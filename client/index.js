import * as React from "react"
import * as Redux from "redux"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

// Styles
import css from './styles/main.scss'

// Containers
import App from "./containers/App"

import store from './store'

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
document.getElementById('app'));
