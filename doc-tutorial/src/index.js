import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
// lifting state up
import Calculator from './components/calculator';
// state and lifecycle
import Clock from './components/clock';
// Composition vs Inheritance
import ComVsInh from './components/composition-v-inheritance';
// stateless component
import Greetings from './components/greetings';
// lists
import Lists from './components/lists';
// conditional rendering
import Mailbox from './components/mail-box';
// forms
import Reservation from './components/reservation';
// handling events
import ToggleButton from './components/toggle-button';
// store example
import UserStore from './components/user-store';

// tic-tac-toe tutorial
import Game from './game';

import './index.css';
import store from './store/index';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2> Game From Tutorial - TicTacToe </h2>
                <Game />
                <hr />
                <h2> Examples from <i> Quick Start </i> </h2>
                <h3> Props and list - render </h3>
                <Greetings />
                <h3> Lifecycle </h3>
                <Clock />
                <h3> Handling Events and conditional rendering </h3>
                <ToggleButton />
                <Mailbox unreadMsg={['what']} />
                <h3> Lists and keys </h3>
                <Lists />
                <h3> Forms </h3>
                <Reservation />
                <h3> Lifting State Up </h3>
                <p> The children would invoke the function in the parent and get the state from the parent to make their own views sync. </p>
                <Calculator />
                <h3> Composition rather than Inheritance </h3>
                <ComVsInh />
                <hr />
                <h3> React and redux example </h3>
                <UserStore />
            </div>
        )
    }
}

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
