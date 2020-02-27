const trial = document.querySelector("#trial");
const word = document.querySelector("#row");
const letter = document.querySelector("#letter");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const container = document.querySelector("#container");

const words = ["beşiktaş", "javascript", "bilgisayar"];
const size = words.length - 1;

const select = Math.round(Math.random() * size);
const selectedWord = words[select];

let trials = 9;



const getWord = (selected) => {
    let count = selected.length;
    for (let i = 0; i < count; i++) {
        word.innerHTML += `
        <div class="col border mx-1">
        <p id="harf${i}">
        </div>
         `
    }
    trial.value = trials;
}


const findLetter = (findLetter) => {
    const size = selectedWord.length;
    for (let i = 0; i < size; i++) {
        if (selectedWord[i] === findLetter) {
            target = `#harf${i}`
            document.querySelector(target).innerText = findLetter.toUpperCase();
        }
    }
    trial.value = trials;
}


const getLetter = (val) => {
    if (val.length === 1) {
        if (trials > 0) {
            trials--;
            findLetter(val);
        } else {
            alert("Try Again :(");
        }

    } else {
        alert("Invalid Value");
    }
}



const controller = () => {
    const size = selectedWord.length;
    let letterArray = [];
    for (let i = 0; i < size; i++) {
        target = `#harf${i}`
        letterArray.push(document.querySelector(target).innerText);
    }

    let len = letterArray.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (letterArray[i] !== "") {
            count++;
        }
    }
    if (size == count) {
        container.innerHTML = "";
        container.innerText = `!!  ${selectedWord.toUpperCase()}  !!`;
    }
}


button.addEventListener("click", () => {
    let value = input.value;
    getLetter(value);
    input.value = "";
    controller();
});

getWord(selectedWord);