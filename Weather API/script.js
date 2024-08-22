const apiKey = "enter_your_api_key_here";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
if (response.status == 404) {
    alert('Enter a valid city name')
}

else{
let data = await response.json();

// console.log(data)
document.querySelector(".city").innerHTML = data.name
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if (data.weather[0].main == "Clouds") {
weatherIcon.src = "images/clouds.png"
}
else if (data.weather[0].main == "Rain") {
weatherIcon.src = "images/rain.png"

}

else if (data.weather[0].main == "Clear") {
weatherIcon.src = "images/clear.png"
}

else if (data.weather[0].main == "Drizzle") {
weatherIcon.src = "images/drizzle.png"

}

else if (data.weather[0].main == "Mist") {
weatherIcon.src = "images/mist.png"

}
else if (data.weather[0].main == "snow") {
weatherIcon.src = "images/snow.png"

}
}
}

checkWeather("Jodhpur")

searchtn.addEventListener('click',()=> {
checkWeather(searchBox.value);
searchBox.value = '';
})
