function getWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector(".weather-description");
    let humidyElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let currentTimeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
    
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"class="weather-icon"/>`;
    currentTimeElement.innerHTML = showDate(date);
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidyElement.innerHTML = `${response.data.temperature.humidity}%`;
    descriptionElement.innerHTML = response.data.condition.description;
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    console.log(response);
}
function showDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10 ) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`
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