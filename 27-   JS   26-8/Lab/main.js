// Task 1
// var arrOfNames = [];
// for (var i = 0; i < 5; i++) {
//   var newName = prompt("enter name no " + (i + 1)).trim();
//   if (newName != null) {
//     // check
//     var newNameToLower = newName.toLowerCase();
//     if (newNameToLower.length != 0 && !arrOfNames.includes(newNameToLower)) {
//       arrOfNames.push(newNameToLower);
//     } else {
//       alert("not valid value");
//       break;
//     }
//   } else {
//     alert("enter valid input");
//     break;
//   }
// }
// // console.log(arrOfNames);
// // alert(arrOfNames);
// if (arrOfNames.length == 5) {
//   var nameToSearch = prompt("enter a name to Search for pls");
//   if (nameToSearch != null) {
//     var nameToSearchToLower = nameToSearch.trim().toLowerCase();
//     if (arrOfNames.includes(nameToSearchToLower)) {
//       alert(
//         "name of " +
//           nameToSearchToLower +
//           " found at index " +
//           (arrOfNames.indexOf(nameToSearchToLower) + 1)
//       );
//     } else {
//       alert("the name is not found");
//     }
//   }
// }

// ***********************
// check space
// lowercase
// chec if exist  not save
// ***********************

// ***********************************
// Task 2
// var str = prompt("pls enter a string to count how many words in it");
// if (str != null) {
//   str = str.trim();
//   if (str.length != 0) {
//     var newArrOfStr = [];
//     var arrOfStr = str.split(" ");
//     console.log(arrOfStr);
//     for (var i = 0; i < arrOfStr.length; i++) {
//       if (arrOfStr[i] != "") {
//         newArrOfStr.push(arrOfStr[i]);
//       }
//     }
//     console.log(newArrOfStr);
//     alert("number of words in the string " + newArrOfStr.length);
//   } else {
//     alert("enter a valid string ");
//   }
// } else {
//   alert("pls enter a string ");
// }

// Only trial to get the problem solved 1
// var str = "hi   mohamed   from    iti";
// var arrStr = str.split(" ");
// var myArr = [];
// for (var i = 0; i < arrStr.length; i++) {
//   if (arrStr[i] != "") {
//     console.log(arrStr[i]);
//     myArr.push(arrStr[i]);
//   }
// }
// console.log(myArr);

// ***********************************
// Task 3

// var str = prompt("pls enter a string to search in it for chars");
// if (str.length != 0 && str != null) {
//   var char1 = prompt("enter a char1 to search for it in the string");
//   var char2 = prompt("enter a char2 to search for it in the string");
//   if (
//     char1.length != 0 &&
//     char1 != null &&
//     char2.length != 0 &&
//     char2 != null
//   ) {
//     if (str.includes(char1) && str.includes(char2)) {
//       var indexOfChar1 = str.indexOf(char1);
//       var indexOfChar2 = str.indexOf(char2);
//       alert(str.slice(indexOfChar1 + 1, indexOfChar2));
//     } else {
//       alert("Not Found");
//     }
//   } else {
//     alert("pls enter a valid chars ");
//   }
// } else {
//   alert("pls enter a valid string ");
// }

// ***********************************
// Task 4

// function findVowels(str) {
//   var numOfVowels = 0;
//   if (str != null) {
//     var strToLower = str.toLowerCase().trim();
//     if (strToLower.length != 0) {
//       var arrOfName = strToLower.split("");
//       for (var i = 0; i < arrOfName.length; i++) {
//         if (
//           arrOfName[i] == "a" ||
//           arrOfName[i] == "e" ||
//           arrOfName[i] == "o" ||
//           arrOfName[i] == "u" ||
//           arrOfName[i] == "i"
//         ) {
//           numOfVowels += 1;
//         }
//       }
//     }
//   }
//   return "Number of Vowels founded = " + numOfVowels;
// }
// var myName = prompt("enter your name");
// if (myName != null) {
//   myName = myName.trim();
//   if (myName.length != 0 && myName != " ") {
//     alert(findVowels(myName));
//   } else {
//     alert("enter valid input");
//   }
// } else {
//   alert("enter valid input");
// }
// console.log(myName);

// ***********************************
// Task 5

// var namesOfEmployees = prompt(
//   "pls enter names of employees in a comma separated format like this 'name1,name2,name3,...'"
// );
// var salariesOfEmployees = prompt(
//   "pls enter Salaries of salaries in a comma separated format like this 'salary1,salary2,salary3,...'"
// );
// if (
//   namesOfEmployees != null &&
//   salariesOfEmployees != null &&
//   namesOfEmployees != " " &&
//   salariesOfEmployees != " "
// ) {
//   if (namesOfEmployees.length != 0 && salariesOfEmployees.length != 0) {
//     var arrOfNames = namesOfEmployees.split(",");
//     //
//     console.log(arrOfNames);
//     var arrOfSalaries = salariesOfEmployees.split(",");
//     console.log(arrOfSalaries);
//     if (arrOfNames.length != arrOfSalaries.length) {
//       alert("NUmber of Names is Not as Number of Salaries");
//     } else {
//       for (var i = 0; i < arrOfNames.length; i++) {
//         alert("Name : " + arrOfNames[i] + " , Salary : " + arrOfSalaries[i]);
//       }
//       var largestSal = parseInt(arrOfSalaries[0]);
//       var nameOfEmpBigSal = arrOfNames[0];
//       for (var i = 0; i < arrOfSalaries.length; i++) {
//         if (largestSal < parseInt(arrOfSalaries[i])) {
//           largestSal = parseInt(arrOfSalaries[i]);
//           nameOfEmpBigSal = arrOfNames[i];
//         }
//       }
//       alert(
//         "Name of emp with highest Salary : " +
//           nameOfEmpBigSal +
//           " largest Sal = " +
//           largestSal
//       );
//       var employeeToSearchFor = prompt("enter name of Employee To search for");
//       if (employeeToSearchFor != null) {
//         if (employeeToSearchFor.length != 0) {
//           if (arrOfNames.includes(employeeToSearchFor)) {
//             var indexOfEmp = arrOfNames.indexOf(employeeToSearchFor);
//             alert(
//               "Employee is found his name is : " +
//                 arrOfNames[indexOfEmp] +
//                 " , his salary = " +
//                 arrOfSalaries[indexOfEmp]
//             );
//           } else {
//             alert("not found");
//           }
//         } else {
//           alert("enter valid name to search for");
//         }
//       } else {
//         alert("enter valid name to search for");
//       }
//     }
//   } else {
//     alert("enter valid inputs");
//   }
// } else {
//   alert("enter valid inputs");
// }
