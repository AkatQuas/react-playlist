import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        console.log('clock mounted');
        this.timerID = setInterval(_ => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log('clock unmount');
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <p> Hello, World! </p>
                <p> It is {this.state.date.toLocaleTimeString()}.</p>
            </div>
        )
    }
}

