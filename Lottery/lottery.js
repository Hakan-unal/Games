const ticket = document.querySelector("#ticket");
const lottery = document.querySelector("#lottery");
const buyTicketButton = document.querySelector("#buyTicketButton");
const tryButton = document.querySelector("#tryButton");
const price = document.querySelector("#price");
const size = 10;
let ticketNumbers, lotteryNumbers;


const randomNumberCreator = () => {
    let value = Math.round(Math.random() * 9);
    return value;
}


const createTicketBox = () => {
    ticket.innerHTML = "";
    for (let i = 0; i < size; i++) {
        ticket.innerHTML += `<div id="box${i}" class="col border"></div>`;
    }
}


const getTicketNumber = () => {
    let ticketArray = [];
    for (let i = 0; i < size; i++) {
        let val = randomNumberCreator();
        let html = `#box${i}`
        document.querySelector(html).innerText = val;
        ticketArray.push(val);
    }
    return ticketArray;
}


const createLotteryBox = () => {
    lottery.innerHTML = "";
    for (let i = 0; i < size; i++) {
        lottery.innerHTML += `<div id="boxx${i}" class="col border"></div>`;
    }
}


const getLotteryNumber = () => {
    let lotteryArray = [];
    for (let i = 0; i < size; i++) {
        let val = randomNumberCreator();
        let html = `#boxx${i}`
        document.querySelector(html).innerText = val;
        lotteryArray.push(val);
    }
    return lotteryArray;
}


const controlPrice = () => {
    let count = 0;
    if (ticketNumbers.length == 10 && lotteryNumbers.length == 10) {
        for (let i = 0; i < size; i++) {
            if (ticketNumbers[i] == lotteryNumbers[i]) {
                count += 25000;
            }
        }
        return count;
    }
}



buyTicketButton.addEventListener("click", () => {
    let ticketArray = [];
    createTicketBox();
    ticketArray = getTicketNumber();
    ticketNumbers = ticketArray;
});



tryButton.addEventListener("click", () => {
    let award;
    let lotteryArray = [];
    createLotteryBox();
    lotteryArray = getLotteryNumber();
    lotteryNumbers = lotteryArray;
    award = controlPrice();
    price.value = `${award}$`;
});
