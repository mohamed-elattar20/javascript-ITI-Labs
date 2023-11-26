// // Example with var
// function exampleWithVar() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x);
// }
// exampleWithVar();

// // Example with let
// function exampleWithLet() {
//   if (true) {
//     let y = 20;
//   }
//   //   console.log(y);
// }
// exampleWithLet();

// // Example with const
// function exampleWithConst() {
//     const z = 30;
//     // z = 40; // This would result in an error because you can't reassign a constant variable
//     console.log(z);
// }
// exampleWithConst();

// The var keyword declares a variable with function-level or global scope. Variables declared with var are "hoisted,
// " which means they're moved to the top of their scope during execution. This can sometimes lead to unexpected behavior
//  if not used carefully.

// The let keyword declares a block-scoped variable. Variables declared with let are not hoisted and are confined
// within the block or function they are declared in. This helps avoid some of the issues related to hoisting.

// The const keyword also declares a block-scoped variable, just like let, but it additionally ensures that the variable's
//  value remains constant after it's assigned. You can't reassign a value to a const variable.

// Remember that choosing between var, let, and const depends on your specific use case and the scope you want for your variables.
//  Generally, it's recommended to use let and const over var to avoid some of the potential issues associated with
//  var due to hoisting and scope.

// ----------------------------------------------------------------
// console.log(x);

// var x = 10;

// console.log(x);
// Even though the console.log(x) appears before the var x = 10 assignment, it doesn't result in an error. This is because of hoisting. The variable declaration var x is hoisted to the top of its scope, so it exists throughout the function. However, its value is undefined until it's explicitly assigned the value 10.

// sayHello();
// function sayHello() {
//     console.log("Hello!");
// }

//-----------------------------------------------------------------------------

// // Traditional function expression
// const add = function(x, y) {
//     return x + y;
// };

// console.log(add(5, 3)); // Output:

// Equivalent arrow function
// const addArrow = (x, y) => {
//   return x + y;
// };

// console.log(addArrow(5, 3)); // Output:
// const multiply = (x, y) => x * y;
// console.log(multiply(4, 3)); // Output:

/* Keep in mind that arrow functions have some differences
  compared to regular function expressions,
   such as the way they handle this. Arrow functions
    do not have their own this context; instead,
 they inherit this from the enclosing scope.
  This can be both convenient and a potential pitfall,
   depending on the context in which you use them. */

/* In a regular function, the value of this is determined by how the function is called.
 It can change depending on the context in which the function is executed.
  The value of this is set dynamically at runtime based on how the function is invoked: */

// When a function is called as a method of an object, this refers to the object itself.
/* When a function is called as a standalone function,
 this can refer to the global object (in non-strict mode) or undefined (in strict mode). */
// When a function is used as an event handler, this often refers to the DOM element that triggered the event.

/* Arrow functions, on the other hand, behave differently regarding this.
 Arrow functions inherit the value of this from their enclosing lexical scope (the nearest enclosing function or global scope).
  In other words, they don't have their own this context and don't bind their own this value. This can make arrow functions useful
   for avoiding this context issues that often arise in nested functions and callbacks.*/

// const obj = {
//   name: "John",
//   regularFunction: function () {
//     console.log(this.name);
//   },
//   arrowFunction: () => {
//     console.log(this.name);
//   },
// };

// obj.regularFunction(); // Output:
// obj.arrowFunction(); // Output:

// const button = document.querySelector("button");
// button.addEventListener("click", obj.regularFunction); // 'this' refers to button
// button.addEventListener("click", obj.arrowFunction);   // 'this' refers to global object

// // In a non-method (standalone) function
// function standaloneRegularFunction() {
//   console.log(this);
// }

// const standaloneArrowFunction = () => {
//   console.log(this);
// };

// standaloneRegularFunction();
// standaloneArrowFunction();
// ----------------------------------------------------------------

//  function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10));
// console.log(sum());

/* You can use the rest parameter along with other named parameters in a function,
 but the rest parameter must come last in the parameter list. */
// The rest parameter gathers any remaining arguments that haven't been explicitly listed as named parameters.
// If no arguments are passed when calling the function, the rest parameter will be an empty array.
// The ... syntax can also be used for spreading elements of an array or iterable into individual elements, but that's a separate usage from the rest parameter.

// const originalArray = [1, 2, 3];
// const newArray = [...originalArray];
// console.log(newArray); // Output:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedArray = [...array1, ...array2];
// console.log(concatenatedArray); // Output:

// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log(result); // Output:

//-----------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// // Traditional way
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

// // Using destructuring
// const [first, second, third] = numbers;

// console.log(first);  // Output:
// console.log(second); // Output:
// console.log(third);  // Output:

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// // Traditional way
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// // Using destructuring
// const { firstName, lastName, age } = person;

// console.log(firstName); // Output:
// console.log(lastName);  // Output:
// console.log(age);       // Output:

// const user = {
//     name: "Alice",
//     address: {
//         city: "Wonderland",
//         country: "Fictionland"
//     }
// };

// const { name, address: { city, country } } = user;

// console.log(name);   // Output:
// console.log(city);   // Output:
// console.log(country);// Output:

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const { firstName, lastName, age = 25 } = person;

// console.log(firstName); // Output:
// console.log(age); // Output:
// console.log(person);

