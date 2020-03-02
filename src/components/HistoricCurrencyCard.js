import React from 'react';

export default function HistoricCurrencyCard({ title, oneDayAgo, twoDayAgo, threeDayAgo }) {
    return (
        <div className="col d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">
                    <h5 className="card-title text-secondary font-weight-bold mb-0">{title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text text-secondary mb-1"><span className="font-weight-bold">Yesterday: </span>{new Intl.NumberFormat('en-US', { currency: 'EUR' }).format(oneDayAgo)}</p>
                    <p className="card-text text-secondary mb-1"><span className="font-weight-bold">Two days ago: </span>{new Intl.NumberFormat('en-US', { currency: 'EUR' }).format(twoDayAgo)}</p>
                    <p className="card-text text-secondary mb-1"><span className="font-weight-bold">Three days ago: </span>{new Intl.NumberFormat('en-US', { currency: 'EUR' }).format(threeDayAgo)}</p>
                </div>
            </div>
        </div>
    );
}