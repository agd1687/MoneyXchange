import React from 'react';
import NumberFormat from 'react-number-format';

export default function Calculator({ currencyInputValue, currencyOutputValue, handleCurrencyInputValue, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} id="calculator">
            <div className="form-row justify-content-center align-items-center">
                <div className="col-auto">
                    <label className="text-secondary" htmlFor="inputCurrency">EUR:</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">&euro;</div>
                        </div>
                        <NumberFormat value={currencyInputValue} onValueChange={handleCurrencyInputValue} thousandSeparator={true} prefix={'€'} decimalScale={4} />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="text-secondary" htmlFor="outputCurrency">USD:</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">&#36;</div>
                        </div>
                        <NumberFormat value={currencyOutputValue} thousandSeparator={true} prefix={'$'} decimalScale={4} readOnly />
                    </div>
                </div>
                <div className="col-12 row justify-content-center mt-3">
                    <input type="submit" value="CALCULATE" className="btn btn-primary w-50 mb-2" />
                </div>
            </div>
        </form>
    );
}