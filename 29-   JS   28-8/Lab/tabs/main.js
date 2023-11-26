let tab1Btn = document.getElementById("tab1Btn");
let tab2Btn = document.getElementById("tab2Btn");
// let container = document.getElementById("container");
let tabContent = document.getElementById("tabContent");
// let eabElement =
console.log(tab1Btn);
console.log(tab2Btn);
tab1Btn.addEventListener("click", function () {
  tabContent.innerHTML = `Tab 1`;
});
tab2Btn.addEventListener("click", function () {
  tabContent.innerHTML = `Tab 2`;
});
