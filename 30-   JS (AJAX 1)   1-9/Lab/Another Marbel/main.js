let imgs = document.querySelectorAll("img");
let contOfImgs = document.getElementById("contOfImgs");
// console.log(contOfImgs);
let counter = 0;
let constMarbel = `./marble1.jpg`;
let movingMarbel = `./marble3.jpg`;
let imgsInterval = setInterval(movingPic, 1000);
function movingPic() {
  imgs[counter].src = constMarbel;
  counter++;
  if (counter == imgs.length) {
    counter = 0;
  }
  imgs[counter].src = movingMarbel;
}

contOfImgs.addEventListener("mouseover", clearMarbelInterval);
contOfImgs.addEventListener("mouseout", playMarbelInterval);

function clearMarbelInterval() {
  clearInterval(imgsInterval);
}
function playMarbelInterval() {
  imgsInterval = setInterval(movingPic, 1000);
}
