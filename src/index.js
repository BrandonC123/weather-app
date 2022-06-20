class WeatherDetails {
    constructor(
        location,
        temperature,
        feelsLike,
        condition,
        description,
        windSpeed
    ) {
        this.location = location;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.condition = condition;
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
                response.weather[0].main,
                response.weather[0].description,
                response.wind.speed
            );
            return weather;
        } catch (error) {
            console.log(error);
            alert("City not found");
        }
    }
    return {
        getWeatherObject,
    };
})();
const displayHandler = (() => {
    function fillCurrentWeatherCard(weatherDetails) {
        if (weatherDetails !== undefined) {
            const iconImg = document.querySelector(".current-weather-icon");
            document.querySelector(".current-weather-location").textContent =
                weatherDetails.location;
            document.querySelector(".current-weather-temp").textContent =
                convertTempFarenheit(weatherDetails.temperature);
            document.querySelector(".current-weather-feels-like").textContent =
                "Feels like " + convertTempFarenheit(weatherDetails.feelsLike);
            document.querySelector(".current-weather-description").textContent =
                weatherDetails.description;
            document.querySelector(".current-weather-wind-speed").textContent =
                "Wind speed: " + weatherDetails.windSpeed + " mph";
            const condition = weatherDetails.condition;
            switch (condition.toLowerCase()) {
                case "thunderstorm":
                    iconImg.src = "../dist/img/thunderstorm-icon.svg";
                    break;
                case "drizzle":
                    iconImg.src = "../dist/img/drizzle-icon.svg";
                    break;
                case "rain":
                    iconImg.src = "../dist/img/rain-icon.svg";
                    break;
                case "snow":
                    iconImg.src = "../dist/img/snow-icon.svg";
                    break;
                case "clouds":
                    iconImg.src = "../dist/img/cloud-icon.svg";
                    break;
                case "clear":
                    iconImg.src = "../dist/img/sun-icon.svg";
                    break;
            }
        }
    }

    function convertTempFarenheit(temp) {
        let newTemp = 1.8 * (temp - 273) + 32;
        return `${Math.round(newTemp)}° F`;
    }
    function convertTempCelsius(temp) {
        let newTemp = temp - 273.15;
        return `${Math.round(newTemp)}° C`;
    }
    function searchWeather() {
        const searchValue = document.getElementById(
            "location-search-bar"
        ).value;
        apiHandler.getWeatherObject(searchValue).then((response) => {
            fillCurrentWeatherCard(response);
        });
    }
    apiHandler.getWeatherObject("sacramento").then((response) => {
        fillCurrentWeatherCard(response);
    });
    document
        .querySelector(".location-search-btn")
        .addEventListener("click", function () {
            searchWeather();
        });
    document
        .getElementById("location-search-bar")
        .addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                searchWeather();
            }
        });

    return {
        fillCurrentWeatherCard,
    };
})();

// function fillForecast(forecastList) {
//     for (let i = 0; i < forecastList.length; i++) {
//         const forecastCard = document.createElement("div");
//         forecastCard.classList.add("card");
//         const forecastDate = document.createElement("p");
//         const forecastTemp = document.createElement("p");
//         const forecastDescription = document.createElement("p");

//         forecastDate.textContent = forecastList[i].dt_txt;
//         forecastTemp.textContent = forecastList[i].main.temp;
//         forecastDescription.textContent =
//             forecastList[i].weather[0].description;

//         forecastCard.append(
//             forecastDate,
//             forecastTemp,
//             forecastDescription
//         );
//         document
//             .querySelector(".forecast-container")
//             .appendChild(forecastCard);
//     }
// }

// async function getWeatherForecast(city) {
//     try {
//         const forecastData = await fetch(
//             `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&APPID=${apiKey}`,
//             { mode: "cors" }
//         );
//         const forecast = await forecastData.json();
//         return forecast;
//     } catch (error) {
//         console.log(error);
//     }
// }
