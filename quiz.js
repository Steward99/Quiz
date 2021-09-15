const questions = [
    {
        question : 'Siapa manusia yang paling ganteng dari pilihan berikut ini?',
        answers : [
            {choice : 'Hu Yi Tian', correct : false},
            {choice : 'Song Wei Long', correct : false},
            {choice : 'Lin Yi', correct : false},
            {choice : 'Huang Jian Zhuang', correct : true}
        ]
        
    },
    {
        question : 'siapakah orang yang paling disayang dari pilihan berikut ini?',
        answers : [
            {choice : 'Titiw', correct : false},
            {choice : 'Ete', correct : false},
            {choice : 'Steward', correct : true},
            {choice : 'Oto', correct : false}
        ]
    },
    {
        question : 'seberapa banyak kah nilai sayangmu kepada titiw?',
        answers : [
            {choice : '00', correct : true},
            {choice : '77', correct : false},
            {choice : '55', correct : false},
            {choice : '44', correct : false}
        ]
    },
    {
        question : 'where is the great wall of China located?',
        answers : [
            {choice : 'Korea', correct : false},
            {choice : 'India', correct : false},
            {choice : 'Vietnam', correct : false},
            {choice : 'China', correct : true}
        ]
    },
    {
        question : 'What is 15 x (15 x 15) + 0',
        answers : [
            {choice : '240', correct : true},
            {choice : '16', correct : false},
            {choice : '0', correct : false},
            {choice : '1', correct : false}
        ]
    },

]
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const newQuestion = document.getElementById('question-con')
const questionElement = document.getElementById('question')
const answerElements = document.getElementById('answers')
let shuffleQuestion, currentQuestion

startBtn.addEventListener('click',startGame)
nextBtn.addEventListener('click', () => {
    nextBtn.classList.add('hide')
    currentQuestion++;
    setNextQuestion()
})

function startGame(){
    console.log('clicked')
    startBtn.classList.add('hide')
    newQuestion.classList.remove('hide')
    shuffleQuestion = questions.sort(() => Math.random() - 0.5)
    currentQuestion = 0 
    setNextQuestion()
    
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestion[currentQuestion])
}

function resetState(){
    clearStatusElement(document.body)
    nextBtn.classList.add('hide')
    while(answerElements.firstChild){
        answerElements.removeChild(answerElements.firstChild)
    }
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.choice
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerElements.appendChild(button)
    })
}

function selectAnswer(e){
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body , correct)
    Array.from(answerElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffleQuestion.length > currentQuestion + 1){
        nextBtn.classList.remove('hide')
    } else{
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct){
    clearStatusElement(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusElement(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}