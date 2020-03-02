import React from 'react';
import moment from 'moment';
import Section from '../components/Section';
import CalculatorContainer from '../components/CalculatorContainer';
import HistoricCurrencyContainer from '../components/HistoricCurrencyContainer';
import { GetData } from '../data/RestDataSource';
import { DataTypes } from "../data/Types";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currencyInput: 'EUR', currencyOutput: 'USD' };
        this.shouldCallAPI = this.shouldCallAPI.bind(this);
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    async shouldCallAPI(callback) {
        const data = localStorage.getItem(`mxc_${this.state.currencyInput}`);
        if (data) {
            const currencyData = await JSON.parse(data);
            const diffMinutes = moment(new Date()).diff(moment(currencyData.date), 'minutes');
            if (diffMinutes >= 10) {
                this.getCurrencyRates(callback);
            } else if (diffMinutes < 10 && !this.state.hasOwnProperty('rates')) {
                this.getCurrencyRatesFromLocalStorage(currencyData.rates, callback);
            } else {
                callback();
                //alert("Get rates from State");
            }
        } else {
            this.getCurrencyRates(callback);
        }
    }

    async getCurrencyRates(callback) {
        const response = await GetData(DataTypes.EXCHANGE_RATES, this.state.currencyInput);
        const { rates } = await response.data;
        this.setState({ rates }, callback);
        localStorage.setItem(`mxc_${this.state.currencyInput}`, JSON.stringify({ date: new Date(), rates }));
        //alert("Get rates from API");
    }

    getCurrencyRatesFromLocalStorage(rates, callback) {
        this.setState({ rates }, callback);
        //alert("Get rates from LocalStorage");
    }

    render() {
        return (
            <main>
                <Section backgroundColor="bg-light">
                    <CalculatorContainer currencyOutput={this.state.currencyOutput} rates={this.state.rates} shouldCallAPI={this.shouldCallAPI} />
                </Section>
                <Section title="Historic Price">
                    <HistoricCurrencyContainer currencyInput={this.state.currencyInput} />
                </Section>
            </main>

        );
    }
}