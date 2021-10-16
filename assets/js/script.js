// key 16504850b1a264a95e1797ff5a4e056b

// api call https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=&appid=16504850b1a264a95e1797ff5a4e056b

// Variables

var searchCityInput = document.getElementById("searchCityInput");
var searchCityBtn = document.getElementById("searchCityBtn");

var recentSearchCity = document.getElementById("recentSearchCity");
var localStorageIndex = 0;



// load page with recent searches if values are stored in local storage
for (let i = 0; i < localStorage.length; i++) {

    var loadBtn = document.createElement("button");
    loadBtn.textContent = localStorage.getItem(localStorage.key(i));
    loadBtn.classList.add("recentSearchCity");
    recentSearchCity.appendChild(loadBtn);
    localStorageIndex++;

}



var clearHistoryBtn = document.createElement("a");
clearHistoryBtn.setAttribute("id", "clearHistoryBtn");
clearHistoryBtn.textContent = "Clear History";
recentSearchCity.appendChild(clearHistoryBtn);

clearHistoryBtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";

})



// API Call on search button click
let searchCityBtnHandler = function () {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCityInput.value}&limit=5&appid=16504850b1a264a95e1797ff5a4e056b`)

        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            geoLat = data[0].lat;
            geoLon = data[0].lon;
            cityName = data[0].name;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoLat}&lon=${geoLon}&units=imperial&exclude=&appid=16504850b1a264a95e1797ff5a4e056b`)

                .then(response => response.json())
                // Display weather data
                .then(function (data) {
                    console.log(data);
                    document.getElementById("cityNameDate").textContent = cityName + " " + moment().format("(M/DD/YYYY)");
                    document.getElementById("cityTemp").textContent = "Temp: " + data.current.temp + "\u00B0" + "F";
                    document.getElementById("cityWind").textContent = "Wind: " + data.current.wind_speed + " MPH";
                    document.getElementById("cityHumidity").textContent = "Humidity: " + data.current.humidity + " %";
                    document.getElementById("cityUvIndex").textContent = "UV Index: " + data.current.uvi;



                    var localStorageKey = searchCityInput.value;
                    if (localStorage.length >= 5) {
                        localStorage.removeItem(localStorage.key(0));
                        document.getElementById("recentSearchCity").children[1].remove();
                        localStorage.setItem(localStorageKey, searchCityInput.value);
                        var setBtn = document.createElement("button");
                        setBtn.setAttribute("id", "recentSearchCityBtn" + localStorageIndex);
                        setBtn.classList.add("recentSearchCity");
                        recentSearchCity.appendChild(setBtn);
                        setBtn.textContent = localStorage.getItem(localStorageKey);
                        console.log(localStorageIndex);


                    }

                    // save values to local storage

                    if (localStorageIndex <= 4 && localStorage.getItem(localStorageKey) === null) {
                        localStorage.setItem(localStorageKey, searchCityInput.value);
                        var setBtn = document.createElement("button");
                        setBtn.setAttribute("id", "setBtn" + localStorageIndex);
                        setBtn.classList.add("recentSearchCity");
                        recentSearchCity.appendChild(setBtn);
                        setBtn.textContent = localStorage.getItem(localStorageKey);
                        console.log(localStorageIndex);
                        localStorageIndex++;

                        setBtn.addEventListener("click", function () {
                            searchCityInput.value = this.innerText;
                            searchCityBtnHandler();
                        })

                    }








                    // day 1 Forecast Date
                    document.getElementById("day1ForecastDate").textContent = moment().add(1, 'days').format("M/DD/YYYY");
                    // day 1 Forecast Image
                    var weeklyForecastImage1 = document.getElementById("day1ForecastImage")
                    weeklyForecastImage1.src = "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
                    weeklyForecastImage1.classList.add("weeklyForecastImages");
                    // day 1 Forecast weather info
                    document.getElementById("day1ForecastTemp").textContent = "Temp: " + data.daily[1].temp.day + "\u00B0" + "F";
                    document.getElementById("day1ForecastWind").textContent = "Wind: " + data.daily[1].wind_speed + " MPH";
                    document.getElementById("day1ForecastHumidity").textContent = "Humidity: " + data.daily[1].humidity + " %";



                    // day 2 Forecast Date
                    document.getElementById("day2ForecastDate").textContent = moment().add(2, 'days').format("M/DD/YYYY");
                    // day 2 Forecast Image
                    var weeklyForecastImage2 = document.getElementById("day2ForecastImage")
                    weeklyForecastImage2.src = "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
                    weeklyForecastImage2.classList.add("weeklyForecastImages");
                    // day 2 Forecast weather info
                    document.getElementById("day2ForecastTemp").textContent = "Temp: " + data.daily[2].temp.day + "\u00B0" + "F";
                    document.getElementById("day2ForecastWind").textContent = "Wind: " + data.daily[2].wind_speed + " MPH";
                    document.getElementById("day2ForecastHumidity").textContent = "Humidity: " + data.daily[2].humidity + " %";



                    // day 3 Forecast Date
                    document.getElementById("day3ForecastDate").textContent = moment().add(3, 'days').format("M/DD/YYYY");
                    // day 3 Forecast Image
                    var weeklyForecastImage3 = document.getElementById("day3ForecastImage")
                    weeklyForecastImage3.src = "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
                    weeklyForecastImage3.classList.add("weeklyForecastImages");
                    // day 3 Forecast weather info
                    document.getElementById("day3ForecastTemp").textContent = "Temp: " + data.daily[3].temp.day + "\u00B0" + "F";
                    document.getElementById("day3ForecastWind").textContent = "Wind: " + data.daily[3].wind_speed + " MPH";
                    document.getElementById("day3ForecastHumidity").textContent = "Humidity: " + data.daily[3].humidity + " %";



                    // day 4 Forecast Date
                    document.getElementById("day4ForecastDate").textContent = moment().add(4, 'days').format("M/DD/YYYY");
                    // day 4 Forecast Image
                    var weeklyForecastImage4 = document.getElementById("day4ForecastImage")
                    weeklyForecastImage4.src = "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
                    weeklyForecastImage4.classList.add("weeklyForecastImages");
                    // day 4 Forecast weather info
                    document.getElementById("day4ForecastTemp").textContent = "Temp: " + data.daily[4].temp.day + "\u00B0" + "F";
                    document.getElementById("day4ForecastWind").textContent = "Wind: " + data.daily[4].wind_speed + " MPH";
                    document.getElementById("day4ForecastHumidity").textContent = "Humidity: " + data.daily[4].humidity + " %";



                    // day 5 Forecast Date
                    document.getElementById("day5ForecastDate").textContent = moment().add(5, 'days').format("M/DD/YYYY");
                    // day 5 Forecast Image
                    var weeklyForecastImage5 = document.getElementById("day5ForecastImage")
                    weeklyForecastImage5.src = "http://openweathermap.org/img/w/" + data.daily[5].weather[0].icon + ".png";
                    weeklyForecastImage5.classList.add("weeklyForecastImages");
                    // day 5 Forecast weather info
                    document.getElementById("day5ForecastTemp").textContent = "Temp: " + data.daily[5].temp.day + "\u00B0" + "F";
                    document.getElementById("day5ForecastWind").textContent = "Wind: " + data.daily[5].wind_speed + " MPH";
                    document.getElementById("day5ForecastHumidity").textContent = "Humidity: " + data.daily[5].humidity + " %";


                })
        })

        .catch(err => {
            console.error(err);
            document.getElementById("searchCityInput").value = "Must enter a valid city";
        })

}




searchCityBtn.addEventListener("click", searchCityBtnHandler);



