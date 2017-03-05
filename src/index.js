import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import compiled css
import './styles/style.css'

// import components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

const appRoutes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid} />
			<Route path="/view/:postId" component={Single} />
		</Route>
	</Router>
)

render(appRoutes, document.getElementById("root"))