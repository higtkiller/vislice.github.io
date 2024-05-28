const button_letters = document.querySelectorAll(".letter-button");
const button_letter_texts = document.querySelectorAll(".letter-button p"); 



function ChangeColor(item, color) {
    item.style.backgroundColor = color;
}
export function ColorButtons(button_letter_texts,button_letters,usedLetters,word,wordLetters){
  for(let i = 0 ; i < button_letters.length ; i++){
    const letter = button_letters[i];
    const letter_text = button_letter_texts[i];
        
    if(usedLetters[i] !== "0"){
        for(let j = 0 ; j < word.length ; j++){
            if(usedLetters[i] === wordLetters[j].toUpperCase()){
                console.log("green");
                letter.addEventListener('mouseenter',function(){

                    ChangeColor(letter, "green");
                    ChangeColor(letter_text, "green");
                });
            
                letter_text.addEventListener('mouseenter',function(){
                    ChangeColor(letter, "green");
                    ChangeColor(letter_text, "green");
                });
            
                letter.addEventListener('mouseleave',function(){
                    ChangeColor(letter, "green");
                    ChangeColor(letter_text, "green");
                });
            
                letter_text.addEventListener('mouseleave',function(){
                    ChangeColor(letter, "green");
                    ChangeColor(letter_text, "green");
                });
                break;
                 
            }
            else{
                console.log("red");
                letter.addEventListener('mouseenter',function(){
                    ChangeColor(letter, "red");
                    ChangeColor(letter_text, "red");
                });
            
                letter_text.addEventListener('mouseenter',function(){
                    ChangeColor(letter, "red");
                    ChangeColor(letter_text, "red");
                });
            
                letter.addEventListener('mouseleave',function(){
                    ChangeColor(letter, "red");
                    ChangeColor(letter_text, "red");
                });
            
                letter_text.addEventListener('mouseleave',function(){
                    ChangeColor(letter, "red");
                    ChangeColor(letter_text, "red");
                });
            }
        }
         
    }
    else{
        
        
        letter.addEventListener('mouseenter',function(){
            ChangeColor(letter, "#948979");
            ChangeColor(letter_text, "#948979");
        });
    
        letter_text.addEventListener('mouseenter',function(){
            ChangeColor(letter, "#948979");
            ChangeColor(letter_text, "#948979");
        });
    
        letter.addEventListener('mouseleave',function(){
            ChangeColor(letter, "#DFD0B8");
            ChangeColor(letter_text, "#DFD0B8");
        });
    
        letter_text.addEventListener('mouseleave',function(){
            ChangeColor(letter, "#DFD0B8");
            ChangeColor(letter_text, "#DFD0B8");
        });   
    }
}  
}

