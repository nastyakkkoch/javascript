/*
1. Напиши функцию, которая принимает массив чисел, совершает над
 ними любую математическую операцию и возвращает новый массив, 
 содержащий результаты этих операций, используя стрелочные функции;


2. Создай объект с методом, который использует стрелочную функци
ю внутри метода `setTimeout` для вывода значения свойства объекта 
через 1 секунду;


3. Реализуй функцию высшего порядка*, которая принимает функцию 
и массив, и применяет эту функцию ко всем элементам массива, 
используя стрелочные функции.

* Функции высшего порядка - это функции, которые могут принимать
 другие функции в качестве аргументов или возвращать функции 
 в качестве результата. Подробнее - тут.
*/

const sum = (a, b) => a + b;
console.log(sum(2,8))