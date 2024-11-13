function getWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchingCity(city) {
    //let apiKey = "bd9741tbdfabbd3bc4c44f3o556466c0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=bd9741tbdfabbd3bc4c44f3o556466c0&units=metric`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(getWeather);
}

function searchForInfo(event) {
    event.preventDefault();
    let cityEntered = document.querySelector("#city-entered");
    searchingCity(cityEntered.value);
}


let searchCityElement = document.querySelector("#city-search");
searchCityElement.addEventListener("submit", searchForInfo);

searchingCity("Houston");