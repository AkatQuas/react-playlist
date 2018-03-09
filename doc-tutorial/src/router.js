import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Sorry, there was no such route.</div>
    } else {
        return null;
    }
};

const Asyncs = [
    {
        path: '/calculator',
        file: 'calculator'
    },
    {
        path: '/clock',
        file: 'clock'
    }
].map(o => ({
    path: o.path,
    component: Loadable({
        loader: _ => import(`./components/${o.file}.js`),
        loading: MyLoadingComponent
    })
}));

export default React.createClass({
    render() {
        return <Switch>
            {
                Asyncs.map(o => <Route path={o.path} component={o.component} />)
            }
            <Route component={NotFound}/>
        </Switch>
    }
})

// todo test on async and sync 