const webDesigner = {
  name: "YOUR NAME",
  yearsAlive: [1992, 2020],
  imgSrc: "user.jpg",
  skills: ["Photoshop", "HTML", "CSS", "JS"],
  diet: {
    food: "Indomi",
    drinks: ["Coffee", "Nescafe", "tea", "water"],
  },
};

//write your name instead of the YOUR NAME placeholder
webDesigner.name = "mohamed Khaled";
console.log(webDesigner.name);
/*write a getAge function that takes the years alive array and returns your age,
 save the value you return in a const of name age*/
// webDesigner.getAge = function () {
//   const AGE = this.yearsAlive[1] - this.yearsAlive[0];
//   return AGE;
// };
// console.log(webDesigner.getAge());

function getAge(array) {
  const AGE = array[1] - array[0];
  return AGE;
}
console.log(getAge(webDesigner.yearsAlive));
// console.log(webDesigner);

/*Divide the Webdesign skills into designSkills and developmentskills using ES6*/
let [designSkills, ...WebDevelopmentSkills] = webDesigner.skills;
console.log(designSkills);
// let arrOfDesignSkills = [];
// arrOfDesignSkills.push(designSkills);
// console.log(arrOfDesignSkills);
console.log(WebDevelopmentSkills);
/*add Those extra skills to the developmentskills array ['ES6', 'ES2015'] and add all of them into a new updatedDevSkills const*/
// WebDevelopmentSkills.push("ES6", "ES2015");
WebDevelopmentSkills = [...WebDevelopmentSkills, ...["ES6", "ES2015"]];
console.log(WebDevelopmentSkills);

/*destructure the diet object and using new ES6 write a function that
 returns drinks that contain the letter t*/
let { food, drinks } = webDesigner.diet;
console.log(food);
function getDrinks() {
  // console.log(drinks);
  let filterdDrinks = drinks.filter((drink) => drink.includes("t"));
  // console.log(filterdDrinks);
  return filterdDrinks;
}
console.log(getDrinks());

function buildID() {
  const userID = `
  <div class="inner-container">
    <img src="img" alt="">
    <div class="info">
      <h1>${webDesigner.name}</h1>
      <p><span class="text-grey">Age:</span> ${getAge(
        webDesigner.yearsAlive
      )}</p>
      <p><span class="text-grey">Design Skills:</span> ${designSkills}</p>
      <p><span class="text-grey">Dev Skills:</span> ${WebDevelopmentSkills}</p>
      <p><span class="text-grey">Food:</span> ${food}</p>
      <p><span class="text-grey">Drinks:</span>${drinks}</p>
      <p><span class="text-grey">Drinks with 't' letter:</span>${getDrinks(
        webDesigner.diet
      )}</p>
    </div>
  </div>
  `;
  return userID;
}
document.body.innerHTML = `${buildID()}`;
