import { computeCurrencyConversion } from './components/CalculatorContainer';

test('computeCurrencyConversion', () => {
  const result = computeCurrencyConversion({ currencyInputValue: 500 }, { currencyOutput: 'USD', rates: { USD: 1.1 } })
  expect(JSON.stringify(result)).toBe(JSON.stringify({ currencyOutputValue: 550 }))
});
