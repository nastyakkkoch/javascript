// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
/*
function multiply(a, b) {
  return a * b;
}
const person = { name: "Alice", age: 30 };
if (person.age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
*/


// Исправленный вариант:
function multiply(a, b) {
  return a * b;
}
const person = { name: 'Alice', age: 30 };
if (person.age > 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}


// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
/*
function x(a, b) {
  let c = a * b;
  return c;
}
let d = x(5, 10);
*/

function multiplication(a, b) {
  return a * b;
}

const result = multiplication(70, 2);
console.log(result);


// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. 

// Исправьте код:

/*let items = ["apple", 'banana', "orange"];
let price = {apple: 1, banana: 2, orange:3 };
const total = price['apple'] + price["banana"] + price.orange;

function calculateTotal(items) {
  return items.reduce(function(total, item) {return total + item.price; }, 0); }
*/

// Исправленный вариант
const items = ['apple', 'banana', 'orange'];
const price = { apple: 1, banana: 2, orange: 3 };
const total = price['apple'] + price['banana'] + price['orange'];

function calculateTotal(items) {
  return items.reduce(function(total, item) {
    return total + item.price;
  }, 0);
}

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".

function validateForm(form) {
  const { name, email, password } = form;

  if (!name || typeof name !== "string" || name.length === 0) {
    return "Введите корректное имя"
  }
  if (!email || email !== "string" || email.length === 0) {
    return "Введите корректный email"
  }
  if (!password || password !== "string" || password.length < 10) {
    return "Придумайте пароль, содержащий не менее 10 символов!"
  }
  return "Форма успешно отправлена!"
};

const form2 = {
  name: "",
  email: "",
  password: "1234"
};

 const form3 = {
  name: "Олег",
  email: "oleg@gmail.com",
  password: "1234123412341234"
 };
 
 console.log(validateForm(form2));
 console.log(validateForm(form3));

