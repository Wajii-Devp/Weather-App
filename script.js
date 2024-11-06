
var cityElement = document.getElementById('city-name');
var temp = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var windspeed = document.getElementById('wind-speed');
var searchbtn = document.getElementById('search-btn');
var search = document.getElementById('searchinput');
var bodyimage = document.getElementById('images');
var weather = document.getElementById('weather');


async function checkweather(city) {
    let apikey = "5fc5a163913b35eedc7d957d90a21107";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    cityElement.innerHTML = data.name;
temp.innerHTML =Math.floor(data.main.temp - 273.15) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = data.wind.speed + " m/s";
    weather.style.display = 'block';
}

searchbtn.addEventListener("click", function(){
    checkweather(search.value);
})


