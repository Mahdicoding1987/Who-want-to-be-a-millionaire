//====================QUESTION ONE=============================//

answerBtnOne.addEventListener('click', function(){
    if (questions[0].answers[0].text === "Paris"){
        answerBtnOne.style.backgroundColor = "green";
        answerBtnOne.style.color = "white";
        who.textContent = "Correct!";}
    
    else {
        answerBtnOne.style.backgroundColor = "red";
        answerBtnOne.style.color = "white";
        who.textContent = "Wrong!";
    };
    nextBtnOne.style.display = "inline";
}
)
//=============================================================//

answerBtnTwo.addEventListener('click', function(){
    if (questions[0].answers[1].text === "Paris"){
        answerBtnTwo.style.backgroundColor = "green";
        answerBtnTwo.style.color = "white";
        who.textContent = "Correct!";}
    
    else {
        answerBtnTwo.style.backgroundColor = "red";
        answerBtnTwo.style.color = "white";
        who.textContent = "Wrong!";
    };
    nextBtnOne.style.display = "inline";
}
)
//=============================================================//

answerBtnThree.addEventListener('click', function(){
    if (questions[0].answers[2].text === "Paris"){
        answerBtnThree.style.backgroundColor = "green";
        answerBtnThree.style.color = "white";
        who.textContent = "Correct!";}
    
    else {
        answerBtnThree.style.backgroundColor = "red";
        answerBtnThree.style.color = "white";
        who.textContent = "Wrong!";
    };
    nextBtnOne.style.display = "inline";
}
)
//=============================================================//

answerBtnFour.addEventListener('click', function(){
    if (questions[0].answers[3].text === "Paris"){
        answerBtnFour.style.backgroundColor = "green";
        answerBtnFour.style.color = "white";
        who.textContent = "Correct!";}
    
    else {
        answerBtnFour.style.backgroundColor = "red";
        answerBtnFour.style.color = "white";
        who.textContent = "Wrong!";
    };
    nextBtnOne.style.display = "inline";
}
)