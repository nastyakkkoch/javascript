const questions = [
    {
        type: 'choice',
        question: 'Какое насекомое охраняет лесные поляны от вредных мух?',
        answers: ['Кузнечик', 'Шмель', 'Стрекоза'],
        correctAnswer: 'Стрекоза'
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
const questionElement = document.getElementById('question');
const answers = document.getElementById('answers');
const nextButton = document.getElementById('nextQuestion');
const result = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
    loadQuestion();
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionElement.style.fontSize = '30px';
    questionElement.style.fontWeight = '600';
    questionElement.style.marginBottom = '20px';

    answers.innerHTML = '';

    if (currentQuestion.type === 'choice') {
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', selectAnswer);
            answers.appendChild(button);

            button.style.backgroundColor = 'rgb(228, 245, 143)';
            button.style.borderRadius = '20px';
            button.style.border = 'none';
            button.style.display = 'flex';
            button.style.flexDirection = 'column';
            button.style.marginTop = '20px';
            button.style.fontSize = '30px';
            button.style.padding = '10px 30px';
            button.style.cursor = 'pointer';
        });
    } else if (currentQuestion.type === 'input') {
        const input = document.createElement('input');
        input.type = 'text';
        input.style.fontSize = '30px';
        input.style.padding = '10px 30px';
        input.style.border = '1px solid black';
        input.style.borderRadius = '20px';
        input.style.marginBottom = '20px';


        const submitButton = document.createElement('button');
        submitButton.textContent = 'Ответить';
        submitButton.style.backgroundColor = 'rgb(228, 245, 143)';
        submitButton.style.borderRadius = '20px';
        submitButton.border = 'none';
        submitButton.style.fontSize = '30px';
        submitButton.style.padding = '10px 30px';
        submitButton.style.cursor = 'pointer';
        submitButton.style.marginLeft = '20px';
        submitButton.addEventListener('click', function() {
            selectAnswer({target: input});
        });

        answers.appendChild(input);
        answers.appendChild(submitButton);

        submitButton.style.cursor = 'pointer';
    }
}

function selectAnswer(event) {
    let selectedAnswer;

    if (event.target.tagName === 'INPUT') {
        selectedAnswer = event.target.value;
    } else {
        selectedAnswer = event.target.textContent;
    }

    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
    }

    nextButton.style.display = 'block';
    nextButton.style.backgroundColor = 'rgb(228, 245, 143)';
    nextButton.style.border = 'none';
    nextButton.style.borderRadius = '15px';
    nextButton.style.marginInline = 'auto';
    nextButton.style.fontSize = '25px';
    nextButton.style.fontWeight = '600';

    const buttons = answers.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id !== 'nextQuestion') {
            button.removeEventListener('click', selectAnswer);
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    testing.style.display = 'none';
    result.textContent = "Количество правильных ответов: " + score + " из " + questions.length;
    result.style.fontSize = '30px';
    result.style.marginTop = '100px'
    result.style.fontWeight = '500';
    result.style.textAlign = 'center';
    result.style.marginTop = '250px';
    result.style.display = 'block';


    const restartButton = document.createElement('button');
    restartButton.textContent = 'Пройти снова';

    restartButton.style.backgroundColor = 'rgb(139, 199, 127)';
    restartButton.style.border = 'none';
    restartButton.style.borderRadius = '15px';
    restartButton.style.marginInline = 'auto';
    restartButton.style.marginTop = '50px';
    restartButton.style.fontSize = '25px';
    restartButton.style.fontWeight = '600';
    restartButton.addEventListener('click', restartTest);
    result.appendChild(restartButton);
    restartButton.style.display = 'block';
    restartButton.style.padding = '15px 25px';
}

function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    result.innerHTML = '';
    testing.style.display = 'block';
    startButton.style.display = 'block';
    questionElement.textContent = '';
    answers.innerHTML = '';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', nextQuestion)