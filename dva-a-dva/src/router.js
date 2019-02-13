import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountPage from './routes/CountPage';
import ClockerPage from './routes/ClockerPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/count" component={CountPage} />
        <Route path="/clocker" component={ClockerPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
