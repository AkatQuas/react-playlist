import React from 'react';
import { connect } from 'react-redux';
import { ACTIONS, STATES } from '../store/types';

const mapStateToProps = state => ({
    user: state[STATES.USER]
});
const mapDispatchToProps = dispatch => ({
    setName: name => dispatch({
        type: ACTIONS.USER.SET_NAME,
        payload: new Promise((res, rej) => {
            setTimeout(_ => {
                res(name);
            }, 2000);
        })
    })
});

class MyRedux extends React.Component {
    render() {
        return (
            <div className='container'>
                <button onClick={_ => this.props.setName('Anna')}>
                    set name to Anna </button>
                <p > username : {this.props.user.name} </p>
                <p > age : {this.props.user.age} </p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRedux);