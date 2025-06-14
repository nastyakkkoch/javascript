const questions = [
    {
        type: 'choice',
        question: 'Какое насекомое охраняет лесные поляны от вредных мух?',
        answers: ['Кузнечик', 'Шмель', 'Стрекоза'],
        correctAnswer: 'Стрекоза'
    },
    {
        type: 'input',
        question: 'Какое вещество составляет около 70% массы клетки?',
        correctAnswer: 'вода'
    },
    {
        type: 'choice',
        question: 'Какому животному стоят памятники в Токио и Париже?',
        answers: ['Саламандре', 'Червяку', 'Лягушке'],
        correctAnswer: 'Лягушке'
    },
    {
        type: 'choice',
        question: 'Какое животное бежит, выставляя вперед задние ноги?',
        answers: ['Заяц', 'Тигр', 'Косуля'],
        correctAnswer: 'Заяц'
    },
    {
        type: 'input',
        question: 'Самая сильная мышца в человеческом теле это...',
        correctAnswer: 'язык'
    }
];

const testing = document.getElementById('testing');
const startButton = document.getElementById('startTest');
const numberQuestion = document.getElementById('numberQuestion');
const questionElement = document.getElementById('question');
const answers = document.getElementById('answers');
const nextButton = document.getElementById('nextQuestion');
const result = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
    nextButton.style.display = 'none'; 
    nextButton.classList.remove('next-button'); 
    loadQuestion();
});



function createChoiceButtons(answersArray) {
    answersArray.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.className = 'answer-button';
        button.addEventListener('click', selectAnswer);
        answers.appendChild(button);
        });
}


function createInputField() {
    const container = document.createElement('div');
    container.className = 'input-container';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'answer-input';
    input.placeholder = 'Введите ответ';
    input.addEventListener('input', function() {
        this.value = this.value.replace(/\s/g, '');
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Ответить';
    submitButton.className = 'submit-button';
    submitButton.addEventListener('click', function() {
        selectAnswer({target: input});
        this.disabled = true;
    })

    container.appendChild(input);
    container.appendChild(submitButton);
    answers.appendChild(container);
}


function loadQuestion() {

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionElement.className = 'question-text';
    
    numberQuestion.style.display = 'block';
    numberQuestion.innerHTML = `Вопрос ${currentQuestionIndex + 1} из ${ questions.length}`;

    answers.innerHTML = '';

    if (currentQuestion.type === 'choice') {

       createChoiceButtons(currentQuestion.answers);
        
    } else {

        createInputField();
    }
}


function getSelectedAnswer(event) {

    if(event.target.tagName === 'INPUT') {
        return event.target.value;
    }
    return event.target.textContent;
}


function checkAnswerCorrectness(selectedAnswer, correctAnswer) {
    return selectedAnswer.toLowerCase() === correctAnswer.toLowerCase();
}


function choiceQuestionStyleButton (selectedElement, isCorrect, correctAnswer) {
    const allButtons = answers.querySelectorAll('button:not(#nextQuestion)');
    allButtons.forEach(button => {
        if (button.textContent.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase()) {
            button.classList.add('correct-answer');
        }
        if (button === selectedElement && !isCorrect) {
            button.classList.add('wrong-answer');

            button.disabled = true;
        }
    })
}


function choiceQuestionStyleInput(selectedElement, isCorrect, correctAnswer) {
    if (isCorrect) {
        selectedElement.style.border = '2px solid rgb(76, 190, 81)';
    } else {
        selectedElement.style.border = '2px solid rgb(213, 37, 24)'; 

        const correctAnswerElement = document.createElement('div');
        correctAnswerElement.textContent = `Правильный ответ: ${correctAnswer}`;
        correctAnswerElement.classList.add('inscription-correct-answer');
        answers.appendChild(correctAnswerElement);
    }

    selectedElement.disabled = true;
}


function showNextButton() {
    nextButton.classList.add('next-button');
    nextButton.style.display = 'block';
}


function selectAnswer(event) {
    const selectedAnswer = getSelectedAnswer(event);
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const isCorrect = checkAnswerCorrectness(selectedAnswer, correctAnswer);

    if (isCorrect) {
        score++;
    }

    if (questions[currentQuestionIndex].type === 'choice') {
        choiceQuestionStyleButton(event.target, isCorrect, correctAnswer);
    } else {
        choiceQuestionStyleInput(event.target, isCorrect, correctAnswer);
    }

    showNextButton();
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextButton.style.display = 'none'; 
        nextButton.classList.remove('next-button'); 
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}


function showResult() {
    testing.style.display = 'none';
    result.textContent = 'Количество правильных ответов: ' + score +  ' из ' + questions.length;
    result.classList.add('result');

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Пройти снова';
    restartButton.classList.add('restart-button');
    restartButton.addEventListener('click', restartTest);
    result.appendChild(restartButton);
    
}

function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    result.innerHTML = '';
    testing.style.display = 'block';
    startButton.style.display = 'block';
    numberQuestion.style.display = 'none';
    questionElement.textContent = '';
    answers.innerHTML = '';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', nextQuestion)