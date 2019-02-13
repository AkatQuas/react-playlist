import React from 'react';
import { connect } from 'dva';

class Clocker extends React.Component {
    add = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'clocker/add' });
    }
    add1Sec = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'clocker/addAfter1Sec' })
    }
    addUA = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'clocker/addAfterUA' })
    }
    addAll = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'clocker/addAfterAll', payload: 2 })
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { props } = this;
        return (<div>
            <h2>{props.clocker}</h2>
            <button key="add" onClick={this.add}> add </button>
            <button key="add1Sec" onClick={this.add1Sec}> add after 1 second </button>
            <button key="addUA" onClick={this.addUA}> add after UA </button>
            <button key="addAll" onClick={this.addAll}> add after All </button>
        </div>)
    }
}

export default connect((state) => {
    return {
        clocker: state.clocker
    }
})(Clocker);