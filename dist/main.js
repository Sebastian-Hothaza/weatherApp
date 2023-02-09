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

eval("const API_KEY = 'b72b99ebd46cd4ae88f7abb450d3662b';\nlet location = 'Toronto,ca';\n\n\nconst widgetLocation = document.getElementById('location');\nconst widgetIcon = document.getElementById('weatherIcon');\nconst widgetWeatherDesc = document.getElementById('weatherDesc');\nconst widgetCurrentTemp = document.getElementById('currentTemp');\nconst widgetFeelTemp = document.getElementById('feelTemp');\nconst widgetWind = document.getElementById('wind');\n\nconst searchLocation = document.getElementById('searchForm');\n\nconst errorMsg = document.getElementById('errorMsg');\n\nsearchLocation.addEventListener('submit', processSearch);\n\ngetWeather();\n\n\n// API GUIDE: https://openweathermap.org/current\n// http://api.openweathermap.org/data/2.5/weather?q=kitchener,ca&units=metric&APPID=b72b99ebd46cd4ae88f7abb450d3662b\n\nasync function getWeather(){\n    // Fetch returns a promise. We need 2 awaits; 1 to get the API data and a second to call the json method upon\n    const response = await (await fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&APPID='+API_KEY, {mode: 'cors'})).json();\n \n    //TODO: ERROR HANDLING!\n    if (response.cod === '404'){\n        console.log(\"ERROR: \"+response.message)\n        errorMsg.style.display = 'block';\n    }else{\n        processData(response);\n        errorMsg.style.display = 'none';\n    }\n    \n}\n\n\n\nfunction processData(weatherData){\n    widgetLocation.innerText = weatherData.name + ', ' + weatherData.sys.country;\n    widgetIcon.src = \"http://openweathermap.org/img/wn/\"+weatherData.weather[0].icon+\"@4x.png\";\n    widgetWeatherDesc.innerText = weatherData.weather[0].description[0].toUpperCase() + weatherData.weather[0].description.slice(1);\n    widgetCurrentTemp.innerText = Math.round(weatherData.main.temp) + '°C';\n    widgetFeelTemp.innerText = Math.round(weatherData.main.feels_like) + '°C';\n    widgetWind.innerText = Math.round(weatherData.wind.speed) + 'km/h';\n    loadbk(weatherData.weather[0].id);\n}\n\n// Given an id, loads the appropriate bk\n/*\n2- Thunderstorm\n3- Drizzle\n5- Rain\n6- Snow\n7- Mist/Haze\n8- Clear\n*/\nfunction loadbk(id){\n    switch(parseInt(id.toString()[0])){\n        case 2:\n            document.body.style.backgroundImage = \"url(images/bk/thunderstorm.jpeg)\" ;\n            break;\n        case 3:\n            document.body.style.backgroundImage = \"url(images/bk/rain.jpg)\" ;\n            break;\n        case 5:\n            document.body.style.backgroundImage = \"url(images/bk/rain.jpg)\" ;\n            break;\n        case 6:\n            document.body.style.backgroundImage = \"url(images/bk/snow.jpg)\" ;\n            break;\n        case 7:\n            document.body.style.backgroundImage = \"url(images/bk/mist.jpg)\" ;\n            break;\n        case 8:\n            if (id == 800){\n                document.body.style.backgroundImage = \"url(images/bk/sun.jpg)\" ;\n            }else{\n                document.body.style.backgroundImage = \"url(images/bk/cloud.jpg)\" ;\n            }\n            break;\n        default:\n            document.body.style.backgroundColor = 'blue' ;\n    } \n    \n    document.body.style.backgroundSize = \"cover\" ;\n}\n\n\n\n\n\n\n\n// Process search; no guarantee search is valid!\nfunction processSearch(){\n    const formText = document.getElementById('formText');\n    location = formText.value;\n    formText.value = '';\n    getWeather();\n}\n\n\n//# sourceURL=webpack://global/./src/index.js?");

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