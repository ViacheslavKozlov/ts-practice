"use strict";
const refs = {
    sumBtn: document.getElementById("addBtn"),
    inputNum1: document.getElementById("num1"),
    inputNum2: document.getElementById("num2"),
    inputNum3: document.getElementById("num3"),
    viewResult: document.getElementById("result")
};
let sumResult = 0;
const sumNumbers = (inputNum1, inputNum2, inputNum3) => (sumResult = inputNum1 + inputNum2 + inputNum3);
refs.sumBtn.addEventListener("click", () => {
    sumNumbers(+refs.inputNum1.value, +refs.inputNum2.value, +refs.inputNum3.value);
    refs.viewResult.textContent = sumResult.toString();
});
//# sourceMappingURL=lesson_1.js.map