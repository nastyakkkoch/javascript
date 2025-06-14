/* 
ЗАДАНИЕ №1

1. Найдите с помощью break points ошибку в коде этой функции и исправьте ее:

function hasEvenNumber(arr) {

  let foundEven = false;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {

      foundEven = true;

    } else if (arr[i] % 2 !== 0) {

      foundEven = false;

    }

  }

  return foundEven;

}

console.log(hasEvenNumber([1, 3, 4, 5])); // Ожидается: true
*/



function hasEvenNumber(arr) {

  let foundEven = false;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      foundEven = true;
      break;
    } 
  }
  return foundEven;
}
console.log(hasEvenNumber([1, 3, 4, 5])); 

/* 
ЗАДАНИЕ №2

2. Найдите с помощью debugger ошибку в коде этой функции и исправьте ее:

function calculateAverage(numbers) {

  let sum = 0;

  for (let i = 0; i <= numbers.length; i++) { 

    sum += numbers[i];

  }

  return sum / numbers.length;

}

console.log(calculateAverage([2, 4, 6])); // Ожидается: 4
*/

function calculateAverage(numbers) {

    let sum = 0;
    debugger;
    for (let i = 0; i < numbers.length; i++) { 
        debugger;
      sum += numbers[i];
      debugger;
    }
    debugger;
    return sum / numbers.length;
    
  }
  
  console.log(calculateAverage([2, 4, 6])); // Ожидается: 4

// здесь на каждом выполнении отображались 0, 2, 6, 12, а после NaN
// поэтому i <= numbers.length заменила на i < numbers.length, сумма чисел
// 2,4,6 (12) поделилась на 3 числа и получилось 4

/* 
ЗАДАНИЕ №3

3. Найдите с помощью console.log ошибку в коде этой функции и исправьте ее:

function findLargestNumber(arr) {

  let largest = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {

      largest = arr[i];

    }

  }

  return largest;

}

console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10
*/
function findLargestNumber(arr) {

    let largest = -10;
  
    for (let i = 0; i < arr.length; i++) {
  
      if (arr[i] > largest) {
  
        largest = arr[i];
  
      }
  
    }
  
    return largest;
  
  }
  
  console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10


