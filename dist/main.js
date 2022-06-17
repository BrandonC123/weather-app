/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class WeatherDetails {\r\n    constructor(location, temperature, feelsLike, description, windSpeed) {\r\n        this.location = location;\r\n        this.temperature = temperature;\r\n        this.feelsLike = feelsLike;\r\n        this.description = description;\r\n        this.windSpeed = windSpeed;\r\n    }\r\n}\r\n\r\nconst apiHandler = (() => {\r\n    let apiKey = \"64f4fcc93c0bc1f768c0f50576f0239a\";\r\n    async function getWeatherObject(city) {\r\n        try {\r\n            const data = await fetch(\r\n                `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,\r\n                { mode: \"cors\" }\r\n            );\r\n            const response = await data.json();\r\n            const weather = new WeatherDetails(\r\n                response.name,\r\n                response.main.temp,\r\n                response.main.feels_like,\r\n                response.weather[0].description,\r\n                response.wind.speed\r\n            );\r\n\r\n            console.log(weather);\r\n            getWeatherForecast(city);\r\n            return weather;\r\n        } catch (error) {\r\n            console.log(error);\r\n            alert(\"City not found\");\r\n        }\r\n    }\r\n    async function getWeatherForecast(city) {\r\n        try {\r\n            const forecastData = await fetch(\r\n                `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&APPID=${apiKey}`,\r\n                { mode: \"cors\" }\r\n            );\r\n            const forecast = await forecastData.json();\r\n            console.log(forecast);\r\n        } catch (error) {\r\n            console.log(error);\r\n        }\r\n    }\r\n    return {\r\n        getWeatherObject,\r\n        getWeatherForecast,\r\n    };\r\n})();\r\n\r\nconst displayHandler = (() => {\r\n    function fillCurrentWeatherCard(weatherDetails) {\r\n        console.log(weatherDetails);\r\n        document.querySelector(\".current-weather-location\").textContent =\r\n            weatherDetails.location;\r\n        document.querySelector(\".current-weather-temp\").textContent =\r\n            weatherDetails.temperature;\r\n        document.querySelector(\".current-weather-feels-like\").textContent =\r\n            weatherDetails.feelsLike;\r\n        document.querySelector(\".current-weather-description\").textContent =\r\n            weatherDetails.description;\r\n        document.querySelector(\".current-weather-wind-speed\").textContent =\r\n            weatherDetails.windSpeed;\r\n    }\r\n    apiHandler.getWeatherObject(\"sacramento\").then((response) => {\r\n        fillCurrentWeatherCard(response);\r\n    });\r\n    document\r\n        .querySelector(\".location-search-btn\")\r\n        .addEventListener(\"click\", function () {\r\n            apiHandler\r\n                .getWeatherObject(\r\n                    document.getElementById(\"location-search-bar\").value\r\n                )\r\n                .then((response) => {\r\n                    fillCurrentWeatherCard(response);\r\n                });\r\n        });\r\n    return {\r\n        fillCurrentWeatherCard,\r\n    };\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;