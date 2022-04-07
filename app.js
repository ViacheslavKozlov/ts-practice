var refs = {
    addBtn: document.getElementById("addBtn"),
    inputNum1: document.getElementById("num1"),
    inputNum2: document.getElementById("num2"),
    inputNum3: document.getElementById("num3")
};
var addNumbers = function (inputNum1, inputNum2, inputNum3) { return inputNum1 + inputNum2 + inputNum3; };
refs.addBtn.addEventListener("click", function () {
    return console.log(addNumbers(+refs.inputNum1.value, +refs.inputNum2.value, +refs.inputNum3.value));
});
