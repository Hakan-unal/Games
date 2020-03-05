const horoscope = document.querySelector("#horoscope")
const result = document.querySelector("#result");



const createTable = (obj) => {
    result.innerHTML = `
    <p><b>Burç</b>:  ${obj.burc}</p>
    <p><b>Gezegen</b>:  ${obj.gezegen}</p>
    <p><b>Uğurlu Taş</b>:  ${obj.ugurluTas}</p>
    <p><b>Olumlu Özellikler</b>:  ${obj.olumlu}</p>
    <p><b>Olumsuz Özellikler</b>:  ${obj.olumsuz}</p>
    <p><b>Tarih</b>:  ${obj.tarih}</p>
    `;
}


const calculate = (object) => {
    object.horoscope.forEach(obj => {
        if (horoscope.value == obj.burc) {
            createTable(obj);
        }

    });
}


const getJson = () => {
    fetch("./horoscope.json").then(response => response.json()).then(data => {
        calculate(data);
    }).catch(err => alert("hata"));
}



horoscope.addEventListener("change", getJson);
getJson();