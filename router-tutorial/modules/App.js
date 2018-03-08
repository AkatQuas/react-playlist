import React from 'react';
import NavLink from './NavLink';
import { IndexLink } from 'react-router';
import Home from './Home';

class App extends React.Component {
  render() {
    console.log(this.props);
    return <div>
      <h1>React Router tutorial</h1> 
      <ul role="nav">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/repos">Repos</NavLink></li>
        <li><IndexLink activeStyle={{ color: 'red' }} to="/">Home</IndexLink></li>
      </ul>
      {this.props.children || <Home />}
    </div>
  }
}

export default App;