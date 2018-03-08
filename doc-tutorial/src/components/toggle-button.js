import React from 'react';

const UserGreeting = props => {
    return <p> Welcome User ! </p>
};
const GuestGreeting = props => {
    return <p> Welcome Guest ! </p>
};

export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOn: true };

        // binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isOn ? 'User On' : 'Guest here'}
                </button>
                {this.state.isOn ? <UserGreeting /> : <GuestGreeting />}
            </div>)
    }
}

