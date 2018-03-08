import React from 'react';

class About extends React.Component {
    routerWillLeave(nextLocation) {
        if (true) {
            return 'What you\'re doing ';
        }
    }
    render () {
        return <div>About
        </div>;
    }
}

export default About;