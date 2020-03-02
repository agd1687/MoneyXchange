import React from 'react';
import Calculator from './Calculator';


export default class calculatorContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currencyInputValue: 0, currencyOutputValue: 0 };
        this.handleCurrencyInputValue = this.handleCurrencyInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCurrencyInputValue({ value }) {
        this.setState({ currencyInputValue: value });
    }

    handleSubmit(e) {
        const callback = () => this.setState((state, props) => (computeCurrencyConversion(state, props)));
        this.props.shouldCallAPI(callback);
        e.preventDefault();
    }

    render() {
        return (
            <Calculator currencyInputValue={this.state.currencyInputValue} currencyOutputValue={this.state.currencyOutputValue} handleCurrencyInputValue={this.handleCurrencyInputValue} handleSubmit={this.handleSubmit} />
        );
    }
}

export function computeCurrencyConversion(state, props) {
    return { currencyOutputValue: Number((props.rates[props.currencyOutput] * state.currencyInputValue).toFixed(4)) };
}