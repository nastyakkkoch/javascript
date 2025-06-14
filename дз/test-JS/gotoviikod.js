const questions = [
    {
        type: 'choice',
        question: "Какое насекомое охраняет лесные поляны от вредных мух?",
        answers: ["Кузнечик", "Шмель", "Стрекоза"],
        correctAnswer: "Стрекоза"
    },
    {
        type: 'choice',
        question: "Какому животному стоят памятники в Токио и Париже?",
        answers: ["Саламандре", "Червяку", "Лягушке"],
        correctAnswer: "Лягушке"
    },
    {
        type: 'choice',
        question: "Какое животное бежит, выставляя вперед задние ноги?",
        answers: ["Заяц", "Тигр", "Косуля"],
        correctAnswer: "Заяц"
    },
    {
        type: 'input',
        question: "Сколько у котика лап?",
        correctAnswer: "4"
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

    answers.innerHTML = "";

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
        input.style.fontSize = '20px';
        input.style.padding = '10px';
        input.style.borderRadius = '10px';
        input.style.border = '1px solid #ccc';
        input.style.marginTop = '20px';
        input.style.width = '100%';
        
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Подтвердить';
        submitButton.addEventListener('click', function() {
            selectAnswer({target: input});
        });
        
        answers.appendChild(input);
        answers.appendChild(submitButton);
        
        submitButton.style.backgroundColor = 'rgb(228, 245, 143)';
        submitButton.style.borderRadius = '20px';
        submitButton.style.border = 'none';
        submitButton.style.marginTop = '20px';
        submitButton.style.fontSize = '20px';
        submitButton.style.padding = '10px 20px';
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
    result.style.fontWeight = '500';
    result.style.textAlign = 'center';
    result.style.marginTop = '50px';
    
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Пройти тест снова';
    restartButton.addEventListener('click', restartTest);
    result.appendChild(restartButton);
    
    restartButton.style.backgroundColor = 'rgb(76, 172, 98)';
    restartButton.style.cursor = 'pointer';
    restartButton.style.fontSize = '20px';
    restartButton.style.padding = '10px 20px';
    restartButton.style.border = 'none';
    restartButton.style.borderRadius = '30px';
    restartButton.style.display = 'block';
    restartButton.style.margin = '20px auto';
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

nextButton.addEventListener('click', nextQuestion);