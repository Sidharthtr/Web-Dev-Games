const grid = document.querySelector(".grid");
const score = document.getElementById("score");
console.log(score);
let point = 0;

let timeId;
let xDir = -2;
let yDir = 2;

const blockWidth = 100;
const blockHeight = 20;

const ballDiameter = 20;

const userStart = [230,10];
let curr = userStart;

const boardWidth = 560;
const boardHeight =300;

const ballStart = [230,40];
let currBall = ballStart;
// const userWidth = 100;
// const userHeight = 20;

class Block{
   constructor(xAxis,yAxis){
    this.bottomLeft = [xAxis , yAxis]
    this.bottomRight = [xAxis + blockWidth , yAxis]
    this.topLeft = [xAxis , yAxis + blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
   }
}

const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210)
    
]


function addBlocks(){
    for(let i=0;i<blocks.length;i++){
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocks[i].bottomLeft[0]+"px";
        block.style.bottom = blocks[i].bottomLeft[1]+"px";

        // block.style.left = "10px";
        // block.style.bottom = "470px";

        grid.appendChild(block);
    }
    
}

addBlocks();

//user board

const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

//board left-right movement functon

function drawUser(){
    user.style.left = curr[0]+"px";
    user.style.bottom = curr[1]+"px";
}

//user movement

function moveUser(e){
   switch(e.key){
    case 'ArrowLeft':
        if(curr[0]>0){
        curr[0] -=10;
        drawUser();
        }
        break;

     case 'ArrowRight':
        if(curr[0]<boardWidth-blockWidth){
            curr[0] +=10;
            drawUser(); 
        } 
        break; 
   }
}

document.addEventListener("keydown",moveUser);

//ball

const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

function drawBall(){
    ball.style.left = currBall[0]+"px";
    ball.style.bottom = currBall[1]+ "px";
}

function moveBall(){
    currBall[0] += xDir;
    currBall[1] +=yDir;
    drawBall();
    checkCollision();
}

timeId = setInterval(moveBall,30);

function checkCollision(){
for(let i=0;i<blocks.length;i++){
   if(currBall[0]>blocks[i].bottomLeft[0] && currBall[0]<blocks[i].bottomRight[0]
     && currBall[1]+ballDiameter > blocks[i].bottomLeft[1] && 
     currBall[1]<blocks[i].topLeft[1]){
        const allBlocks = Array.from(document.querySelectorAll(".block"));
         allBlocks[i].classList.remove("block");
         blocks.splice(i,1);
         changeDirection();
         point++;
         score.innerHTML = point;
    }

}

    if(currBall[0]>=(boardWidth-ballDiameter) ||
    (currBall[0]<=0)||currBall[1]>=boardHeight-ballDiameter)
    changeDirection();

    if(currBall[0]>curr[0] && currBall[0]<curr[0]+blockWidth && 
    currBall[1]>curr[1] && currBall[1]< curr[1]+blockHeight){
        changeDirection();
    }

      if(currBall[1]<=0){
        clearInterval(timeId);
        console.log("Game over");
      }
}

function changeDirection(){
    if((xDir===2 && yDir===2)){
        yDir=-2;
        return;
    }
   if(xDir===2 && yDir===-2){
       xDir = -2;
       return;
   }
   if(xDir===-2 && yDir===-2){
      yDir = 2;
   }
    if((xDir===-2 && yDir===2)){
        xDir=2;
        return;
    }

}

// function changeDirection1(){
//     if(xDir===2 && yDir===2){
//         yDir=-2;
//         return;
//     }
//     if(xDir===-2 && yDir===2){
//         yDir===-2;
//         return;
//     }
// }