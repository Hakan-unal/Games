let city = document.querySelector("#city");

let key = "759b33b63a60064128f0999e37625466";

let xhr;
xhr = new XMLHttpRequest();


const City = (obj) => {
    let cloud = document.querySelector("#cloud");
    let wind = document.querySelector("#wind");
    let cityCode = document.querySelector("#citycode");
    let weather = document.querySelector("#weather");

    cloud.innerText =    "Cloud:        " + obj.weather[0].description.toUpperCase();
    wind.innerText =     "Wind:         " + obj.wind.speed;
    cityCode.innerText = "City Code:    " + obj.cod;
    weather.innerText =  "Weather:      " + obj.weather[0].main.toUpperCase();
}


const calculate = () => {
    let cityName = city.value;
    let url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

    xhr.open(`GET`, url, true);
    xhr.onload = function () {

        if (this.status === 200) {
            const text = JSON.parse(this.responseText);
            City(text);
        }
    }
    xhr.send();
}

city.addEventListener('change', calculate);