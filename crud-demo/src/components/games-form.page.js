import React from 'react';
import { connect } from "react-redux";
import { addNewGames } from "../store/actions";
import PropTypes from 'prop-types';

class GameForm extends React.Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.title) {
            return false;
        }
        console.log(this)
        this.props.addNewGames({title:this.state.title});
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Add new Game</h1>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input 
                                type="text"
                                id="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                name="title"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

GameForm.propTypes = {
    addNewGames: PropTypes.func.isRequired
}

export default connect(_ => ({}), { addNewGames })(GameForm);
