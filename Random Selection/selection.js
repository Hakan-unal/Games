document.addEventListener("DOMContentLoaded", () => {

    const inputBox = document.querySelector("#inputBox");
    const addButton = document.querySelector("#addButton");
    const deleteAll = document.querySelector("#deleteAll");
    const randomButton = document.querySelector("#randomButton");
    const list = document.querySelector("#list");
    const rangeDisplay = document.querySelector("#rangeDisplay");
    const range = document.querySelector("#range");



    const changeRange = () => {
        rangeDisplay.value = range.value;
    }

    
    const addLocalStorage = () => {
        let item, liste;
        item = inputBox.value;
        liste = JSON.parse(localStorage.getItem("items"));

        if (liste !== null) {
            liste.push(item);
        } else {
            liste = [];
            liste.push(item);
        }

        localStorage.setItem("items", JSON.stringify(liste));
        displayList(liste);

        inputBox.value = "";
    }


    const displayList = (liste) => {
        if (liste !== null) {
            list.innerText = "";
            liste.forEach((element, index) => {
                let li = document.createElement("li");
                li.setAttribute("class", "list-group-item");
                li.innerText = index + 1 + ".  " + element;
                index++;
                list.appendChild(li);
            });
        }
    }


    const deleteList = () => {
        localStorage.setItem("items", null);
        list.innerText = "";
    }


    const randomSelection = () => {
        let liste = JSON.parse(localStorage.getItem("items"));
        selection(liste);
    }


    const selection = (liste) => {

        if (liste !== null) {
            let value = Math.round(Math.random() * (liste.length - 1));
            console.log(value);
        }
    }


    displayList(JSON.parse(localStorage.getItem("items")));






    addButton.addEventListener("click", addLocalStorage);
    deleteAll.addEventListener("click", deleteList);
    randomButton.addEventListener("click", randomSelection);
    range.addEventListener("input", changeRange);

});








