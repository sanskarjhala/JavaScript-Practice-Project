const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather");

searchBtn.addEventListener("click" , () => {
    fecthWeather(searchBox.value);
})

async function fecthWeather(cityname){

 try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    // console.log(data)
    if (data?.cod === '404') {
       throw "city not found "
    }

    renderWeather(data);
 }
 catch(e){
    alert("city not found");
 }
}

function renderWeather(data){

    const weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    

    document.querySelector(".temp").innerHTML= `${data?.main?.temp} °C`;
    document.querySelector(".city").innerHTML = data?.name;
    document.querySelector(".humidity").innerHTML = `${data?.main?.humidity}%`;
    document.querySelector(".wind-speed").innerHTML = `${data?.wind?.speed} m/s`

    weatherContainer.classList.add("active");
}