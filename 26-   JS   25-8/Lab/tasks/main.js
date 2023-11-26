// Task No. 1
// do {
//   var num1 = parseInt(prompt("Please enter number 1"));
//   var num2 = parseInt(prompt("Please enter number 2"));
//   var num3 = parseInt(prompt("Please enter number 3"));
//   if (!isNaN(num1) || !isNaN(num2) || !isNaN(num3)) {
//     var largestNum;
//     if (num1 > num2 && num1 > num3) {
//       largestNum = num1;
//     } else if (num2 > num1 && num2 > num3) {
//       largestNum = num2;
//     } else if (num3 > num1 && num3 > num2) {
//       largestNum = num3;
//     }
//     alert("Largest Number is " + largestNum);
//   } else {
//     alert("Wrong input");
//   }
// } while (isNaN(num1) || isNaN(num2) || isNaN(num3));

// *******************************************************

// Task No. 2
// do {
//   var monthNum = parseInt(prompt("pls Enter month NO."));
//   switch (monthNum) {
//     case 1:
//       alert("this is January");
//       break;
//     case 2:
//       alert("this is Feb");
//       break;
//     case 3:
//       alert("this is Mars");
//       break;
//     case 4:
//       alert("this is April");
//       break;
//     case 5:
//       alert("this is May");
//       break;
//     case 6:
//       alert("this is Jun");
//       break;
//     case 7:
//       alert("this is July");
//       break;
//     case 8:
//       alert("this is August");
//       break;
//     default:
//       alert("you typed a wrong input");
//   }
// } while (isNaN(monthNum) || monthNum == 0);

// *******************************************************

// Task No. 3
// var numToCheck = parseInt(prompt("Please Enter a Number To check"));
// if (numToCheck == 0) {
//   alert("result = 0");
// } else if (isNaN(numToCheck)) {
//   alert("Wrong input");
// } else if (numToCheck % 2 == 0) {
//   alert("even Num");
// } else if (numToCheck % 2 != 0) {
//   alert("odd Num");
// }

// *******************************************************

// Task No. 4
// do {
//   var numToGetFactorial = parseInt(prompt("pls Enter A number"));
// } while (numToGetFactorial == 0 || isNaN(numToGetFactorial));
// var factorial = 1;
// for (var i = numToGetFactorial; i >= 1; i--) {
//   factorial *= i;
// }
// alert("factorial = " + factorial);

// *******************************************************

// Task No. 5
// do {
//   var num1 = parseInt(prompt("enter number 1"));
//   var num2 = parseInt(prompt("enter number 2"));
// } while (isNaN(num1) || isNaN(num2));
// var operation = prompt("enter an operation from ('+' , '-' , '*' ,'/')");
// var result;
// switch (operation) {
//   case "+":
//     result = num1 + num2;
//     alert("result = " + result);
//     break;
//   case "-":
//     result = num1 - num2;
//     alert("result = " + result);
//     break;
//   case "*":
//     result = num1 * num2;
//     alert("result = " + result);
//     break;
//   case "/":
//     result = num1 / num2;
//     alert("result = " + result);
//     break;
//   default:
//     alert("Wrong Operation");
// }

// *******************************************************

// Task No. 6
// var result = 0;
// do {
//   var num = parseInt(prompt("pls enter a number"));
//   if (isNaN(num)) {
//     alert("wrong input");
//   } else {
//     result += num;
//   }
// } while (num != 0 && result < 100);
// alert("result = " + result);
