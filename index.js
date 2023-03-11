
let inputElement = document.getElementById("userInput")
let randomNumber = Math.ceil(Math.random()*100)
let gameResult = document.getElementById("gameResult")

function checkGuess(){
    let inputValue = inputElement.value 


    if(inputValue>randomNumber){
        gameResult.textContent = "the Number is too High"
        gameResult.style.backgroundColor="green"
    }
    else if(inputValue<randomNumber){
        gameResult.textContent = "the number is too Low"
        gameResult.style.backgroundColor="red"

    } 
    
    else if(inputValue === randomNumber){
        gameResult.textContent="Your Lucky Number Successful !!!"
        gameResult.style.backgroundColor="pink"
   
    }

    else{
     
        gameResult.textContent = "Please Enter Valid Number between 1 to 100"
    }
}