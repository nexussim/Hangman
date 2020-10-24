// const fileSelector = document.getElementById('file-selector');
  
// fileSelector.addEventListener('change', (event) => {
//     const fileList = event.target.files;
//     console.log(fileList);
// });

let word = document.getElementById('word');
let wordContainer = document.getElementById('wordContainer');
let headContainer = document.getElementById('headContainer');
let bodyContainer = document.getElementById('bodyContainer');
let mainBody = document.getElementById('mainBody');
let armOne = document.getElementById('armOne');
let armTwo = document.getElementById('armTwo');
let failMsg = document.getElementById('failMsg');
let victoryMsg = document.getElementById('victoryMsg');


let words = ['hello', 'how', 'are', 'you', 'friend'];

function randomInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let integer = randomInteger(4)
let randomWord = words[integer];
let numOfGuesses = 0;
let correctGuesses = 0;

const letterInput = () => {
  for (let i = 0; i < randomWord.length; i++) {
    let letterBoxes = document.createElement('div');
    letterBoxes.setAttribute('id', 'lettersUnderScore');
    wordContainer.appendChild(letterBoxes);
    letterBoxes.textContent = 'A'

    let lettersUnderScore = document.createElement('div');
    lettersUnderScore.setAttribute('id', 'lettersUnderScore');
    letterBoxes.appendChild(lettersUnderScore);
    lettersUnderScore.textContent = '_';

    
  }
}

letterInput()

const letterGuess = (letter) => {
  letter = letter.textContent;
  for (let i = 0; i < randomWord.length; i++) {
    if (letter === randomWord[i]) {
      console.log(randomWord[i]);
      correctGuesses++
      break;
    } 
  }
    if (correctGuesses === 0) {
        numOfGuesses++;
        hangman();
    }
  
}

const hangman = () => {
  if (numOfGuesses === 1) {
    let circle = document.createElement('div');
    headContainer.appendChild(circle);
    circle.setAttribute('id', 'circle');
  }

  if (numOfGuesses === 2) {
    let stickBody = document.createElement('div');
    mainBody.appendChild(stickBody);
    stickBody.setAttribute('id', 'stickBody');
  }

  if (numOfGuesses === 3) {
    let leftArm = document.createElement('div');
    armOne.appendChild(leftArm);
    leftArm.setAttribute('id', 'leftArm');
  }

  if (numOfGuesses === 4) {
    let rightArm = document.createElement('div');
    armTwo.appendChild(rightArm);
    rightArm.setAttribute('id', 'rightArm');
  }

  if (numOfGuesses === 5) {
    let leftLeg = document.createElement('div');
    legContainer.appendChild(leftLeg);
    leftLeg.setAttribute('id', 'leftLeg');
  }

  if (numOfGuesses === 6) {
    let rightLeg = document.createElement('div');
    legContainer.appendChild(rightLeg);
    rightLeg.setAttribute('id', 'rightLeg');
    failMsg.textContent = "Sorry, please try again!";
  }
}



