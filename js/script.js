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
            const contentSquare = i;
            newSquare.innerHTML = contentSquare;
            
           // newSquare.classList.toggle('clicked-blue'); 
            //console.log(contentSquare);

            if (bombs.includes(contentSquare)){
                newSquare.classList.toggle('bg-red');
                resetGame();
                
            } else {
                newSquare.classList.toggle('bg-blue');
                turnCounter++;
                updateCurrentScore();
                if( turnCounter == (numberCells - numberBombs)){
                    winGame()
                }
            }
            
        }
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
    userScore++;
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
    turnCounter=0
    isGameOver = false;
    updateCurrentScore(userScore);
    
}

//WIN//
function winGame (){
    resetGame();
}