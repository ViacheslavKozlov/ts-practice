const refs = {
  sumBtn: document.getElementById("addBtn")! as HTMLButtonElement,
  inputNum1: document.getElementById("num1")! as HTMLInputElement,
  inputNum2: document.getElementById("num2")! as HTMLInputElement,
  inputNum3: document.getElementById("num3")! as HTMLInputElement,
  viewResult: document.getElementById("result")! as HTMLSpanElement
};

let sumResult = 0;

const sumNumbers = (inputNum1: number, inputNum2: number, inputNum3: number) => (sumResult = inputNum1 + inputNum2 + inputNum3);

refs.sumBtn.addEventListener("click", () => {
  sumNumbers(+refs.inputNum1.value, +refs.inputNum2.value, +refs.inputNum3.value);
  refs.viewResult.textContent = sumResult.toString();
});
