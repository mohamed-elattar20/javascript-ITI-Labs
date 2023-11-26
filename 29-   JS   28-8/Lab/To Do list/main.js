let toDoList = document.getElementById("toDoList");
// console.log(toDoList);
let arrOfTasks = [];
inputField.focus();
//  Showing Tasks Functionality
function showTasks(taskObj) {
  let listItem = document.createElement("li");
  let checkboxField = document.createElement("input");
  checkboxField.setAttribute("type", "checkbox");

  let taskTitle = document.createElement("h2");
  taskTitle.innerHTML = taskObj.taskName;
  taskTitle.setAttribute("class", "taskTitle");

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "btnDelete");
  deleteBtn.innerHTML = `Delete`;
  listItem.append(checkboxField, taskTitle, deleteBtn);

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
  let clearAllBtn = document.getElementById("clearAllBtn");

  clearAllBtn.addEventListener("click", function () {
    listItem.remove();
    clearAllBtn.style.display = "none";
    // console.log(arrOfTasks);
  });

  checkboxField.addEventListener("click", () => {
    if (checkboxField.checked == true) {
      taskTitle.style.textDecoration = "line-through";
      listItem.style.opacity = 0.7;
      listItem.style.backgroundColor = "light";
    } else {
      taskTitle.style.textDecoration = "none";
      listItem.style.opacity = 1.0;
      listItem.style.backgroundColor = "none";
    }
  });
  arrOfTasks.push(taskObj);

  if (arrOfTasks.length != 0) {
    clearAllBtn.style.display = "block";
    for (var i = 0; i < arrOfTasks.length; i++) {
      toDoList.append(listItem);
      // console.log(listItem);
    }
  }
}
//  Adding Tasks Functionality
var tasks = {};
let taskIdCounter = 0;
addBtn.addEventListener("click", function () {
  if (inputField.value.trim() != "" && inputField.length != 0) {
    tasks = {
      taskId: ++taskIdCounter,
      taskName: inputField.value,
    };
    showTasks(tasks);
    inputField.value = "";
    inputField.focus();
    // console.log(arrOfTasks);
  }
});

//****************************************************
// V2
// function showTasks(arrOfTasks) {
//   if (arrOfTasks) {
//     clearAllBtn.style.display = "inline";
//     let str = "";
//     for (var i = 0; i < arrOfTasks.length; i++) {
//       str += `
//           <li>
//           <input type="checkbox" id="checkBtn" />
//           <h2 class = "taskTitle">${arrOfTasks[i].taskName}</h2>
//           <button onClick="deleteToDo(${arrOfTasks[i].taskId})" id="btnDelete">Delete</button>
//           </li>`;
//     }
//     toDoList.innerHTML = str;
//   } else {
//     clearAllBtn.style.display = "none";
//   }
// }

// addBtn.addEventListener("click", function () {
//   if (inputField.value.trim() != "" && inputField.length != 0) {
//     var tasks = {
//       taskId: arrOfTasks == 0 ? 1 : arrOfTasks.length + 1,
//       taskName: inputField.value,
//     };
//     arrOfTasks.push(tasks);
//     showTasks(arrOfTasks);
//     inputField.value = "";
//     inputField.focus();
//     // console.log(arrOfTasks);
//   }
// });

// function deleteToDo(id) {
//   arrOfTasks = arrOfTasks.filter((task) => {
//     return task.taskId != id;
//   });
//   showTasks(arrOfTasks);
// }
