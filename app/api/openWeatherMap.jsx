var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a6a84bf15e98b69f78bba0d7eb562a86&units=metric';

//q=lviv
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios
            .get(requestUrl)
            .then(function (res) {
                debugger;

                return res.data.main.temp;

            }, function (res) {
                throw  new Error(res.data.message);
            })


    }

}