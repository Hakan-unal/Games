const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const swapButton = document.querySelector("#button");
const date = document.querySelector("#date");
const info = document.querySelector("#info");


const calculate = () => {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            info.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            inputTwo.value = (inputOne.value * rate).toFixed(3);
            date.innerText = `Last updated:  ${data.date}`;
        });
}

currencyOne.addEventListener('change', calculate);
inputOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
inputTwo.addEventListener('input', calculate);


swapButton.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});

calculate();