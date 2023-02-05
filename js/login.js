const NAME = "name";
const HIDDEN = "hidden";
const loginForm = document.querySelector("#loginForm");
const loginDiv = document.querySelector("#loginDiv");
const logoutDiv = document.querySelector("#logoutDiv");
const greeting1 = document.querySelector("#greeting-1");
const greeting2 = document.querySelector("#greeting-2");

greetingEvent();

function greetingEvent(){
    const loginName = localStorage.getItem(NAME);
    if(loginName !== null && loginName !== ""){
        logoutDiv.classList.add(HIDDEN);
        greeting2.innerText = `${loginName}님 만나서 반갑습니다!`;
        loginDiv.classList.remove(HIDDEN);
    }else{
        loginDiv.classList.add(HIDDEN);
        greeting1.innerText = "안녕하세요, 당신의 이름은 무엇인가요?";
        logoutDiv.classList.remove(HIDDEN);
    }
}

function login(event){
    event.preventDefault();
    const name = document.querySelector("#" + NAME).value;
    localStorage.setItem(NAME, name);
    greetingEvent();
}
loginForm.addEventListener("submit", login);