/* ACCESS WORD FROM FILE */
// const fileSelector = document.getElementById('file-selector');
  
// fileSelector.addEventListener('change', (event) => {
//     const fileList = event.target.files;
//     console.log(fileList);
// });

let word = document.getElementById('word');
let wordContainer = document.getElementById('wordContainer');
let headContainer = document.getElementById('headContainer');
let bodyContainer = document.getElementById('bodyContainer');
let letterBoxes = document.getElementsByClassName('letterBoxes');
let input = document.getElementById('letterInput');
let letterGuesses = document.getElementById('letterGuesses');
let previousGuessesValue = '';
let mainBody = document.getElementById('mainBody');
let armOne = document.getElementById('armOne');
let armTwo = document.getElementById('armTwo');
let failMsg = document.getElementById('failMsg');
let victoryMsg = document.getElementById('victoryMsg');


let words = ['hello', 'how', 'are', 'you', 'friend'];
let previousLetters = [];

/* Get random word. */

function randomInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let integer = randomInteger(4)
let randomWord = words[integer];
let numOfWrongGuesses = 0;
let correctGuesses = 0;


const letterInput = (letter) => {
  for (let i = 0; i < randomWord.length; i++) {
    let letterBoxes = document.createElement('div');
    letterBoxes.setAttribute('class', 'letterBoxes');
    wordContainer.appendChild(letterBoxes);

    /* Placeholder for stylings */
    letterBoxes.textContent = 'a';

    let lettersUnderScore = document.createElement('div');
    lettersUnderScore.setAttribute('class', 'lettersUnderScore');
    letterBoxes.appendChild(lettersUnderScore);
    lettersUnderScore.textContent = '_';
  }
}

letterInput()

const correctLetter = (letter, index) => {
  letterBoxes[index].textContent = letter;
  letterBoxes[index].style.visibility = 'visible';
}

const letterGuess = (letter) => {
  let input = letter.target;
  letter = input.value.toLowerCase();
  input.value = '';
  previousLetters.push(letter)
  for (let i = 0; i < randomWord.length; i++) {

    /* CHECK FOR DUPLICATE AND CORRECT VALUE */
    
    if (letter === randomWord[i]) {
      let duplicateLetter = randomWord.includes(randomWord[i], i + 1);
      let currentLetter = randomWord[i];
      correctGuesses++
      if (duplicateLetter) {
        for (let j = 0; j < randomWord.length; j++) {
          if (randomWord[j] === currentLetter) {
            correctLetter(letter, j);
            previousGuesses();
          }
        }
      } else {
        correctLetter(letter, i);
        previousGuesses();
        break;
      }
    } 
  }
    if (correctGuesses === 0) {
        numOfWrongGuesses++;
        hangman();
        previousGuesses();
        correctGuesses = 0;
    }
    victory();
    correctGuesses = 0;
}

const previousGuesses = () => {
  letterGuesses.style.visibility = 'visible';
  for(let i = 0; i < previousLetters.length; i++) {
    let duplicateLetter = previousGuessesValue.includes(previousLetters[i]);
    if (previousGuessesValue !== previousLetters[i] && duplicateLetter !== true) {
      previousGuessesValue = previousGuessesValue + previousLetters[i];
      letterGuesses.textContent = '';
      letterGuesses.textContent = previousGuessesValue;
    }
  }
}

const victory = () => {
  let total = 0;
  for (let i = 0; i < letterBoxes.length; i++) {
    if (letterBoxes[i].textContent === randomWord[i]) {
      total++;
    }
  }
  if (total === randomWord.length) {
    victoryMsg.style.visibility = 'visible';
    input.maxLength = 0;
  }
}

const hangman = () => {
  if (numOfWrongGuesses === 1) {
    let circle = document.createElement('div');
    headContainer.appendChild(circle);
    circle.setAttribute('id', 'circle');
  }

  if (numOfWrongGuesses === 2) {
    let stickBody = document.createElement('div');
    mainBody.appendChild(stickBody);
    stickBody.setAttribute('id', 'stickBody');
  }

  if (numOfWrongGuesses === 3) {
    let leftArm = document.createElement('div');
    armOne.appendChild(leftArm);
    leftArm.setAttribute('id', 'leftArm');
  }

  if (numOfWrongGuesses === 4) {
    let rightArm = document.createElement('div');
    armTwo.appendChild(rightArm);
    rightArm.setAttribute('id', 'rightArm');
  }

  if (numOfWrongGuesses === 5) {
    let leftLeg = document.createElement('div');
    legContainer.appendChild(leftLeg);
    leftLeg.setAttribute('id', 'leftLeg');
  }

  if (numOfWrongGuesses === 6) {
    let rightLeg = document.createElement('div');
    legContainer.appendChild(rightLeg);
    rightLeg.setAttribute('id', 'rightLeg');
    failMsg.textContent = "Sorry, please try again!";
  }
}