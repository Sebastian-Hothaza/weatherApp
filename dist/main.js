/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var global;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API_KEY = 'b72b99ebd46cd4ae88f7abb450d3662b';\nlet location = 'kitchener,ca';\n\n\nconst widgetLocation = document.getElementById('location');\nconst widgetIcon = document.getElementById('weatherIcon');\nconst widgetWeatherDesc = document.getElementById('weatherDesc');\nconst widgetCurrentTemp = document.getElementById('currentTemp');\nconst widgetFeelTemp = document.getElementById('feelTemp');\nconst widgetWind = document.getElementById('wind');\n\nconst searchLocation = document.getElementById('searchForm');\n\nconst errorMsg = document.getElementById('errorMsg');\n\n\n// API GUIDE: https://openweathermap.org/current\n// http://api.openweathermap.org/data/2.5/weather?q=kitchener,ca&units=metric&APPID=b72b99ebd46cd4ae88f7abb450d3662b\n\nasync function getWeather(){\n    // Fetch returns a promise. We need 2 awaits; 1 to get the API data and a second to call the json method upon\n    const response = await (await fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&APPID='+API_KEY, {mode: 'cors'})).json();\n \n    //TODO: ERROR HANDLING!\n    if (response.cod === '404'){\n        console.log(\"ERROR: \"+response.message)\n        errorMsg.style.display = 'block';\n    }else{\n        processData(response);\n        errorMsg.style.display = 'none';\n    }\n    \n}\n\n\n\nfunction processData(weatherData){\n    widgetLocation.innerText = weatherData.name + ', ' + weatherData.sys.country;\n    widgetIcon.src = \"http://openweathermap.org/img/wn/\"+weatherData.weather[0].icon+\"@4x.png\";\n    widgetWeatherDesc.innerText = weatherData.weather[0].description[0].toUpperCase() + weatherData.weather[0].description.slice(1);\n    widgetCurrentTemp.innerText = Math.round(weatherData.main.temp) + '°C Current';\n    widgetFeelTemp.innerText = Math.round(weatherData.main.feels_like) + '°C Feels Like';\n    widgetWind.innerText = Math.round(weatherData.wind.speed) + 'km/h Wind';\n}\n\n\ngetWeather();\n\n\nsearchLocation.addEventListener('submit', processSearch);\n\n// Process search; no guarantee search is valid!\nfunction processSearch(){\n    const formText = document.getElementById('formText');\n    location = formText.value;\n    formText.value = '';\n    getWeather();\n}\n\n//# sourceURL=webpack://global/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	global = __webpack_exports__;
/******/ 	
/******/ })()
;