import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './views/about';
import Buy from './views/buy';
import Home from './views/home';

export default _ => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/buy" exact component={Buy} />
    </Switch>
)