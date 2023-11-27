const button = document.querySelector('button');

const mainContentEl=document.querySelector('main section.container');

let turnCounter=0;

const numberBombs = 16;

const numberCells = 100;

//SCORE//
const scoreboardEl = document.getElementById('score');
let userScore = 0;

let isGameOver = false;

//click event//
button.addEventListener("click", function() {
    resetGame();
    mainContentEl.innerHTML='';

    const bombs = [];
    while( bombs.length < numberBombs){
        let randomNumber = getRandomNumber(1, numberCells)
        if ( !bombs.includes(randomNumber) ){
            bombs.push(randomNumber);
        }
    }
    console.log(bombs)

    for(let i = 1; i <= numberCells ; i++){
        const newSquare = createSquare();  
        mainContentEl.appendChild(newSquare);
        
        newSquare.addEventListener('click',function(){
            if (isGameOver) return; 
            const contentSquare = i;
            newSquare.innerHTML = contentSquare;
            
           // newSquare.classList.toggle('clicked-blue'); 
            //console.log(contentSquare);

            if (bombs.includes(contentSquare)){
                newSquare.classList.add('bg-red');
                isGameOver = true;
                
            } else {
                newSquare.classList.add('bg-blue');
                turnCounter++;
                updateCurrentScore();
                console.log(userScore)
                if( turnCounter == (numberCells - numberBombs)){
                    isGameOver=true
                }
            }
            
        },  
        { once: true }

)}
})
  
//FUNCTION//

//QUADRATO//
function createSquare(){
const newSquareEl = document.createElement('div');
newSquareEl.classList.add('square');
newSquareEl.classList.add('flex-aj-cent');
return newSquareEl
}

//RANDOM NUMBER//
function getRandomNumber(minNumber, maxNumber){
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}

//SCORE//
function updateCurrentScore(){
    userScore += 1;
    scoreboardEl.innerText = userScore;
}

//CELLE BOMBE//
function showBombCells(){
    const bombElements = document.querySelectorAll('article.bg-red');
    for (let index = 0; index < bombElements.length; index++) {
        const bombElement = bombElements[index];
        bombElement.classList.add('clicked');
        bombElement.innerHTML = `<span> <i class="fa-solid fa-bomb fa-beat"></i> </span>`;
    }
}

//END GAME//
function resetGame (){
    userScore = 0;
    turnCounter=0;
    isGameOver = false;
    scoreboardEl.innerText= userScore;
}

//WIN//
function winGame (){
    resetGame();
}