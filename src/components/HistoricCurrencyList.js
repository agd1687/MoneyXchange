import React from 'react';
import HistoricCurrencyCard from './HistoricCurrencyCard';

export default function HistoricCurrencyList({ oneDayAgo, twoDayAgo, threeDayAgo }) {
    return (
        <div className="row justify-content-center mx-md-5">
            <div className="row row-cols-1 row-cols-md-2 mx-md-5">
                {Object.keys(oneDayAgo).map(key => <HistoricCurrencyCard key={key} title={key} oneDayAgo={oneDayAgo[key]} twoDayAgo={twoDayAgo[key]} threeDayAgo={threeDayAgo[key]} />)}
            </div>
        </div>
    );
}