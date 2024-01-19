let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");

const genCompChoice=()=>{
   const options = ["rock","paper","scissors"] ;
   const idx = Math.floor(Math.random()*3);
   return options[idx]; 
}

const drawGame=()=>{

    msg.innerText = "Draw.Play Again.";
    msg.style.backgroundColor = "#081b31"
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userSc.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compSc.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red"
    }
}

const playGame=(userChoice)=>{
    
   const compChoice = genCompChoice();

   if(userChoice===compChoice){
    //draw
     drawGame();
   }
   else{
    let userWin = true;
    if(userChoice==="rock"){
        //sc,pap
        userWin = compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin = compChoice === "scissors"?false:true;
    }else{
        userWin = compChoice==="rock"? false:true;
    }
    showWinner(userWin)
   }
}


choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
      let userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
})