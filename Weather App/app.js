const API_KEY = `a8a520819143cc724c4a1df2546eb6d2`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<H2>Loading...</h2>`;// its show "Loading" before api calling
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);//
    // console.log(response); 
    const wData = await response.json();
    // console.log(data);
    return showWeather(wData);


}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<H2>City Not Found </h2>`;
        return
    }
    // console.log(data);
    weather.innerHTML = `
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].main}</h4>
    </div>`;
}

form.addEventListener("submit",
    function (event) {
        getWeather(search.value);
        event.preventDefault();
    }
)