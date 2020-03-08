const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const result = document.querySelector("#result");
const greenBox = document.querySelector("#greenBox");
const redBox = document.querySelector("#redBox");
const blueBox = document.querySelector("#blueBox");
const colorName = document.querySelector("#colorName");


const creator = () => {
    let color = `rgb(${red.value},${green.value},${blue.value})`;
    result.style.backgroundColor = color;
    colorName.innerText=color;
}

green.addEventListener("input", (event) => {
    greenBox.style.backgroundColor = `rgb(0,${green.value},0)`;
    creator();
});

blue.addEventListener("input", (event) => {
    blueBox.style.backgroundColor = `rgb(0,0,${blue.value})`;
    creator();
});

red.addEventListener("input", (event) => {
    redBox.style.backgroundColor = `rgb(${red.value},0,0)`;
    creator();
});






