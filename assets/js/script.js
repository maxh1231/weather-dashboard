// key 16504850b1a264a95e1797ff5a4e056b

// api call https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=&appid=16504850b1a264a95e1797ff5a4e056b



fetch("http://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=5&appid=16504850b1a264a95e1797ff5a4e056b")

    .then(response => response.json())

    .then(function (data) {
        console.log(data);
        geoLat = data[0].lat;
        geoLon = data[0].lon;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoLat}&lon=${geoLon}&exclude=&appid=16504850b1a264a95e1797ff5a4e056b`)

            .then(response => response.json())

            .then(function (data) {
                console.log(data);
            })
    })