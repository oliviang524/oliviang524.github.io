const API_KEY = "21d309956248cd4c158d99093a82b61a";
function successFunc(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = `${data.name}, `;
        weather.innerText = `${data.weather[0].main} / ${Math.ceil(data.main.temp)}℃`;
    })
}
function errorFunc(error){
    if(error.code == 1){
        weather.innerHTML = "위치정보 제공 동의를 하시면 날씨와 온도를 확인할 수 있습니다.";
    }
}
navigator.geolocation.getCurrentPosition(successFunc, errorFunc);