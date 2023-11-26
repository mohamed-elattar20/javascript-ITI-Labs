let sliderImg = document.querySelector(`#sliderImg`);
let nextBtn = document.querySelector("#nextBtn");
let previousBtn = document.querySelector("#previousBtn");
// console.log(sliderImg.src);
// console.log(nextBtn);
// console.log(previousBtn);

var counter = 1;
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
