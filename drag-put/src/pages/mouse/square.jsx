import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
    static propTypes = {
        black: PropTypes.bool
    };

    render () {
        const { black, children } = this.props;
        return (
            <Fragment>
                <div className="square">{children}</div>
                {/* language=LESS */}
                <style jsx>{`
                    .square {
                        width: 100%;
                        height: 100%;
                         background-color: ${black ? 'black' : 'white'};
                         color: ${black ? 'white' : 'black'};
                    }
                `}</style>
            </Fragment>
        );
    }
}