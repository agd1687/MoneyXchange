import { DataTypes, CurrencyTypes } from "./Types";

const API_KEY = "0f76201d100bde44bc90c35de2cd97c1";
const API_BASE_URL = "http://data.fixer.io/api/";

export const RestUrls = {
    [DataTypes.EXCHANGE_RATES]: (currencyBase) => `${API_BASE_URL}latest?access_key=${API_KEY}&base=${currencyBase}&symbols=${Object.values(CurrencyTypes)}`,
    [DataTypes.HISTORICAL_RATES]: (currencyBase, historicalDate) => `${API_BASE_URL}${historicalDate}?access_key=${API_KEY}&base=${currencyBase}&symbols=${Object.values(CurrencyTypes)}`
}