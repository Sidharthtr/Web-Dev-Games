//variable declaration

var cvs=document.getElementById("canvas").getContext("2d");
var sPosx=80;
var sPosy=80;
var fPosx=140;
var fPosy=140;
var nPosx=0;
var nPosy=0;
var snakeTail=[];
var snakeSize=1;
var score=0;
var status="ready";

//loading

window.onload=function(){
    document.addEventListener("keydown",inputControl)
  game= setInterval(mainGame,200);
}


//main game function

function mainGame(){

    document.getElementById("score").innerHTML=score;
    document.getElementById("status").innerHTML=status;

    //snake movement

    sPosx+=nPosx;
    sPosy+=nPosy;

    if(sPosx>400){
        sPosx=0;
    }

    if(sPosy>400){
        sPosy=0;
    }

    if(sPosx<0){
        sPosx=400;
    }

    if(sPosy<0){
        sPosy=400;
    }

    //fruit movement

    if(sPosx==fPosx&&sPosy==fPosy){
        snakeSize++;
        score+=10;
       fPosx=Math.floor(Math.random()*20)*20;
       fPosy=Math.floor(Math.random()*20)*20;
    }
    //game area

    //background
    cvs.fillStyle ="black";
    cvs.fillRect(0,0,400,400)

    for(var vl=0;vl<400;vl+=20){
        cvs.moveTo(vl,0);
        cvs.lineTo(vl,400);
    }

    for(var hl=0;hl<400;hl+=20){
        cvs.moveTo(0,hl);
        cvs.lineTo(400,hl);
    }
    cvs.strokeStyle="gray"
    cvs.stroke();

    //snake
    cvs.fillStyle ="red";
    for(var i=0;i<snakeTail.length;i++){

    cvs.fillRect(snakeTail[i].x,snakeTail[i].y,20,20)

    if(sPosx==snakeTail[i].x&&sPosy==snakeTail[i].y&&snakeSize>1){
       
        clearInterval(game);
        status="Game Over";
        document.getElementById("status").innerHTML=status;
    }
}

// fruit
    cvs.fillStyle ="yellow";
    cvs.fillRect(fPosx,fPosy,20,20)

    snakeTail.push({x:sPosx,y:sPosy})
    while(snakeTail.length>snakeSize){
        snakeTail.shift();
    }
}

function inputControl(e){
    switch(e.keyCode){
        case 38:
         nPosy-=20;
        nPosx=0;
        break;

        case 40://down
        nPosx=0;
        nPosy+=20;
        break;

        case 39://right
        nPosx+=20;
        nPosy=0;
        break;

        case 37://left
        nPosx-=20;
        nPosy=0;
        break;
    }
    if(e.keyCode==37||e.keyCode==38||e.keyCode==39||e.keyCode==40){
        status="Game started";
        document.getElementById("status").innerHTML=status;
    }
}