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

eval("class WeatherDetails {\r\n    constructor(location, temperature, feelsLike, description, windSpeed) {\r\n        this.location = location;\r\n        this.temperature = temperature;\r\n        this.feelsLike = feelsLike;\r\n        this.description = description;\r\n        this.windSpeed = windSpeed;\r\n    }\r\n}\r\n\r\nconst apiHandler = (() => {\r\n    let apiKey = \"64f4fcc93c0bc1f768c0f50576f0239a\";\r\n    async function getWeatherObject(city) {\r\n        try {\r\n            const data = await fetch(\r\n                `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,\r\n                { mode: \"cors\" }\r\n            );\r\n            const response = await data.json();\r\n            const weather = new WeatherDetails(\r\n                response.name,\r\n                response.main.temp,\r\n                response.main.feels_like,\r\n                response.weather[0].description,\r\n                response.wind.speed\r\n            );\r\n            console.log(weather);\r\n        } catch {}\r\n    }\r\n    getWeatherObject(\"sacramento\");\r\n})();\r\n\r\nconst displayHandler = (() => {})();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

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