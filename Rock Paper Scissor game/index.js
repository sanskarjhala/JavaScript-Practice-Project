

//images fetching user
const userRock = document.querySelector(".user-rock");
const userSccisor = document.querySelector(".user-sccisor");
const userPaper = document.querySelector(".user-paper");

//images fecthing computer
const computerRock = document.querySelector(".computer-rock");
const computerSccisor = document.querySelector(".computer-sccisor");
const computerPaper = document.querySelector(".computer-paper");

//result display content fetching
const letGo = document.querySelector(".let-go-p");
const userWon = document.querySelector(".you-won-p");
const computerWon = document.querySelector(".computer-won-p")
const gameDraw = document.querySelector(".draw");

let resultDisplay;


let userChoice ;


//initially
userRock.classList.add("active");
computerRock.classList.add("active");
letGo.classList.add("active");

const possibleChoices = document.querySelectorAll(".button");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) =>{
    userChoice = e.target.id;

    if(userChoice === "rock") {
        userPaper.classList.remove("active");
        userSccisor.classList.remove("active");
        userRock.classList.add("active");
    }
    if(userChoice === "sccisor"){
        userRock.classList.remove("active");
        userPaper.classList.remove("active");
        userSccisor.classList.add("active");
    }

    if(userChoice === "paper"){
        userRock.classList.remove("active");
        userSccisor.classList.remove("active");
        userPaper.classList.add("active");
    }

    generateComputerChoice();
    

    getResult();

}))

let computerChoice;

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) +1;
    // console.log(randomNumber);

    if(randomNumber === 1){
        //computer choches rock
        computerChoice = "rock";
        computerSccisor.classList.remove("active");
        computerPaper.classList.remove("active");
        computerRock.classList.add("active");
    }

    if(randomNumber === 2){
        //computer choices sccisor
        computerChoice="sccisor";
        computerRock.classList.remove("active");
        computerPaper.classList.remove("active");
        computerSccisor.classList.add("active");
    }

    if(randomNumber === 3){
        //computer choices paper
        computerChoice = "paper";
        computerRock.classList.remove("active");
        computerSccisor.classList.remove("active");
        computerPaper.classList.add("active");
    }
    
}

let userScore = document.querySelector("[data-userScore]");
let computerScore = document.querySelector("[data-computerScore]");



function getResult(){

    letGo.classList.remove("active");

    let userCount = parseInt(userScore.innerText);
    let computerCount = parseInt(computerScore.innerText);
    

    if(computerChoice === userChoice){
        userWon.classList.remove("active");
        computerWon.classList.remove("active");
        gameDraw.classList.add("active");

    }

    if(computerChoice === "rock" && userChoice ==="sccisor"){
        userWon.classList.remove("active");
        gameDraw.classList.remove("active");
        computerWon.classList.add("active");

        computerCount= computerCount+1;

    }//computer won

    if(computerChoice === "rock" && userChoice ==="paper"){
        gameDraw.classList.remove("active");
        computerWon.classList.remove("active");
        userWon.classList.add("active");

        userCount=userCount+1;
    }//user won

    if(computerChoice === "paper" && userChoice ==="rock"){
        userWon.classList.remove("active");
        gameDraw.classList.remove("active");
        computerWon.classList.add("active");

        computerCount= computerCount+1;
    }//computer won

    if(computerChoice === "paper" && userChoice ==="sccisor"){
        gameDraw.classList.remove("active");
        computerWon.classList.remove("active");
        userWon.classList.add("active");

        userCount=userCount+1;
    }//user won

    if(computerChoice === "sccisor" && userChoice ==="rock"){
        gameDraw.classList.remove("active");
        computerWon.classList.remove("active");
        userWon.classList.add("active");

        userCount=userCount+1;
    }//user won

    if(computerChoice === "sccisor" && userChoice ==="paper"){
        userWon.classList.remove("active");
        gameDraw.classList.remove("active");
        computerWon.classList.add("active");

        computerCount= computerCount+1;
    }//computer won
    console.log(userCount);
    console.log(computerCount);

    userScore.innerText = userCount;
    computerScore.innerText=computerCount;

}

const resetScoreButton = document.querySelector(".reset-score");
resetScoreButton.addEventListener("click" , () => {
    userCount =0;
    computerCount=0;

    userScore.innerHTML = userCount;
    computerScore.innerHTML=computerCount;

    userWon.classList.remove("active");
    computerWon.classList.remove("active");
    gameDraw.classList.remove("active");

    letGo.classList.add("active");

})
