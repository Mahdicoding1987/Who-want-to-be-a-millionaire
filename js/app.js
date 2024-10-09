

/*-------------- Constants -------------*/

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true},
            { text: "London", correct: false},
            { text: "Berlin", correct: false},
            { text: "Madrid", correct: false}
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "What is the largest country in the world by land area?",
        answers: [
            { text: "Russia", correct: true },
            { text: "China", correct: false },
            { text: "Canada", correct: false },
            { text: "United States", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for oxygen?",
        answers: [
            { text: "O", correct: true },
            { text: "H", correct: false },
            { text: "He", correct: false },
            { text: "C", correct: false }
        ]    
        },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "Fe", correct: true },
            { text: "Ag", correct: false },
            { text: "Cu", correct: false },
            { text: "Au", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for carbon?",
        answers: [
            { text: "C", correct: true },
            { text: "H", correct: false },
            { text: "O", correct: false },
            { text: "He", correct: false }
        ]
        },
        {
        question: "What is the chemical symbol for hydrogen?",
        answers: [
            { text: "H", correct: true },
            { text: "He", correct: false },
            { text: "O", correct: false },
            { text: "C", correct: false }
        ]
        }
]


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/

const who = document.querySelector('.who')
const startbtn = document.querySelector('.startBtn')
const allrightbtn = document.querySelector('.allrightBtn')
const thankBtn = document.querySelector('.thankBtn')
const ok = document.querySelector('.ok')
const questionTextEl = document.querySelector('#question-text')
const questionContainerEl = document.querySelector('.question-container')
const progressConatinerEl = document.querySelector('.progress-container')
const answerBtnsEl = document.querySelector('.answerBtns')

const answerBtnOne = document.querySelector('.answerBtnOne')
const answerBtnTwo = document.querySelector('.answerBtnTwo')
const answerBtnThree = document.querySelector('.answerBtnThree')
const answerBtnFour = document.querySelector('.answerBtnFour')

const restartBtnEl = document.querySelector('.restartBtn')

const nextBtnOne = document.querySelector('.nextBtnOne')
const nextBtnTwo = document.querySelector('.nextBtnTwo')
const nextBtnThree = document.querySelector('.nextBtnThree')
const nextBtnFour = document.querySelector('.nextBtnFour')
const nextBtnFive = document.querySelector('.nextBtnFive')
const nextBtnSix = document.querySelector('.nextBtnSix')
const nextBtnSeven = document.querySelector('.nextBtnSeven')
const nextBtnEight = document.querySelector('.nextBtnEight')
const nextBtnNine = document.querySelector('.nextBtnNine')
const nextBtnTen = document.querySelector('.nextBtnTen')


/*--------------Question Functions -------------*/



function questionOne(){

    questionTextEl.textContent = questions[0].question;
    answerBtnOne.textContent = questions[0].answers[0].text;
    answerBtnTwo.textContent = questions[0].answers[1].text;
    answerBtnThree.textContent = questions[0].answers[2].text;
    answerBtnFour.textContent = questions[0].answers[3].text;


};

function questionTwo(){
   
    questionTextEl.textContent = questions[1].question;
    answerBtnOne.textContent = questions[1].answers[0].text;
    answerBtnTwo.textContent = questions[1].answers[1].text;
    answerBtnThree.textContent = questions[1].answers[2].text;
    answerBtnFour.textContent = questions[1].answers[3].text;
    answerBtnOne.removeEventListener('click', handleAnswerBtnOneQ1)
    answerBtnTwo.removeEventListener('click', handleAnswerBtnTwoQ1)
    answerBtnThree.removeEventListener('click', handleAnswerBtnThreeQ1)
    answerBtnFour.removeEventListener('click', handleAnswerBtnFourQ1)

};

