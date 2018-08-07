import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/header';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes />
      </Fragment>
    );
  }
}

export default App;
