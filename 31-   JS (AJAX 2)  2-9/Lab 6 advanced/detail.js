// console.log(`hello id`);
// console.log(window.location.href.split("?")[1].split("=")[1]);
let idOfToDoFromIndexHtml = window.location.href.split("?")[1].split("=")[1];
// console.log(idOfToDoFromIndexHtml);
let title = document.getElementById("title");
let id = document.getElementById("id");
let statusOfToDo = document.getElementById("status");
let container = document.getElementById("container");
let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://jsonplaceholder.typicode.com/todos/${idOfToDoFromIndexHtml}`
);
xhr.send();

xhr.onprogress = function () {
  console.log(`loading`);
};
xhr.onload = function () {
  console.log(`data loaded successfully`);
  let data = JSON.parse(xhr.response);
  //   console.log(data);
  title.innerHTML += ` ${data.title}`;
  id.innerHTML += ` ${data.id}`;
  statusOfToDo.innerHTML += ` ${data.completed}`;
  if (data.completed == true) {
    container.style.backgroundColor = "rgba(0, 128, 0, 0.623)";
  } else {
    container.style.backgroundColor = "rgba(240, 14, 14, 0.801)";
  }
};
xhr.onerror = function () {
  console.log(`Error getting Data`);
};
