let header = document.querySelector("#header");
// console.log(header);
header.style.textAlign = "right";
let liS = document.querySelectorAll("li");
let nav = document.querySelector("#nav");
nav.style.listStyleType = "none";
// console.log(nav);
let body = document.querySelector("body");
body.innerHTML += `<img src="dom.jpg" alt="hello..it rains over here:)" />`;

//Another Solution
// console.log(liS);
// for (let i = 0; i < liS.length; i++) {
//   liS[i].style.listStyleType = "none";
// }
