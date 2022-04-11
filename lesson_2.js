// Задайте правильные ts типы, для классических js;
// let age = 50;
// let name1 = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };
var age;
var name1;
var toggle;
var empty;
var notInitialize;
var callback;
age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) { return 100 + a; };
// Задавайте тип для переменной в которую можно сохранить любое значение.
// let anything = -20;
// anything = 'Text';
// anything = {};
var anything;
anything = -20;
anything = "Text";
anything = {};
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Сделайте неизменяемый массив со строго описанными типами.Массив для примера.
// let person = ['Max', 21];
var person;
person = ["Max", 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = { load: Load.READY };
if (page.load === Load.READY) {
    console.log("Page status", Load.READY);
}
else {
    console.log("Page status", Load.LOADING);
}
// Сделайте переменную, которая может принимать или строку или число.
var someVar;
someVar = "this is some string";
someVar = 1;
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var statusVar;
statusVar = "enable";
statusVar = "disable";
//statusVar = "pending" //======> pls uncomment for test
// Укажите типы для следующих функций
// function showMessage(message) {
//   console.log(message);
// }
// function calc(num1, num2) {
//   return num1 + num2;
// }
// function customError() {
//   throw new Error('Error');
// }
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