function questionThree(){

    questionTextEl.textContent = questions[2].question;
    answerBtnOne.textContent = questions[2].answers[0].text;
    answerBtnTwo.textContent = questions[2].answers[1].text;
    answerBtnThree.textContent = questions[2].answers[2].text;
    answerBtnFour.textContent = questions[2].answers[3].text;
    answerBtnOne.removeEventListener('click', handleAnswerBtnOneQ2)
    answerBtnTwo.removeEventListener('click', handleAnswerBtnTwoQ2)
    answerBtnThree.removeEventListener('click', handleAnswerBtnThreeQ2)
    answerBtnFour.removeEventListener('click', handleAnswerBtnFourQ2)


};

function questionFour(){

    questionTextEl.textContent = questions[3].question;
    answerBtnOne.textContent = questions[3].answers[0].text;
    answerBtnTwo.textContent = questions[3].answers[1].text;
    answerBtnThree.textContent = questions[3].answers[2].text;
    answerBtnFour.textContent = questions[3].answers[3].text;

};

function questionFive(){

    questionTextEl.textContent = questions[4].question;
    answerBtnOne.textContent = questions[4].answers[0].text;
    answerBtnTwo.textContent = questions[4].answers[1].text;
    answerBtnThree.textContent = questions[4].answers[2].text;
    answerBtnFour.textContent = questions[4].answers[3].text;
};

function questionSix(){

    questionTextEl.textContent = questions[5].question;
    answerBtnOne.textContent = questions[5].answers[0].text;
    answerBtnTwo.textContent = questions[5].answers[1].text;
    answerBtnThree.textContent = questions[5].answers[2].text;
    answerBtnFour.textContent = questions[5].answers[3].text;
};

function questionSeven(){

    questionTextEl.textContent = questions[6].question;
    answerBtnOne.textContent = questions[6].answers[0].text;
    answerBtnTwo.textContent = questions[6].answers[1].text;
    answerBtnThree.textContent = questions[6].answers[2].text;
    answerBtnFour.textContent = questions[6].answers[3].text;
};

function questionEight(){

    questionTextEl.textContent = questions[7].question;
    answerBtnOne.textContent = questions[7].answers[0].text;
    answerBtnTwo.textContent = questions[7].answers[1].text;
    answerBtnThree.textContent = questions[7].answers[2].text;
    answerBtnFour.textContent = questions[7].answers[3].text;
};

function  questionNine(){

    questionTextEl.textContent = questions[8].question;
    answerBtnOne.textContent = questions[8].answers[0].text;
    answerBtnTwo.textContent = questions[8].answers[1].text;
    answerBtnThree.textContent = questions[8].answers[2].text;
    answerBtnFour.textContent = questions[8].answers[3].text;
};

function questionTen(){

    questionTextEl.textContent = questions[9].question;
    answerBtnOne.textContent = questions[9].answers[0].text;
    answerBtnTwo.textContent = questions[9].answers[1].text;
    answerBtnThree.textContent = questions[9].answers[2].text;
    answerBtnFour.textContent = questions[9].answers[3].text;
}
 
/*----------- Event Listeners ----------*/

startbtn.addEventListener('click', function(){
    who.textContent = "Let's get started!";
    startbtn.style.display = "none";
    allrightbtn.style.display = "inline";
   })
   
   allrightbtn.addEventListener('click', function(){
    who.textContent = "What is your name?";
    allrightbtn.style.display = "none";
    nameInput.style.display = "inline";
   })
   
   nameInput.addEventListener("keypress", function(event) {
       if (event.key === "Enter"){
    name = nameInput.value;
    who.textContent = `Welcome to our show ${name}!`;
    nameInput.style.display = "none";
    thankBtn.style.display = "inline";
   }})
   
   thankBtn.addEventListener('click', function(){
    who.textContent = "We are going to ask you ten question";
    who.style.fontSize = "80px";
    thankBtn.style.display = "none";
    ok.style.display = "inline";
    progressConatinerEl.classList.remove('hidden');
   
   })
   
   ok.addEventListener('click', function(){
    who.textContent = "Question 1";
    ok.style.display = "none";
    questionTextEl.classList.remove('hidden');
    questionContainerEl.classList.remove('hidden');
    questionOne();
   
   })

