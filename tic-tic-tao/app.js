let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turn0 = true;
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#new-btn");
let reset = document.querySelector("#reset-btn");
let count = 0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turn0){
            count = count+1;
            box.innerText = "X";
            turn0 = false;
        }else{
            count = count+1;
            box.style.color = "rgb(136, 64, 156)";
            box.innerText = "0";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner(count);
    })
});

const disableBoxes=()=>{
    for(let b of boxes){
        b.disabled = true;
    }
}
const enableBoxes=()=>{
    for(let b of boxes){
        b.disabled = false;
        b.innerText = "";
    }
}

const resetGame =()=>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const showWinner =(winner)=>{
    disableBoxes();
    msg.innerText = `Congratulations,Winner is ${winner}` ;
    msgContainer.classList.remove("hide");
}

const showDraw =()=>{
    msg.innerText = `Game is Draw` ;
    msgContainer.classList.remove("hide");
}

const checkWinner=(count)=>{
    for(let p of winPattern){
        let val1 = boxes[p[0]].innerText;
        let val2 = boxes[p[1]].innerText;
        let val3 = boxes[p[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2==val3){
               showWinner(val1) ;
            }
            else if(count==9){
                showDraw();
            }
        }
    }
  
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);