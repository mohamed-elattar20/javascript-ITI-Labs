let selection = document.createElement("select");
selection.setAttribute("name", "status");
selection.setAttribute("id", "toDo");

let optionReset = document.createElement("option");
optionReset.setAttribute("value", "reset");
optionReset.innerHTML = `reset`;

let optionComplete = document.createElement("option");
optionComplete.setAttribute("value", "complete");
optionComplete.innerHTML = `complete`;

let optionNotComplete = document.createElement("option");
optionNotComplete.setAttribute("value", "notComplete");
optionNotComplete.innerHTML = `Not Completed`;

selection.append(optionReset, optionComplete, optionNotComplete);

document.body.append(selection);

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhr.send();

xhr.onprogress = function () {
  console.log(`loading`);
};
xhr.onerror = function () {
  console.log(`error getting Data`);
};

xhr.onload = function () {
  console.log(`data recieved`);
  let data = JSON.parse(xhr.response);
  // console.log(data);
  data = Array.from(data).slice(0, 200);
  showToDos(data);

  selection.addEventListener("change", function () {
    let selectVal = selection.value;
    // console.log(selectVal);
    checkSelectVal(selectVal, data);
  });
};
function checkSelectVal(valOfSelection, arrOfData) {
  // console.log(valOfSelection);
  if (valOfSelection == "reset") {
    showToDos(arrOfData);
  } else if (valOfSelection == "complete") {
    let arrOfCompleted = [];
    arrOfData.forEach((toDoCompleted) => {
      if (toDoCompleted.completed == true) {
        arrOfCompleted.push(toDoCompleted);
      }
    });
    showToDos(arrOfCompleted);
  } else if (valOfSelection == "notComplete") {
    let arrOfNotCompleted = [];
    arrOfData.forEach((toDoNotCompleted) => {
      if (toDoNotCompleted.completed == false) {
        arrOfNotCompleted.push(toDoNotCompleted);
      }
    });
    showToDos(arrOfNotCompleted);
  }
}

function showToDos(arrOfToDos) {
  document.body.innerHTML = "";
  document.body.append(selection);
  // console.log(arrOfToDos);
  arrOfToDos.forEach((toDo) => {
    toDoData = document.createElement("h2");
    toDoData.style.padding = "10px";
    toDoData.style.borderRadius = "5px";

    // creating form to send data through it to the detailes page
    let formToRedirect = document.createElement("form");
    formToRedirect.setAttribute("method", "get");
    formToRedirect.setAttribute("action", "detailes.html");
    // formToRedirect.addEventListener("submit", function (e) {
    //   // e.preventDefault();
    //   // console.log(`Hello my ToDo id : ${toDo.id}`);
    // });

    let inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", "submit");
    inputBtn.setAttribute("name", "id");
    inputBtn.setAttribute("value", `${toDo.id}`);
    formToRedirect.append(inputBtn);

    if (toDo.completed == true) {
      toDoData.style.backgroundColor = "rgba(0, 128, 0, 0.623)";
    } else {
      toDoData.style.backgroundColor = "rgba(240, 14, 14, 0.801)";
    }
    toDoData.innerHTML = `id : ${toDo.id} ,
         title : ${toDo.title} , completed : ${toDo.completed} `;
    toDoData.append(formToRedirect);
    document.body.append(toDoData);
  });
}
