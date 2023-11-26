// Task 1
// function randNum() {
//   return Math.ceil(Math.random() * 6);
// }
// do {
//   var isConfirmed = confirm("press ok if you want to generate a random number");
//   if (isConfirmed) {
//     alert("your random number = " + randNum());
//   } else {
//     alert(`Byeeee !!`);
//   }
//   // console.log(isConfirmed);
// } while (isConfirmed);

// *****************************************

// Task 2

// function deepCopyForStr(arrOfStr) {
//   let newArrOfStr = [...arrOfStr];
//   console.log(newArrOfStr);
//   let myNewArrOfStr = [];
//   let isNotStr = true;
//   let i = 0;
//   let lengthOfArr = newArrOfStr.length;
//   //v1
//   while (isNotStr && i < lengthOfArr) {
//     if (
//       isNaN(newArrOfStr[i]) &&
//       newArrOfStr[i] != "" &&
//       newArrOfStr.length != 0
//     ) {
//       //   console.log(newArrOfStr[i]);
//       myNewArrOfStr.push(newArrOfStr[i].trim().toLowerCase());
//       i++;
//     } else {
//       alert("invalid input");
//       isNotStr = false;
//     }
//   }
//   //   //v2
//   //   //   for (let i = 0; i < newArrOfStr.length; i++) {
//   //   //     myNewArrOfStr.push(newArrOfStr[i].toLowerCase());
//   //   //   }
//   return myNewArrOfStr;
// }

// let myArr = ["Ahmed", "MOHAMED", "AYA", "YASser"];
// let myArr = [1, 2, 3];
// // let myArr = ["", "", ""];
// // let myArr = [];
// // console.log(deepCopyForStr(myArr));

// console.log(deepCopyForStr(myArr));
// console.log(myArr);
// console.log(deepCopyForStr(myArr));

// *****************************************

// Task 3
// let arrOfGame = [
//   {
//     question: "what is your name ??",
//     answer: "mohamed",
//   },
//   {
//     question: "how old are you ?",
//     answer: "24",
//   },
//   {
//     question: "are you in ITI ?",
//     answer: "yes",
//   },
// ];
// let score = 0;
// let isBreak = true;
// for (let i = 0; i < arrOfGame.length; i++) {
//   let answerOfQuestion = prompt(
//     `please anser the followng question ${arrOfGame[i].question}`
//   );
//   if (answerOfQuestion != null) {
//     answerOfQuestion = answerOfQuestion.trim().toLowerCase();
//     if (answerOfQuestion.length != 0 && answerOfQuestion != "") {
//       if (answerOfQuestion == arrOfGame[i].answer.toLowerCase()) {
//         score += 1;
//       } else {
//         // alert(`wrong answer !!`);
//       }
//     } else {
//       isBreak = false;
//       alert(`invalid input !`);
//       break;
//     }
//   } else {
//     isBreak = false;
//     alert(`invalid input !`);
//     break;
//   }
// }
// if (isBreak) {
//   alert(`Your score = ${score}`);
// }

// *****************************************

// Task 4
// let toDoArr = [];
// function takeToDoFromUser(toDoTitle) {
//   let toDoObj = { status: "toDo" };
//   toDoObj.title = toDoTitle;
//   //   console.log(toDoObj);
//   toDoArr.push(toDoObj);
//   console.log(toDoArr);
// }
// function isCompletedToDo(toDoArr, toDoNameToSearchFor) {
//   let isFound = true;
//   let i = 0;
//   while (isFound) {
//     if (toDoArr[i].title == toDoNameToSearchFor) {
//       toDoArr[i].status = "Completed";
//       isFound = false;
//       console.log(`Founded and checked `);
//     } else {
//       i++;
//     }
//   }
//   return `Founded`;
// }
// // pushing toDos into objects in an Array
// var flag = true;
// do {
//   var toDoTitle = prompt("enter toDo title here");
//   if (toDoTitle != null) {
//     if (toDoTitle.length != 0 && toDoTitle != "") {
//       toDoTitle = toDoTitle.trim().toLowerCase();
//       takeToDoFromUser(toDoTitle);
//     } else {
//       flag = true;
//     }
//   } else {
//     flag = true;
//   }
// } while (toDoTitle != null && toDoTitle.length != 0 && toDoTitle != "");
// // Searching and checking the toDo
// if (flag) {
//   do {
//     var toDoToSearch = prompt("enter toDo title to be checked as Completed");
//     if (toDoToSearch != null) {
//       if (toDoToSearch.length != 0 && toDoToSearch != "") {
//         toDoToSearch = toDoToSearch.trim().toLocaleLowerCase();
//         // console.log(toDoToSearch);
//         isCompletedToDo(toDoArr, toDoToSearch);
//         console.log(toDoArr);
//       } else {
//         flag = false;
//       }
//     } else {
//       flag = false;
//     }
//   } while (
//     toDoToSearch != null &&
//     toDoToSearch.length != 0 &&
//     toDoToSearch != "" &&
//     flag == true
//   );
// }

// *****************************************

// Task 5
// let div = document.getElementById("myDiv");
// let inputFromUser = prompt("Enter a sentence");
// if (inputFromUser != null) {
//   inputFromUser = inputFromUser.trim();
//   if (inputFromUser.length != 0 && inputFromUser != "") {
//     for (let i = 1; i <= 6; i++) {
//       div.innerHTML += `<h${i}>${inputFromUser}<h${i}/>`;
//     }
//   }
// }

// *****************************************

//Trial to make a function to check the input string from prompt  (Out of scope)
// function checkStr(str) {
//   if (str != null) {
//     if (str.length != 0 && str != "") {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
// var myName = prompt("enter your name");
// console.log(myName);
// console.log(checkStr(myName));
