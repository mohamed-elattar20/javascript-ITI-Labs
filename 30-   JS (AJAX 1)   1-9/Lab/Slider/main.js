let sliderImg = document.querySelector(`#sliderImg`);
let nextBtn = document.querySelector("#nextBtn");
let previousBtn = document.querySelector("#previousBtn");
// console.log(sliderImg.src);
// console.log(nextBtn);
// console.log(previousBtn);
let imgInterval;
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");

let counter = 1;
playBtn.addEventListener("click", function () {
  // var counter = 1;
  imgInterval = setInterval(() => {
    if (counter < 6) {
      counter++;
      // console.log(counter);
      sliderImg.src = `./${counter}.jpg`;
    } else {
      counter = 1;
      sliderImg.src = `./${counter}.jpg`;
      counter++;
      // console.log(counter);
    }
  }, 1000);
  playBtn.setAttribute("disabled", "");
});
stopBtn.addEventListener("click", function () {
  clearInterval(imgInterval);
  playBtn.removeAttribute("disabled", "");
});

nextBtn.addEventListener("click", function () {
  if (counter < 6) {
    counter++;
    sliderImg.src = `./${counter}.jpg`;
  }
  // console.log(counter);
});

previousBtn.addEventListener("click", function () {
  if (counter > 1) {
    counter--;
    sliderImg.src = `./${counter}.jpg`;
  }
  // console.log(counter);
});
