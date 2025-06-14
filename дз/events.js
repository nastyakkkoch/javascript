/*
1. Назначь для кнопки обработчик события click, 
который будет изменять текст этой кнопки при нажатии;


2. Назначь для любого элемента обработчик события mouseover,
 который будет изменять размер элемента при наведении;


3. Назначь для инпута обработчик события keyup, 
который будет выводить отпущенную клавишу в консоль;


4. Создай форму и добавь обработчик события submit, 
который будет показывать сообщение об успешной отправке;


5. Пусть на странице есть кнопка с надписью 'Изменить тему', 
которая позволяет переключать тему страницы. Например, по умолчанию тема светлая: 
задний фон - белый, текст - черный. Нажимаем на кнопку ->
 тема меняется на темную: цвет фона - черный, текст - белый.
  Еще раз нажимаем на кнопку -> тема снова светлая и т. д.
*/

// Задание №1

const button = document.getElementById('button');
button.addEventListener('click', () => {
    button.innerText = 'а я новый текст';
});

// Задание №2

const box = document.getElementById('myBox');
box.addEventListener('mouseover', () => {
    box.style.width = "500px";
    box.style.background = "green";
});

box.addEventListener('mouseout', () => {
    box.style.width = '';
    box.style.backgroundColor = '';
});

// Задание №3

document.addEventListener('keyup', (event) => {
    console.log(`Отпущена клавиша: ${event.key}`);
});

// Задание №4

document.getElementById('form').addEventListener('submit', function(event) {
    alert('Форма успешно отправлена')
});

// Задание №5

const theme = document.getElementById('theme');
theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
})