document.addEventListener("DOMContentLoaded", () => {

    const inputBox = document.querySelector("#inputBox");
    const addButton = document.querySelector("#addButton");
    const deleteAll = document.querySelector("#deleteAll");
    const randomButton = document.querySelector("#randomButton");
    const list = document.querySelector("#list");
    const rangeDisplay = document.querySelector("#rangeDisplay");
    const range = document.querySelector("#range");



    const addLocalStorage = () => {
        let item = inputBox.value;
        console.log(item);
    }


    addButton.addEventListener("click", addLocalStorage);

});






