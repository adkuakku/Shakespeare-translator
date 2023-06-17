var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")

console.log(txtInput)
function clickHandler() {
    console.log("clicked");
    console.log("input", txtInput.value); // to read the inputed text in the box
}
btnTranslate.addEventListener("click", clickHandler)