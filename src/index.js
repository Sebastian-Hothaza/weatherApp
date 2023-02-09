const API_KEY = 'b72b99ebd46cd4ae88f7abb450d3662b';
let location = 'kitchener,ca';


const widgetLocation = document.getElementById('location');
const widgetIcon = document.getElementById('weatherIcon');
const widgetWeatherDesc = document.getElementById('weatherDesc');
const widgetCurrentTemp = document.getElementById('currentTemp');
const widgetFeelTemp = document.getElementById('feelTemp');
const widgetWind = document.getElementById('wind');

const searchLocation = document.getElementById('searchForm');

const errorMsg = document.getElementById('errorMsg');


// API GUIDE: https://openweathermap.org/current
// http://api.openweathermap.org/data/2.5/weather?q=kitchener,ca&units=metric&APPID=b72b99ebd46cd4ae88f7abb450d3662b

async function getWeather(){
    // Fetch returns a promise. We need 2 awaits; 1 to get the API data and a second to call the json method upon
    const response = await (await fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&APPID='+API_KEY, {mode: 'cors'})).json();
 
    //TODO: ERROR HANDLING!
    if (response.cod === '404'){
        console.log("ERROR: "+response.message)
        errorMsg.style.display = 'block';
    }else{
        processData(response);
        errorMsg.style.display = 'none';
    }
    
}



function processData(weatherData){
    widgetLocation.innerText = weatherData.name + ', ' + weatherData.sys.country;
    widgetIcon.src = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@4x.png";
    widgetWeatherDesc.innerText = weatherData.weather[0].description[0].toUpperCase() + weatherData.weather[0].description.slice(1);
    widgetCurrentTemp.innerText = Math.round(weatherData.main.temp) + '°C Current';
    widgetFeelTemp.innerText = Math.round(weatherData.main.feels_like) + '°C Feels Like';
    widgetWind.innerText = Math.round(weatherData.wind.speed) + 'km/h Wind';
}


getWeather();


searchLocation.addEventListener('submit', processSearch);

// Process search; no guarantee search is valid!
function processSearch(){
    const formText = document.getElementById('formText');
    location = formText.value;
    formText.value = '';
    getWeather();
}