//PARIS//
const result = document.getElementById("weather-result-paris");
var askWeather = new XMLHttpRequest();
askWeather.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var response = JSON.parse(this.responseText);
    result.innerHTML = response.current_condition.condition;
    console.log(response.current_condition.condition);
  }
};
askWeather.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
askWeather.send();

meteoParis = document.getElementById("ask-weather-paris");
meteoParis.addEventListener("click", function (event) {
  event.preventDefault();
  askWeather();
});

//LYON

const resultLyon = document.getElementById("weather-result-lyon");
var askWeatherLyon = new XMLHttpRequest();
askWeatherLyon.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var responseLyon = JSON.parse(this.responseText);
    console.log(responseLyon.current_condition.condition);
    resultLyon.innerHTML = responseLyon.current_condition.condition;
  }
};
askWeatherLyon.open("GET", "https://www.prevision-meteo.ch/services/json/lyon");
askWeatherLyon.send();

//BORDEAUX
const resultBordeaux = document.getElementById("weather-result-bordeaux");
var askWeatherBordeaux = new XMLHttpRequest();
askWeatherBordeaux.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var responseBordeaux = JSON.parse(this.responseText);
    console.log(responseBordeaux.current_condition.condition);
    resultBordeaux.innerHTML = responseBordeaux.current_condition.condition;
  }
};
askWeatherBordeaux.open(
  "GET",
  "https://www.prevision-meteo.ch/services/json/bordeaux"
);
askWeatherBordeaux.send();

//BIARRITZ
const resultBiarritz = document.getElementById("weather-result-biarritz");
var askWeatherBiarritz = new XMLHttpRequest();
askWeatherBiarritz.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var responseBiarritz = JSON.parse(this.responseText);
    console.log(responseBiarritz.current_condition.condition);
    resultBiarritz.innerHTML = responseBiarritz.current_condition.condition;
  }
};
askWeatherBiarritz.open(
  "GET",
  "https://www.prevision-meteo.ch/services/json/biarritz"
);
askWeatherBiarritz.send();

//PARIS//
const addSunrise = document.createElement("p");
const resultLogo = document.getElementById("weather-result-paris");
resultLogo.appendChild(addSunrise);

var askWeatherLogo = new XMLHttpRequest();
askWeatherLogo.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var responseLogoParis = JSON.parse(this.responseText);
    addSunrise.innerHTML = responseLogoParis.city_info.sunrise;
    console.log(responseLogoParis.city_info.sunrise);
  }
};
askWeatherLogo.open(
  "GET",
  "https://www.prevision-meteo.ch/services/json/paris"
);
askWeatherLogo.send();
