const clock = document.querySelector("#clock");
const ZERO = "0";
realTime();
function realTime(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, ZERO);
    const minute = String(date.getMinutes()).padStart(2, ZERO);
    const second = String(date.getSeconds()).padStart(2, ZERO);
    clock.innerHTML = `${hour}:${minute}:${second}`;
}
setInterval(realTime, 1000);