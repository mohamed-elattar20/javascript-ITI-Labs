// const user = {
//   name: "John",
//   address: {
//     city: "London",
//     street: "14 Main Street",
//   },
// };

// console.log(user.address?.city);

// console.log(0 || 5);

// console.log(globalThis);

// const mySet = new Set([1, 15, 15, 3, 5, 1, 2, 3, 4, 5, 6]);
// console.log(mySet);
// mySet.add(1);
// mySet.add("Hello");
// mySet.add({ name: "Alice" });
// console.log([...mySet]);
// console.log(mySet.has(7));
// console.log(mySet.has("World"));
// mySet.delete(1);
// console.log(mySet);
// console.log(mySet.size);

// for (const item of mySet) {
//   console.log(item);
// }
// mySet.forEach((item) => {
//   console.log(item);
// });
// console.log(mySet.size);
// // const myArray = Array.from(mySet);
// // OR
// const myArray = [...mySet];
// console.log(myArray);
// ---------------------------------------------------------
// const myMap = new Map();
// myMap.set("name", "Alice");
// myMap.set(1, "One");
// myMap.set({ id: 1 }, "Object Key");
// console.log(myMap);
// console.log(myMap.get("name"));
// console.log(myMap.get(1));
// console.log(myMap.get({ id: 1 }));
// myMap.delete("name");
// console.log(myMap);
// for (const [key, value] of myMap) {
//   console.log(key, value);
// }
// myMap.forEach((value, key) => {
//   console.log(key, value);
// });
// console.log(myMap.size);

// ---------------------------------------------------------

// const mySymbol = Symbol();
// const mySymbolWithDescription = Symbol("This is a symbol description");
// const symbol1 = Symbol("foo");
// const symbol2 = Symbol("foo");
// console.log(symbol1 === symbol2);

// const data = "firstName";
// const myNewSymbol = Symbol("mySymbol");

// console.log(typeof myNewSymbol);
// const obj = {
//   [data]: "Ahmed",
//   age: 25,
//   [myNewSymbol]: "This is a unique property",
// };

// for (let prop in obj) {
//   console.log(prop);
// }

// console.log(Object.getOwnPropertySymbols(obj));

// console.log(obj);
// console.log(obj[myNewSymbol]);

// const arr = [1, 2, 3, 4, 5, 6];

// let iter = arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// const myIterable = {
//   name: "Mohammed",
//   age: 28,
//   job: "Engineer",

//   // The [Symbol.iterator]() method returns an iterator object.
//   [Symbol.iterator]() {
//     let currentIndex = 0;
//     // The iterator object must have a next() method.
//     return {
//       next() {
//         if (currentIndex < Object.values(myIterable).length) {
//           // Return the current value and advance the index.
//           return {
//             value: Object.values(myIterable)[currentIndex++],
//             done: false,
//           };
//         } else {
//           // Indicate that the iteration is complete.
//           return { value: undefined, done: true };
//         }
//       },
//     };
//   },
// };
// console.log(myIterable);
// for (let val of myIterable) {
//   console.log(val);
// }

//   // Now you can use a for...of loop to iterate over myIterable.

// let iterate = myIterable[Symbol.iterator]();

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// for (const item of myIterable) {
//   console.log(item);
// }

// Generator Function
// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const generator = myGenerator();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* infiniteSequence() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// const iterator = infiniteSequence();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I'm ${this.age} years old.`
//     );
//   }
// }

// const person1 = new Person("Alice", 30);

// person1.greet();

// class MyClass {
//     constructor(name) {
//       this.name = name;
//     }

//     // Instance method
//     sayHello() {
//       console.log(`Hello, ${this.name}!`);
//     }

//     // Static method
//     static staticMethod() {
//       console.log("This is a static method.");
//     }

//     // Static property (not yet standardized in ES6/ES2015)
//     static staticProperty = "Static Property";
//   }

//   // Creating an instance of MyClass
//   const obj = new MyClass("Alice");

//   // Calling an instance method
//   obj.sayHello();

//   // Calling a static method without creating an instance
//   MyClass.staticMethod();
//   // Accessing a static property without creating an instance
//   console.log(MyClass.staticProperty);

// Base class (superclass)
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   static age = 10;

//   set myName(newName) {
//     this.name = newName;
//   }

//   get myName() {
//     return this.name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// Derived class (subclass)
// class Dog extends Animal {
//   constructor(name, color) {
//     super(name); // Call the constructor of the base class
//     this.color = color;
//   }

//   // Override the speak method
// speak() {
//   console.log(`${this.name} barks.`);
// }

//   // Add a new method specific to Dog
//   fetch() {
//     console.log(`${this.name} fetches a ball.`);
//   }
// }

// // Create instances of the classes
// const genericAnimal = new Animal("Generic Animal");
// genericAnimal.myName = "Cat";
// console.log(genericAnimal.myName);

// const dog = new Dog("Buddy", "White");

// dog.speak();

// // Use the methods of the base and derived classes
// genericAnimal.speak();
// dog.speak();
// dog.fetch();

// ---------------------------------------------------------

// function delay(callback, duration) {
//   setTimeout(() => {
//     callback();
//   }, duration);
// }

// callback  hell
// pryamid of doom

// delay(()=> {
//   console.log('first done!');
//   delay(()=> {
//     console.log('second done!');
//     delay(()=> {
//       console.log('third done!');
//     }, 200);
//   }, 300);
// }, 500);

let delay = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Request is successful!");
      // reject("Request in not successful");
    }, duration);

    // setTimeout(()=> {
    //   reject('Error');
    // }, 200);
  });
};

delay(600)
  .then((a) => console.log(a))
  .catch((error) => console.log("Error: ", error));

// let first = delay(500).then(() => {
//   console.log("first promise");
//   return "First";
// });

// let second = delay(300).then(() => {
//   console.log("second promise");
//   return "Second";
// });

// let third = delay(200).then(() => {
//   console.log("third promise");
//   return "Third";
// });

// Promise.all([first, second, third]).then((value) => console.log(value));
// Promise.race([first, second, third]).then((value) => console.log(value));

// let xml = new XMLHttpRequest();

// xml.open("GET", "URL");

// xml.onload = () => {
//   if (xml.status === 200) {
//     console.log("Response:", xhr.responseText);
//   } else {
//     // Handle errors
//     console.error("Request failed:", xhr.status, xhr.statusText);
//   }
// };
// // Set up an event listener to handle network errors
// xhr.onerror = function () {
//   console.error("Network error occurred");
// };

// // // Send the request
// xhr.send();

// fetch("URL")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Parse the response body as JSON
//   })
//   .then((data) => {
//     // Handle the JSON data
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     // Handle errors
//     console.error("Fetch Error:", error);
//   });

// async function fetchUserData() {
//   const response = await fetch(
//     { method: "GET" },
//     "https://api.example.com/user"
//   );
//   const userData = await response.json();
//   return userData;
// }

// async function fetchUserData() {
//   try {
//     const response = await fetch("https://api.example.com/user");
//     const userData = await response.json();
//     return userData;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error; // Optionally rethrow the error
//   }
// }
