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

                .then(function (data) {
                    console.log(data);
                    document.getElementById("cityNameDate").textContent = cityName + " " + moment().format("(M/DD/YYYY)");
                    document.getElementById("cityTemp").textContent = "Temp: " + data.current.temp + "\u00B0" + "F";
                    document.getElementById("cityWind").textContent = "Wind: " + data.current.wind_speed + " MPH";
                    document.getElementById("cityHumidity").textContent = "Humidity: " + data.current.humidity + " %";
                    document.getElementById("cityUvIndex").textContent = "UV Index: " + data.current.uvi;


                    var localStorageKey = searchCityInput.value;
                    if (localStorageIndex <= 4 && localStorage.getItem(localStorageKey) === null) {
                        localStorage.setItem(localStorageKey, searchCityInput.value);
                        var setBtn = document.createElement("button");
                        setBtn.classList.add("recentSearchCity");
                        recentSearchCity.appendChild(setBtn);
                        setBtn.textContent = localStorage.getItem(localStorageKey);
                        console.log(localStorageIndex);
                        localStorageIndex++;
                    }

                })



        })

        .catch(err => {
            console.error(err);
            document.getElementById("searchCityInput").value = "Must enter a valid city";
        })


    // recentSearches();
}

// let recentSearches = function () {

//     var localStorageKey = searchCityInput.value;
//     if (localStorageIndex <= 4 && localStorage.getItem(localStorageKey) === null) {
//         localStorage.setItem(localStorageKey, searchCityInput.value);
//         var setBtn = document.createElement("button");
//         setBtn.classList.add("recentSearchCity");
//         recentSearchCity.appendChild(setBtn);
//         setBtn.textContent = localStorage.getItem(localStorageKey);
//         console.log(localStorageIndex);
//         localStorageIndex++;
//     }

// }

searchCityBtn.addEventListener("click", searchCityBtnHandler);



