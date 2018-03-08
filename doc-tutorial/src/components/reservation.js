import React from 'react';

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            essay: 'write your essay'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Is Going: <input name='isGoing' type='checkbox' checked={this.state.isGoing} onChange={this.handleInputChange} /> </label>
                    <br />
                    <label> Number of guests: <input name='numberOfGuests' type='number' value={this.state.numberOfGuests} onChange={this.handleInputChange} /> </label>
                    <br />
                    <label> Essay : <textarea name='essay' cols='30' rows='10' value={this.state.essay} onChange={this.handleInputChange}></textarea></label> <br />
                    <select value={this.state.fruit} onChange={this.handleInputChange} name='fruit' >
                        <option value='' > Choose your fruit </option>
                        <option value='grape' > Grape </option>
                        <option value='lime' > Lime </option>
                        <option value='mango' > Mango </option>
                        <option value='banana' > Banana </option>
                        <option value='Apple' > apple </option>
                    </select>
                    <input type='submit' value='Submit' />
                </form>
                <p > In the input[type = 'number'], the value is String rather than a number. </p>
            </div>
        )
    }
}