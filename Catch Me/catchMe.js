const canvas = document.querySelector("#canvas");
const draw = canvas.getContext("2d");

canvas.addEventListener("click", (event) => {
    draw.beginPath();
    draw.arc(event.clientX, event.clientY, 40, 0, 2 * Math.PI);
    draw.stroke();
});

const gameStart = () => {
    setInterval(() => {
        let xCoordinate, yCoordinate;
        xCoordinate = Math.round(Math.random() * 499);
        yCoordinate = Math.round(Math.random() * 499);
        draw.beginPath();
        draw.arc(xCoordinate, yCoordinate, 5, 0, 2 * Math.PI);
        draw.stroke();
    }, (1000));
}