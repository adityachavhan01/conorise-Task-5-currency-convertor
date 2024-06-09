const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110, INR: 74 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129, INR: 87 },
    GBP: { USD: 1.33, EUR: 1.14, JPY: 146, INR: 99 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, INR: 0.68 },
    INR: { USD: 0.014, EUR: 0.011, GBP: 0.01, JPY: 1.47 }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === "" || isNaN(amount)) {
        document.getElementById('result').innerText = "Please enter a valid amount";
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
