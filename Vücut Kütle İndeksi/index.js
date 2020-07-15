document.addEventListener("DOMContentLoaded", () => {

    // Man Elements
    const manWeight = document.querySelector("#manWeight");
    const manHeight = document.querySelector("#manHeight");
    const manResult = document.querySelector("#manResult");
    const manForm = document.querySelector("#manForm");

    // Women Elements
    const womanWeight = document.querySelector("#womanWeight");
    const womanHeight = document.querySelector("#womanHeight");
    const womanResult = document.querySelector("#womanResult");
    const womenForm = document.querySelector("#womanForm");



    const manCalculator = (weight, height) => {
        console.log(weight, height);
    }




    manForm.addEventListener("submit", (event) => {
        const weight = Number(manWeight.value);
        const height = Number(manHeight.value);

        manCalculator(weight, height);

        event.preventDefault();
    })

    womanForm.addEventListener("submit", (event) => {
        console.log("Woman Form Submit")
        event.preventDefault();
    })



})