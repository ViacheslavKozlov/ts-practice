// Задайте правильные ts типы, для классических js;
// let age = 50;
// let name1 = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = a => 100 + a;

// Задавайте тип для переменной в которую можно сохранить любое значение.
// let anything = -20;
// anything = 'Text';
// anything = {};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
}

// Сделайте неизменяемый массив со строго описанными типами.Массив для примера.
// let person = ['Max', 21];

let person: [string, number];
person = ["Max", 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Load {
  LOADING,
  READY
}

const page = { load: Load.READY };

if (page.load === Load.READY) {
  console.log("Page status", Load.READY);
} else {
  console.log("Page status", Load.LOADING);
}

// Сделайте переменную, которая может принимать или строку или число.

let someVar: string | number;
someVar = "this is some string";
someVar = 1;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let statusVar: "enable" | "disable";
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
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Создайте свой тип данных на основе имеющихся данных.
// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   }
// }

// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01"
  }
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close"
};
