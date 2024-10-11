const form = document.querySelector('form');
const amountEl = document.querySelector("input[type='number']");
const baseCurr = document.querySelector("#baseCurrency");
const targetCurr = document.querySelector("#targetCurrency");
const resultEl = document.querySelector("#result");
const selectEls = document.querySelectorAll('select');

amountEl.addEventListener("keyup", () => {
  requestData(baseCurr.value, targetCurr.value);
});

selectEls.forEach((el) => {
  el.addEventListener('change', () => requestData(baseCurr.value, targetCurr.value))
})

form.addEventListener("submit",(e) => e.preventDefault())

async function requestData(baseCurr, targetCurr) {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/640fa2bdc5dd47399a72bdf3/latest/${baseCurr}`);
  const data = await response.json();
  displayRateResult(data.conversion_rates[`${targetCurr}`]);
}

function displayRateResult(rate) {
  resultEl.textContent = `${(rate * amountEl.value).toFixed(2)} ${targetCurr.value}`;
}