//----------------------------------------------------------------

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }

// greet();         // Output:
// greet("Alice");  // Output:

// function createPerson(firstName, lastName, age = 25) {
//   console.log(`First Name: ${firstName}`);
//   console.log(`Last Name: ${lastName}`);
//   console.log(`Age: ${age}`);
// }

// createPerson("John", "Doe");
// createPerson("Alice", "Smith", 30);

//----------------------------------------------------------------------

// const message = "Hello, world!";
// console.log(message.length); // Output:

// const text = "Hello, World!";
// console.log(text.toUpperCase());   // Output:
// console.log(text.toLowerCase());   // Output:

// const sentence = "Hello, world!";
// console.log(sentence.charAt(7));    // Output:
// console.log(sentence.charCodeAt(7)); // Output:

// const sentence = "Hello, world!";
// console.log(sentence.substring(0, 5)); // Output:
// console.log(sentence.slice(7, 12)); // Output:

// const message = "Hello, world!";
// const newMessage = message.replace("world", "universe");
// console.log(newMessage); // Output:

// const sentence = "Hello, world!";
// const words = sentence.split(" "); // Split by space
// console.log(words); // Output:

// const text = "   Hello, world!   ";
// console.log(text.trim()); // Output:

// const text = "Hello, world!";
// console.log(text.startsWith("Hello"));
// console.log(text.endsWith("world!"));

// const text = "Hello, world!";
// console.log(text.includes("world")); // Output:

// const word = "Hello";
// const repeatedWord = word.repeat(3);

// console.log(repeatedWord); // Output:

// const number = "5642";
// const paddedNumber = number.padStart(5, "0");

// console.log(paddedNumber); // Output:

// const text = "Hello";
// const paddedText = text.padStart(10, "*");

// console.log(paddedText); // Output:

// ----------------------------------------------------------------

// const colors = ["red", "green", "blue", "yellow"];

// const removedColor = colors.shift();

// console.log(removedColor); // Output:
// console.log(colors); // Output:

// const fruits = ["apple", "banana", "orange"];

// const newLength = fruits.unshift("grape", "kiwi");

// console.log(newLength); // Output:
// console.log(fruits);    // Output:

// const fruits = ["apple", "banana", "orange"];

// const removedFruit = fruits.pop();

// console.log(removedFruit); // Output:
// console.log(fruits);       // Output:

// const numbers = [1, 2, 3];

// const newLength = numbers.push(4, 5);

// console.log(newLength); // Output:
// console.log(numbers);   // Output:

// const numbers = [1, 51, 3, 41, 5];

// const hasEvenNumber = numbers.some((number) => number % 2 === 0);

// console.log(hasEvenNumber); // Output:

// const numbers = [2, 4, 6, 8, 10];

// const allEvenNumbers = numbers.every((number) => number % 2 === 0);

// console.log(allEvenNumbers); // Output:

// const numbers = [5, 10, 15, 20, 25];

// const firstMultipleOfTen = numbers.find((number) => number % 10 === 0);

// console.log(firstMultipleOfTen); // Output:

// const numbers = [5, 10, 15, 20, 25];

// const indexFirstMultipleOfTen = numbers.findIndex(
//   (number) => number % 10 === 0
// );

// console.log(indexFirstMultipleOfTen); // Output:

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((number) => number ** 2);

// console.log(squaredNumbers); // Output:
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers); // Output:

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output:

// -------------------------------------------------------
// const target = {};
// const source = { a: 1, b: 2, c: 3 };

// Object.assign(target, source);
// source.d = 4;
// console.log(target); // Output:
// console.log(source); // Output:

// const target = {};
// const source1 = { a: 1 };
// const source2 = { b: 2 };
// const source3 = { c: 3 };

// Object.assign(target, source1, source2, source3);

// console.log(target); // Output:

// const person = {
//   name: "Alice",
//   age: 30,
//   occupation: "Engineer",
// };

// const values = Object.values(person);

// console.log(values); // Output:

// const person = {
//     name: "Alice",
//     age: 30,
//     occupation: "Engineer"
//   };

//   const keys = Object.keys(person);

//   console.log(keys); // Output:

// const person = {
//   name: "Alice",
//   age: 30,
// };

// Object.freeze(person);

// person.name = "Bob";

// console.log(person.name); // Output:

// const person = {
//   name: "Alice",
//   age: 30,
// };

// Object.freeze(person);

// console.log(Object.isFrozen(person)); // Output:

// person.name = "Bob";

// console.log(Object.isFrozen(person)); // Output:

// const person = {
//   name: "Alice",
//   age: 30,
// };

// Object.seal(person);

// person.name = "Bob";
// person.gender = "Male";

// console.log(person.name); // Output:
// console.log(person.gender); // Output:

// const person = {
//     name: "Alice",
//     age: 30
//   };

//   Object.seal(person);

//   console.log(Object.isSealed(person)); // Output:
//   person.name = "Bob";
//   person.gender = "Male";
//   console.log(Object.isSealed(person));

// function createUser(options) {
//   const defaultOptions = {
//     name: "Guest",
//     age: 18,
//     isAdmin: false,
//   };

//   const mergedOptions = { ...defaultOptions, ...options };

//   console.log("Creating user:", mergedOptions);
// }

// createUser({ name: "Alice", isAdmin: true, gender: "female" });
