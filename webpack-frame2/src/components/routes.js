import React from 'react'
import {Route, Router} from 'react-router'
import {createHashHistory} from 'history'

const history = createHashHistory();

import {Whoops404} from "./Whoops404"
import {App} from './app'

const routes = (
    <Router history={history}>
        <div>
            <Route path="/" component={App}/>
            <Route path="/list-days">
                <Route path=":filter" component={App}/>
            </Route>
            <Route path="/add-day" component={App}/>
            <Route component={Whoops404}/>
        </div>
    </Router>
)
export default routes
