function printPattern(pattern, numOfRepeats) {
  //   console.log(pattern.repeat(3));
  for (let i = 1; i <= numOfRepeats; i++) {
    console.log(pattern.repeat(i));
    document.body.innerHTML += `<h1>${pattern.repeat(i)}</h1>`;
  }
}

// printPattern("#", 4);
printPattern("*", 4);
