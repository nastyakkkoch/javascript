// Задание №1

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    
}
console.log(sum(1, 2, 3, 4, 5)); 

// Задание №2

function printUser({ name, age, country }) {
    console.log(`Имя: ${name}, Возраст: ${age}, Страна: ${country}`);
}
const user = { name: 'Mike', age: 56, country: 'USA' };
printUser(user);


//Задание №3

// вариант 1

const user12 = {
    name: "Dasha",
    cont: {
        catOwner: "Nastya",
        address: "8 марта 61"
    },
    favoriteFood: ["royal canin", "chiken", "fish", "my hands"]
};
    const { name, cont: { catOwner, address }, favoriteFood: [first, second, third, fourth] } = user12;
    console.log(second)

// вариант 2

const user13 = {
    userName: "Dasha",
    cont: {
        email: "cat@gmail.com",
        userAddress: "8 марта 61"
    }
};
const noFavoriteFood = ["apple", "strawberry", "cucumber", "potato"];
const [one, two, three, four] = noFavoriteFood;
const { userName, cont: { email, userAddress } } = user13;
console.log(two)

// Задание №4 
const arr = [30, 40, 50]
const arr2 = [10, 20, ...arr, 60, 70]
console.log(arr2)

//Задание №5

function removeKey(userOlga, key) {
    const { [key]: removeKey, ...rest } = userOlga;
    return rest
}

const userOlga = {
    name: "Olga",
    age: 26,
    city: "Ekaterinburg",
    email: "olga@gmail.com"
};

const newUser = removeKey(userOlga, "age");
console.log(newUser)









/*
Функции 

1. Напиши функцию, которая принимает строку и проверяет, является ли она палиндромом. Если да - функция возвращает true, если нет - false;

2. Напиши функцию, которая принимает строку (предложение) и находит первое самое короткое слово в ней и возвращает его;

3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер. Пример: createPhoneNumber(123456789) → 8 (123) 456-789;

4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;

5. *Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый, отсортированный в порядке возрастания, массив. Попробуй реализовать алгоритм сортировки самостоятельно. Если не получается - почитай про bubble sort и попробуй реализовать её.
*/
// Задание №1
function palindrome(str) {
    return str === str.split("").reverse().join("");
  }
  console.log(palindrome("комок"))
  console.log(palindrome("радость"))
  
  // Задание №2
  
  
  // Задание №3
  function formatPhoneNumber(phone) {
      const cleaned = phone.replace(/\D/g, '');
      if (cleaned.length !== 10) {
          return 'Неверный формат номера';
      }
      return `8 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8)}`;
  }
  console.log(formatPhoneNumber('9126201358')); 
  
  // Задание №4
  const numbers = [ 1, 2, 3, 5, 6, 7, 8, 9];
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);
  console. log("Минимальное число массива: " + minNumber)
  console. log('Максимальное число массива: ' + maxNumber)
  
  // Задание №5