class WeatherDetails {
    constructor(location, temperature, feelsLike, description, windSpeed) {
        this.location = location;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.description = description;
        this.windSpeed = windSpeed;
    }
}

const apiHandler = (() => {
    let apiKey = "64f4fcc93c0bc1f768c0f50576f0239a";
    async function getWeatherObject(city) {
        try {
            const data = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
                { mode: "cors" }
            );
            const response = await data.json();
            const weather = new WeatherDetails(
                response.name,
                response.main.temp,
                response.main.feels_like,
                response.weather[0].description,
                response.wind.speed
            );

            console.log(weather);
            getWeatherForecast(city);
            return weather;
        } catch (error) {
            console.log(error);
            alert("City not found");
        }
    }
    async function getWeatherForecast(city) {
        try {
            const forecastData = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&APPID=${apiKey}`,
                { mode: "cors" }
            );
            const forecast = await forecastData.json();
            console.log(forecast);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        getWeatherObject,
        getWeatherForecast,
    };
})();

const displayHandler = (() => {
    function fillCurrentWeatherCard(weatherDetails) {
        console.log(weatherDetails);
        document.querySelector(".current-weather-location").textContent =
            weatherDetails.location;
        document.querySelector(".current-weather-temp").textContent =
            weatherDetails.temperature;
        document.querySelector(".current-weather-feels-like").textContent =
            weatherDetails.feelsLike;
        document.querySelector(".current-weather-description").textContent =
            weatherDetails.description;
        document.querySelector(".current-weather-wind-speed").textContent =
            weatherDetails.windSpeed;
    }
    apiHandler.getWeatherObject("sacramento").then((response) => {
        fillCurrentWeatherCard(response);
    });
    document
        .querySelector(".location-search-btn")
        .addEventListener("click", function () {
            apiHandler
                .getWeatherObject(
                    document.getElementById("location-search-bar").value
                )
                .then((response) => {
                    fillCurrentWeatherCard(response);
                });
        });
    return {
        fillCurrentWeatherCard,
    };
})();
