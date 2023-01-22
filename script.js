
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click',()=>{
    currectQuestionIndex++
    setNextQuestion()
})





function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random() -0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizScore=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.foreach((answer)=>{
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).foreach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nexttButton.classList.remove('hide')
    }else{
        startButton.innerText = "restart"
        startButton.classList.remove('hide')
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }
    document.getElementById('right-answers').innerHTML=quizScore
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}
 
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
{
    question: 'which one of these is a javascript framework?'
    answers:[
        {text:'python', correct:false},
        {text:'django', correct:false},
        {text:'React', correct:true},
        {text:'Eclipse', correct:false}
             ]
},
{
    question: 'Who is the prime minister of India'
    answers:[
        {text:'Manmohan Singh', correct:false},
        {text:'Narendra Modi', correct:true},
        {text:'Jawaharlal Nehru', correct:false},
        {text:'None of these', correct:false}
         ]
},
{
    question: 'What is 4*3'
    answers:[
        {text:'Twelve', correct:true},
        {text:'7', correct:false},
        {text:'3', correct:false},
        {text:'None of these', correct:false}
         ]
},             
          ]