let Answer = document.getElementById("Answer");
// let operationBeforeOperator = "";
var str = "";
function EnterNumber(valueOfInput) {
  // console.log(valueOfInput);
  if (
    !valueOfInput.includes("+") ||
    !valueOfInput.includes("-") ||
    !valueOfInput.includes("*") ||
    !valueOfInput.includes("/")
  ) {
    sumBtn.removeAttribute("disabled");
    miniseBtn.removeAttribute("disabled");
    multBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
    Answer.value += valueOfInput;
    str += valueOfInput;
  } else {
    Answer.value = "";
  }
}
let sumBtn = document.getElementById("sumBtn");
let miniseBtn = document.getElementById("miniseBtn");
let multBtn = document.getElementById("multBtn");
let divideBtn = document.getElementById("divideBtn");
function EnterOperator(valueOfOperator) {
  // if (   /// Not important and not effective
  //   str[str.length - 1] != "+" ||
  //   str[str.length - 1] != "-" ||
  //   str[str.length - 1] != "*" ||
  //   str[str.length - 1] != "/"
  // ) {
  sumBtn.setAttribute("disabled", "");
  miniseBtn.setAttribute("disabled", "");
  multBtn.setAttribute("disabled", "");
  divideBtn.setAttribute("disabled", "");
  Answer.value = "";
  str += valueOfOperator;
  // console.log(str);
  Answer.value = "";
  // } else if (str[str.length - 1] != "-") {
  str[str.length - 1] = "+" || "-";
}
// }

function EnterEqual() {
  //   console.log(eval(Answer.value));

  Answer.value = eval(str);
  str = Answer.value;
  // Answer.value += "";
}

function EnterClear() {
  Answer.value = "";
  str = "";
}
