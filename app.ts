const refs = {
  addBtn: document.getElementById("addBtn"),
  inputNum1: document.getElementById("num1")! as HTMLInputElement,
  inputNum2: document.getElementById("num2")! as HTMLInputElement,
  inputNum3: document.getElementById("num3")! as HTMLInputElement
};

const addNumbers = (inputNum1: number, inputNum2: number, inputNum3: number) => inputNum1 + inputNum2 + inputNum3;

refs.addBtn.addEventListener("click", () =>
  console.log(addNumbers(+refs.inputNum1.value, +refs.inputNum2.value, +refs.inputNum3.value))
);
