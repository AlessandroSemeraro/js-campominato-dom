const button = document.querySelector('button');

const mainContentEl=document.querySelector('main section.container');

//click event//
button.addEventListener("click", function() {

    mainContentEl.innerHTML='';

    for(let i = 1; i <= 100; i++){
        const newSquare = createSquare();
        mainContentEl.appendChild(newSquare);

        newSquare.addEventListener('click',function(){
            const contentSquare = i;
            newSquare.innerHTML = contentSquare;
            newSquare.classList.toggle('clicked-blue'); 
            console.log(contentSquare);
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

