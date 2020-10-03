const request  = require("request");


const forecast = (lat, long, callback) => {
    const WeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f1cbb9ec5e5062bdbe004f97ea3de544`;

    request({url: WeatherURL, json: true}, (error, response) =>{
        if(error){
            callback("Unable to connect to network", undefined);
        }
        else if(response.body.message){
            callback("Please provide a valid address", undefined);
        }
        else{
            callback(undefined, `${response.body.weather[0].description}. the temprature is ${response.body.main.temp}`);
        }
    });
}

module.exports = forecast;
