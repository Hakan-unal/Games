const canvas = document.querySelector("#canvas");
const draw = canvas.getContext("2d");
var time = 650;

canvas.addEventListener("click", (event) => {
    draw.beginPath();
    draw.arc(event.clientX, event.clientY, 40, 0, 2 * Math.PI);
    console.log(event);
    draw.stroke();
});


const gameStart = () => {
    setInterval(() => {
        draw.beginPath();
        const xCoordinate = Math.round(Math.random() * 480) + 10;
        const yCoordinate = Math.round(Math.random() * 480) + 10;
        draw.arc(xCoordinate, yCoordinate, 5, 0, 2 * Math.PI);
        draw.stroke();
        console.log(`X coordiante:${xCoordinate}`);
        console.log(`Y coordiante:${yCoordinate}`);
    }, (time));
}
gameStart();