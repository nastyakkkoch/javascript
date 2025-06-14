// 1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;

// 2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;

// 3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;

// 4. Напиши функцию, которая удаляет элемент с указанным ID из документа;

// 5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;

// 6. Создай новый элемент, добавь к нему класс и добавь его в DOM;

// 7. Переключи класс у существующего элемента и проверьте его наличие в консоли.



// Задание №1

const paragraph = document.getElementById('item');
paragraph.textContent = 'Текст изменился';

// Задание №2

const firstSomeText = document.querySelector('.sometext');
console.log(firstSomeText.textContent);
firstSomeText.style.color = 'red';
firstSomeText.style.background = 'green';

// Задание №3

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Я последний параграф в body';
document.body.appendChild(newParagraph);

// в итоге он получается не последним, а предпоследним, 
// возможно, потому что после него создается еще один 
// новый элемент, или я ошиблась

// Задание №4

const elementToRemove = document.getElementById('elementRemoved');
elementToRemove.parentNode.removeChild(elementToRemove);

// Задание №5

const link = document.querySelector('a');
link.setAttribute('href', 'https://google.com');
console.log(link.getAttribute('href'));

// Задание №6

const newElement = document.createElement('div');
newElement.textContent = 'Я новый элемент';
document.body.appendChild(newElement);

newElement.classList.add('newClass');

// Задание №7

newElement.classList.toggle('active');
newElement.classList.toggle('active');
newElement.classList.toggle('container');
console.log(newElement);