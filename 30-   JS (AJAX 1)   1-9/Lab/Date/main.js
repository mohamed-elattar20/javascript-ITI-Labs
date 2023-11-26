let date = new Date();

let todayDate = document.getElementById("todayDate");
let todayCurrentTime = document.getElementById("todayCurrentTime");
// console.log(todayDate);
todayDate.innerHTML = `date of today is : ${date.toDateString()}`;
todayCurrentTime.innerHTML = `current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
