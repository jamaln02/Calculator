var myNumber = document.querySelectorAll(".btu");

var myScreen = document.querySelector("#screen");

var myResult = document.querySelector("#result");

var myDelet = document.querySelector("#delet");

myNumber.forEach((num) => {
  num.addEventListener("click", (e) => {
    myScreen.value += e.target.defaultValue;
  });
});

myDelet.addEventListener("click", () => {
  myScreen.value = "";
});

myResult.addEventListener("click", () => {
  if (myScreen.value != "") {
    myScreen.value = eval(myScreen.value);
  }
});