//==========================RESTRT BUTTON========================//

restartBtnEl.addEventListener('click', function(){
    location.reload();
})

//=============================================================//
//====================QUESTION ONE=============================//
//=============================================================//

function handleAnswerBtnOneQ1(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[0].answers[0].text === "Paris"){
        answerBtnOne.classList.add('rightBtn')
        who.textContent = "Correct! you won $1000!";
        nextBtnOne.style.display = "inline";
        pill1.classList.add('border');
    }
    
    else {
        answerBtnOne.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };

}
answerBtnOne.addEventListener('click',handleAnswerBtnOneQ1)
//=============================================================//

function handleAnswerBtnTwoQ1(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[0].answers[1].text === "Paris"){
        answerBtnTwo.classList.add('rightBtn')
        who.textContent = "Correct! you won $1000!"
        nextBtnOne.style.display = "inline";
        pill1.classList.add('border');
    }
    
    else {
        answerBtnTwo.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };
    nextBtnOne.style.display = "inline";
}
answerBtnTwo.addEventListener('click', handleAnswerBtnTwoQ1)
//=============================================================//
function handleAnswerBtnThreeQ1(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[0].answers[2].text === "Paris"){
        answerBtnThree.classList.add('rightBtn')
        who.textContent = "Correct! you won $1000"
        nextBtnOne.style.display = "inline";
        pill1.classList.add('border');
        }
    
    else {
        answerBtnThree.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };
    nextBtnOne.style.display = "inline";
}
answerBtnThree.addEventListener('click',handleAnswerBtnThreeQ1)
//=============================================================//
function handleAnswerBtnFourQ1(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[0].answers[3].text === "Paris"){
        answerBtnFour.classList.add('rightBtn')
        who.textContent = "Correct! you won $1000!"
        nextBtnOne.style.display = "inline";
        pill1.classList.add('border');
        }
    
    else {
        answerBtnFour.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };
    nextBtnOne.style.display = "inline";
}
answerBtnFour.addEventListener('click', handleAnswerBtnFourQ1)
// =============================================================//

function resetButtons(){
    answerBtnOne.classList.remove('rightBtn', 'wrongBtn');
    answerBtnOne.classList.add('btnShape');

    answerBtnTwo.classList.remove('rightBtn', 'wrongBtn');
    answerBtnTwo.classList.add('btnShape');

    answerBtnThree.classList.remove('rightBtn', 'wrongBtn');
    answerBtnThree.classList.add('btnShape');

    answerBtnFour.classList.remove('rightBtn', 'wrongBtn');
    answerBtnFour.classList.add('btnShape');
}

//=================================================================//
//======================HANDLE BUTTONS=============================//
//=================================================================//

function handleBtnOne(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();
       
    }else{
        resetButtons()
        who.textContent = "Question 2";
        nextBtnOne.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionTwo()
    }
}
nextBtnOne.addEventListener('click',handleBtnOne)
//=============================================================//
function handleBtnTwo(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();
       
    }else{
        resetButtons()
        who.textContent = "Question 3";
        nextBtnTwo.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionThree()
    }
}
nextBtnTwo.addEventListener('click',handleBtnTwo)
//=============================================================//
function handleBtnThree(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Question 4";
        nextBtnThree.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionFour()
    }
}
nextBtnThree.addEventListener('click',handleBtnThree)
//=============================================================//
function handleBtnFour(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Question 5";
        nextBtnFour.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionFive()
    }
}
nextBtnFour.addEventListener('click',handleBtnFour)
//=============================================================//
function handleBtnFive(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Question 6";
        nextBtnFive.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionSix()
    }
}
nextBtnFive.addEventListener('click',handleBtnFive)
//=============================================================//
function handleBtnSix(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Question 7";
        nextBtnSix.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionSix()
    }
}
nextBtnSix.addEventListener('click',handleBtnSix)

