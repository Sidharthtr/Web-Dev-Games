const fruit = [
    {
        name:"apple",
        img:'img/apple.avif'
    },
    {
        name:'grape',
        img:'img/grape.avif'
    },
    {
        name:'mango',
        img:'img/mango.jpg'
    },
    {
        name:'orange',
        img:'img/orange.avif'
    },
    {
        name:'straw_berry',
        img:'img/straw berry.avif'
    },
    {
        name:'water_melon',
        img:'img/watermelon.png'
    },
    {
        name:"apple",
        img:'img/apple.avif'
    },
    {
        name:'grape',
        img:'img/grape.avif'
    },
    {
        name:'mango',
        img:'img/mango.jpg'
    },
    {
        name:'orange',
        img:'img/orange.avif'
    },
    {
        name:'straw_berry',
        img:'img/straw berry.avif'
    },
    {
        name:'water_melon',
        img:'img/watermelon.png'
    }
]

fruit.sort(()=>0.5-Math.random());

const grid = document.querySelector("#grid");
const score = document.querySelector('#result');
let cardChoosen = [];
let cardChoosenId = [];
let point = 0;

function createBoard(){
    for(let i=0;i<fruit.length;i++){
        const card = document.createElement('img');
        card.style.width = '150px';
        card.style.height = '150px';
        card.setAttribute('src','img/puzzle.jpg');
        card.setAttribute('data-id',i);
        card.addEventListener("click",flip);
        grid.appendChild(card);
    }
}

function checkMatch(){
   const cards = document.querySelectorAll('img');
   let card1 = cardChoosenId[0];
   let card2 = cardChoosenId[1];

   if(cardChoosen[0]===cardChoosen[1]){
     cards[card1].setAttribute('src',"img/white.jpg");
     cards[card2].setAttribute('src',"img/white.jpg");
     cards[card1].removeEventListener("click",flip);
     cards[card2].removeEventListener("click",flip);
     point++;
     
   }else{
    cards[card1].setAttribute('src',"img/puzzle.jpg");
     cards[card2].setAttribute('src',"img/puzzle.jpg");
   }
   score.innerHTML = point;
   cardChoosen = [];
   cardChoosenId = [];
   if(point==6){
    score.innerHTML = "Congratulations!"
   }
}

function flip(){
    const cardId = this.getAttribute('data-id');
    cardChoosen.push(fruit[cardId].name);
    cardChoosenId.push(cardId);
    this.setAttribute('src',fruit[cardId].img);
    if(cardChoosen.length===2)
    setTimeout(checkMatch,500);
}
createBoard();