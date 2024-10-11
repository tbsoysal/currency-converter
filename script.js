const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const baseCurr = document.querySelector("#baseCurrency");
  const targetCurr = document.querySelector("#targetCurrency");
  requestData(baseCurr.value, targetCurr.value);
})

async function requestData(baseCurr, targetCurr) {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/640fa2bdc5dd47399a72bdf3/latest/${baseCurr}`);
  const data = await response.json();
  displayRateResult(data.conversion_rates[`${targetCurr}`]);
}

function displayRateResult(rate) {
  const amountEl = document.querySelector("input[type='number']");
  const resultEl = document.querySelector("#result");
  resultEl.innerText = (rate * amountEl.value).toFixed(2);
}