//=============================================================//
function handleBtnSeven(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Question 8";
        nextBtnSeven.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionSeven()
    }
}
nextBtnSeven.addEventListener('click',handleBtnSeven)
//=============================================================//
function handleBtnEight(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Question 9";
        nextBtnEight.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionEight()
    }
}
nextBtnEight.addEventListener('click',handleBtnEight)
//=============================================================//
function handleBtnNine(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Last Question";
        nextBtnNine.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionNine()
    }
}
nextBtnNine.addEventListener('click',handleBtnNine)
//=============================================================//
function handleBtnTen(){
    if(who.textContent.includes('Wrong!') ) {
        // restart game if wrong answer is given
        window.location.reload();

    }else{
        resetButtons()
        who.textContent = "Last Question";
        nextBtnTen.style.display = "none";
        questionTextEl.classList.remove('hidden');
        questionContainerEl.classList.remove('hidden');
        questionTen()
    }
}
//nextBtnTen.addEventListener('click',handleBtnTen)
//=============================================================//
//====================QUESTION TWO=============================//
//=============================================================//

function handleAnswerBtnOneQ2(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[1].answers[0].text === "Jupiter"){
        answerBtnOne.classList.add('rightBtn')
        who.textContent = "Correct! you won $3000!";
        nextBtnTwo.style.display = "inline";
        pill2.classList.add('border');
    }
    
    else {
        answerBtnOne.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };

}

answerBtnOne.addEventListener('click', handleAnswerBtnOneQ2)
//=============================================================//
function handleAnswerBtnTwoQ2(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[1].answers[1].text === "Jupiter"){
        answerBtnTwo.classList.add('rightBtn')
        who.textContent = "Correct! you won $3000!"
        nextBtnTwo.style.display = "inline";
        pill2.classList.add('border');
    }
    
    else {
        answerBtnTwo.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };
    nextBtnTwo.style.display = "inline";
}
answerBtnTwo.addEventListener('click', handleAnswerBtnTwoQ2)
//=============================================================//
function handleAnswerBtnThreeQ2(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[1].answers[2].text === "Jupiter"){
        answerBtnThree.classList.add('rightBtn')
        who.textContent = "Correct! you won $3000"
        nextBtnTwo.style.display = "inline";
        pill2.classList.add('border');
        }
    
    else {
        answerBtnThree.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };
    nextBtnTwo.style.display = "inline";
}
answerBtnThree.addEventListener('click',handleAnswerBtnThreeQ2)
//=============================================================//
function handleAnswerBtnFourQ2(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[1].answers[3].text === "Jupiter"){
        answerBtnFour.classList.add('rightBtn')
        who.textContent = "Correct! you won $3000!"
        nextBtnTwo.style.display = "inline";
        pill2.classList.add('border');
        }
    
    else {
        answerBtnFour.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };
    nextBtnTwo.style.display = "inline";
}
answerBtnFour.addEventListener('click', handleAnswerBtnFourQ2)

//===============================================================//
//====================QUESTION THREE=============================//
//===============================================================//

function handleAnswerBtnOneQ3(){
    if(who.textContent.includes('Correct!') || who.textContent.includes('Wrong!') ) {
        //  do nothing if any button has been answered
        return
    }

    if (questions[2].answers[0].text === "Paris"){
        answerBtnOne.classList.add('rightBtn')
        who.textContent = "Correct! you won $6000!";
        nextBtnTwo.style.display = "inline";
        pill3.classList.add('border');
    }
    
    else {
        answerBtnOne.classList.add('wrongBtn')
        who.textContent = "Wrong!";
    };

}
answerBtnOne.addEventListener('click',handleAnswerBtnOneQ3)