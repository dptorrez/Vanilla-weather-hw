function searchForInfo(event) {
    event.preventDefault();
    let cityEntered = document.querySelector("#city-entered");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = cityEntered.value;
}


let searchCityElement = document.querySelector("#city-search");
searchCityElement.addEventListener("submit", searchForInfo)