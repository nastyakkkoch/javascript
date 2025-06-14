const quizData = [
    {
        question: "Что такое КОТ?",
        options: ["Животное", "Насекомое", "Высшее"],
        answer: "Животное"
    },
    {
        question: "Съедобное...",
        options: ["Варенье", "Огурец", "Мед", "Все перечисленное"],
        answer: "Все перечисленное"
    },
    {
        question: "Коли дак...",
        options: ["Толи", "Эдак", "Ват?", "Все перечисленное"],
        answer: "Толи"
    },
]; 

// создали массив с объектами - вопрос, варианты ответов и правильный ответ

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextBtn');
const resultsElement = document.getElementById('results');

// это мы получили все элементы 

let currentQuestionIndex = 0;

// это переменная, которая хранит индекс текущего вопроса

let score = 0;

// эта переменная будет хранить результаты. изначально у нас нулевой результат

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    // здесь мы получаем текущий вопрос

    questionElement.textContent = currentQuestion.question;
    // Свойство textContent позволяет считывать или задавать текстовое содержимое элемента. 
    // Обращение к свойству вернёт строку, которая будет состоять из текстового содержимого
    //  всех вложенных элементов,
    //  даже если они скрыты с помощью CSS и не видны на экране.
    
    optionsElement.innerHTML = "";
// Свойство innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML.

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.style.backgroundColor = 'rgb(241, 128, 211)';
        button.style.borderRadius = '15px';
        button.style.border = 'none';
        button.addEventListener('click', selectOption);
        optionsElement.appendChild(button);
    });
}
// addEventListener Добавляет элементу действие, 
// которое будет выполнено после срабатывания события. Например, на клик мышки или нажатие клавиши.


// Метод массива forEach() позволяет применить колбэк-функцию ко всем элементам массива.
//  Можно использовать вместо классического цикла for.
//  В отличие от него forEach() выглядит более читабельным и понятным.

function selectOption(evenet) {
    const selectedOption = evenet.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if(selectedOption === correctAnswer) {
        score++; 
    }
    nextButton.style.display = 'block';
    nextButton.style.backgroundColor = 'rgb(233, 223, 154)';
    nextButton.style.border = 'none';
    nextButton.style.borderRadius = '15px';
    nextButton.style.marginInline = 'auto';
    optionsElement.querySelectorAll('button'.forEach(button => {
        button.removeEventListener('click', selectOption);
    }));
}



function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    resultsElement.textContent = "Вы набрали " + score + " из " + quizData.length + " баллов";
    resultsElement.style.fontSize = '30px';
    nextButton.style.display = 'none';
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
}

nextButton.addEventListener('click', nextQuestion);
loadQuestion();