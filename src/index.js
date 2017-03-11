import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

// import compiled css
import './styles/style.css'

// import components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

const appRoutes = (
	<Provider store={store}>
		<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={PhotoGrid} />
			<Route path="/view/:postId" component={Single} />
		</Route>
	</Router>
	</Provider>
)

render(appRoutes, document.getElementById("root"))