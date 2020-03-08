const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const result = document.querySelector("#result");
const greenBox = document.querySelector("#greenBox");
const redBox = document.querySelector("#redBox");
const blueBox = document.querySelector("#blueBox");
const colorName = document.querySelector("#colorName");
const colorNameHex = document.querySelector("#colorNameHex");

const creator = () => {
    let color = `rgb(${red.value},${green.value},${blue.value})`;
    let hexresult = "#" + fullColorHex(red.value, green.value, blue.value);
    result.style.backgroundColor = color;
    colorName.innerText = color;
    colorNameHex.innerText = hexresult;
}


const rgbToHex = (rgb) => {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

const fullColorHex = (r, g, b) => {
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);
    return red + green + blue;
};


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

creator();







