import React from 'react';
import moment from 'moment';
import HistoricCurrencyList from './HistoricCurrencyList';
import { GetData } from '../data/RestDataSource';
import { DataTypes } from "../data/Types";

export default class HistoricCurrentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { oneDayAgo: {}, twoDayAgo: {}, threeDayAgo: {} };
    }

    componentDidMount() {
        this.getHistorical3LastDays();
    }

    async getHistoricalRates(date) {
        const response = await GetData(DataTypes.HISTORICAL_RATES, this.props.currencyInput, date);
        const { rates } = await response.data;
        return rates;
    }

    async getHistorical3LastDays() {
        const oneDayAgo = await this.getHistoricalRates(moment().subtract(1, 'days').format('YYYY-MM-DD'));
        const twoDayAgo = await this.getHistoricalRates(moment().subtract(2, 'days').format('YYYY-MM-DD'));
        const threeDayAgo = await this.getHistoricalRates(moment().subtract(3, 'days').format('YYYY-MM-DD'));
        this.setState({ oneDayAgo, twoDayAgo, threeDayAgo });
    }

    render() {
        return (
            <HistoricCurrencyList oneDayAgo={this.state.oneDayAgo} twoDayAgo={this.state.twoDayAgo} threeDayAgo={this.state.threeDayAgo} />
        );
    }
}