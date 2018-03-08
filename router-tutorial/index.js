import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Repos from './modules/Repos'
import About from './modules/About'
import Repo from './modules/Repo'
import Home from './modules/Home'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render((
    <Router history={browserHistory}>
        <Route exact path="/" component={App} >
            <IndexRoute component={Home} />

            <Route path="repos" component={Repos} >
                <Route path=":userName/:repoName" component={Repo} />
            </Route>
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.getElementById('app'))

