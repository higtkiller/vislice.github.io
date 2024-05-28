
const letterContainers = document.querySelectorAll(".letter-container");
const letterContainersText = document.querySelectorAll(".letter-container p");
const letterButtons = document.querySelectorAll(".letter-button");
const letterButtonsText = document.querySelectorAll(".letter-button p");
const bottomStick = document.getElementById("bottom-stick");
const middleStick = document.getElementById("middle-stick");
const topStick = document.getElementById("top-stick");
const rope = document.getElementById("rope");
const head = document.getElementById("head");
const body = document.getElementById("body");
const leftArm = document.getElementById("left-arm");
const rightArm = document.getElementById("right-arm");
const leftLeg = document.getElementById("left-leg");
const rightLeg= document.getElementById("right-leg");
const loseScreen = document.getElementById("lose-screen");
const winnScreen = document.getElementById("winn-screen");
const keyboardContainer = document.getElementById("keyboard-container");
const tryAgainButton = document.querySelectorAll("#restart-button");
const hangman = [bottomStick,middleStick,topStick,rope,head,body,leftArm,rightArm,leftLeg,rightLeg];
const goldText = document.getElementById("money-text");
let gold = 0;

let abeceda = [
    "A", "B", "C", "Č", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "R", "S", "Š", "T", "U", "V", "Z", "Ž"
];
let guessedLetters = [];
let wordLetters = [];
let usedLetters = [];
let tryes = 0;
const hangmanColor1 = "#C7B7A3";
const hangmanColor2 = "black";

import { ColorButtons } from "./buttons_script.js";
import { GetRandomWord } from "./random-word.js";
let word = GetRandomWord(); ;

function Setup(word) {
    
    for (let i = 0; i < letterContainers.length; i++) {
        letterContainers[i].style.display = "none";
    }
    for (let i = 0; i < word.length; i++) {
        letterContainers[i].style.display = "block";
        wordLetters[i] = word[i];
        letterContainersText[i].style.display = "none";
    }
    for(let i = 0 ; i < hangman.length ; i++){
        hangman[i].style.backgroundColor = hangmanColor1;
        hangman[i].style.borderColor = hangmanColor1;
    }
    for(let i = 0 ; i < letterButtons.length ; i++){
        usedLetters[i] = "0";
        letterButtons[i].style.backgroundColor = "#DFD0B8";
        letterButtonsText[i].style.backgroundColor ="#DFD0B8";
    }

    hangman[4].style.backgroundColor = "#DFD0B8";
    loseScreen.style.display = "none";
    winnScreen.style.display = "none";
    keyboardContainer.style.display = "grid";
    ColorButtons(letterButtonsText,letterButtons,usedLetters,word,wordLetters);
    
    
}

function WriteLetter(letter) {
    for(let i = 0 ; i < word.length ; i++){
        if(letter === wordLetters[i]){
            letterContainersText[i].innerText = letter.toUpperCase();
            letterContainersText[i].style.display = "block";
            guessedLetters[i] = letter;
        }
    }
}

function HangmanDraw(tryes){
    for(let i = 0 ; i < tryes ; i++){
        hangman[i].style.backgroundColor = hangmanColor2;
        hangman[i].style.borderColor = hangmanColor2;
        
        
    }
    hangman[4].style.backgroundColor = "#DFD0B8";
    

    
}

function Lose(){
    loseScreen.style.display = "flex";
    keyboardContainer.style.display ="none";
    for(let i = 0 ; i < wordLetters.length ; i++){
        letterContainersText[i].innerText = wordLetters[i].toUpperCase();
        letterContainersText[i].style.display = "block";
        letterContainersText[i].style.color = "red";
    }

}
function Winn(){
    winnScreen.style.display = "flex";
    keyboardContainer.style.display ="none";
}
function CheckForWinn(){
    let l = 0;
    for(let i = 0 ; i < word.length ; i++){
        if(guessedLetters[i] === wordLetters[i]){
            l++;
            
        }
    }
    if(l == word.length){
        return true;
    }
    return false;
}

function Restart(){
     guessedLetters = [];
     wordLetters = [];
     usedLetters = [];
     tryes = 0;
     word = GetRandomWord();
     Setup(word);
     for(let letter of letterContainersText){
        letter.style.color = "black";
     }
     
    
}



function AddLetterToUsedLetters(letter){
    for(let i = 0 ; i < letterButtons.length ; i++){
        if(abeceda[i] === letter.toUpperCase()){
            usedLetters[i] = letter.toUpperCase();
        }
    }
}




function game() {
    Setup(word);
    
    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].onclick = function() {
            if(usedLetters[i] === "0"){
                const letter = letterButtonsText[i].innerText.trim().toLowerCase();
                letterButtons[i].style.backgroundColor = "red";
                letterButtonsText[i].style.backgroundColor = "red";
                AddLetterToUsedLetters(letter);
                for(let j = 0 ; j < word.length ; j++){
                    if(usedLetters[i] === wordLetters[j].toUpperCase()){
                        gold += 1;
                        goldText.innerText = gold;
                        letterButtons[i].style.backgroundColor = "green";
                        letterButtonsText[i].style.backgroundColor = "green";  
                    }
                }
                ColorButtons(letterButtonsText,letterButtons,usedLetters,word,wordLetters);
                if(word.includes(letter)){
                    WriteLetter(letter);
                    if(CheckForWinn()){
                    Winn();
                        tryAgainButton[1].onclick = Restart;
                    }
                }
                else{
                    if(tryes < 9){
                        tryes++;
                        
                        HangmanDraw(tryes);
                        
                    }
                    else{
                        tryes++;
                        HangmanDraw(tryes);
                        Lose(word);
                        
                        tryAgainButton[0].onclick = Restart;
                    }  
                } 
            }        
        }
       
    }
    
}

game();
