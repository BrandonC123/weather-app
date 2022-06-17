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
        } catch {}
    }
    getWeatherObject("sacramento");
})();

const displayHandler = (() => {})();
