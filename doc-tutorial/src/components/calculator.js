import React from 'react';

const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

const toFahrenheit = celsius => (celsius * 9 / 5) + 32;

const tryConvert = (temprature, convert) => {
    const input = parseFloat(temprature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
};

const BoilingVerdict = props => props.celsius > 100 ?
    <p> The water would boil. </p> : <p>The water would not boil.</p>;

class TempratureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };
        const temprature = this.props.temprature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend> Enter temprature in {scaleNames[scale]} </legend>
                <input value={temprature} onChange={this.handleChange} />
            </fieldset>
        )
    }
};

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temprature: '', scale: 'c' };

    }

    handleCelsiusChange(temprature) {
        this.setState({ scale: 'c', temprature });
    }

    handleFahrenheitChange(temprature) {
        this.setState({ scale: 'f', temprature });
    }

    render() {
        const scale = this.state.scale;
        const temprature = this.state.temprature;
        const celsius = scale === 'f' ? tryConvert(temprature, toCelsius) : temprature;
        const fahrenheit = scale === 'c' ? tryConvert(temprature, toFahrenheit) : temprature;
        return (
            <div>
                <TempratureInput scale='c' temprature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TempratureInput scale='f' temprature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}