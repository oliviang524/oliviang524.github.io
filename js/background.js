const images = [
    {img : "image/0.jpg", url : "https://www.freepik.com/free-photo/3d-render-tree-landscape-against-night-sky_1117987.htm#page=2&query=galaxy%20background&position=46&from_view=keyword", author : "kjpargeter"},
    {img : "image/1.jpg", url : "https://kr.freepik.com/free-vector/stars-on-a-gradient-night-sky_5376548.htm#query=galaxy%20background&position=38&from_view=keyword", author : "Freepik"},
    {img : "image/2.jpg", url : "https://kr.freepik.com/free-vector/realistic-galaxy-background_4665545.htm#query=galaxy%20background&position=0&from_view=keyword", author : "pikisuperstar"},
    {img : "image/3.jpg", url : "https://kr.freepik.com/free-vector/falling-stars-on-a-beautiful-night-background_5376553.htm#query=galaxy%20background&position=1&from_view=keyword", author : "Freepik"}
];

const author = document.querySelector("#author");
const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('${randomImage.img}')`;
author.href = randomImage.url;
author.innerHTML = randomImage.author;