// key 16504850b1a264a95e1797ff5a4e056b

// api call https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=&appid=16504850b1a264a95e1797ff5a4e056b

// Variables

var searchCityInput = document.getElementById("searchCityInput");
var searchCityBtn = document.getElementById("searchCityBtn");




searchCityBtn.addEventListener("click", function () {

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
                    document.getElementById("cityUvIndex").textContent = "UV Index: " + data.current.uvi;;

                })
        })

})


