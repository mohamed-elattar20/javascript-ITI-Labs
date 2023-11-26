let food = [
  "Burger",
  "Pizza",
  "Donuts",
  "Pizza",
  "Koshary",
  "Donuts",
  "Seafood",
  "Burger",
];

// const mySet = new Set([...food , "pasta"]);
const mySet = new Set([...food]);
mySet.add("pasta");
console.log(mySet);

mySet.delete("Burger");
console.log(mySet);

const clearSet = (setToClear) => {
  if (setToClear.size > 2) {
    setToClear.clear();
    console.log(setToClear);
  }
};
clearSet(mySet);
