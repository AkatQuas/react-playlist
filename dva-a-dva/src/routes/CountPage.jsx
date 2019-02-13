import React from 'react';
import { connect } from 'dva';

class Counter extends React.Component {
    add = () => {
        const {dispatch} = this.props;
        dispatch({type: 'count/add'});
    }
    minus = () => {
        const {dispatch} = this.props;
        dispatch({type: 'count/minus'})
    }
    minus2 = () => {
        const {dispatch} = this.props;
        dispatch({type: 'count/minus', payload: 2});
    }
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        const { props } = this;
        return (<div>
            <h2>{props.count}</h2>
            <button key="add" onClick={this.add}> add </button>
            <button key="minus" onClick={this.minus}> minus </button>
            <button key="minus2" onClick={this.minus2}> minus 2 </button>
        </div>)
    }
}

export default connect((state) => {
    return {
        count: state.count
    }
})(Counter);