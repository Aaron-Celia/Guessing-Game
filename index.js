let number = Math.floor(Math.random() * 100)
let guess1 = document.body.querySelector("#guess1");
let guess2 = document.body.querySelector("#guess2");
let guess3 = document.body.querySelector("#guess3");
let guess4 = document.body.querySelector("#guess4");
let guess5 = document.body.querySelector("#guess5");
let hint = document.body.querySelector("#hint");
let containerDiv = document.body.querySelector(".container");
let secretNumber = document.body.querySelector("#secret-number");

let guessButton = document.body.querySelector("#guess-button");
const resetButton = document.body.querySelector("#reset-button")

secretNumber.innerText = number;
let counter = 0;


guessButton.addEventListener("click", function () {
    let guess = document.body.querySelector("#guess1").value
    counter++;
    
    if (guess == number) {
        console.log("line 17", guess)
        containerDiv.className = "correctAnswer"
        secretNumber.innerText = "The number was indeed " + number + "!"
        console.log("line 19")
        return hint.innerText = "Correct!"
    }
    else if (number < guess) {
        console.log("line 23");
        return hint.innerText = "Lower..."
    }
    else if (number > guess) {
        console.log("line 27");
        return hint.innerText = "Higher..."
    }
});
console.log(counter)

guessButton.addEventListener("click", function () {
    let previousGuess1 = document.querySelector("#previous-guess1");
    let previousGuess2 = document.querySelector("#previous-guess2");
    let previousGuess3 = document.querySelector("#previous-guess3");
    let previousGuess4 = document.querySelector("#previous-guess4");
    let previousGuess5 = document.querySelector("#previous-guess5");
    let guess = document.body.querySelector("#guess1").value
    if (counter === 1) {
        previousGuess1.innerText = guess;
    }
    else if (counter === 2) {
        previousGuess2.innerText = guess;
    }
    else if (counter === 3) {
        previousGuess3.innerText = guess;
    }
    else if (counter === 4) {
        previousGuess4.innerText = guess;
    }
    else if (counter === 5) {
        previousGuess5.innerText = guess;
    }
});



// let previousGuess5 = document.querySelector("#previous-guess5");
// if (counter === 0 && previousGuess5 != ""){
//     containerDiv.className = "fail";
// }




//guess 2
// guessButton.addEventListener("click", function () {
//     let guess2 = document.body.querySelector("#guess2").value
//     if (guess2 == number) {
//         console.log("line 40", guess2)
//         containerDiv.className = "correctAnswer"
//         secretNumber.innerText = "The number was indeed " + number + "!"
//         console.log("line 43")
//         return hint.innerText = "Correct!"
//     }
//     else if (number < guess2) {
//         console.log("line 47");
//         return hint.innerText = "Lower..."
//     }
//     else {
//         console.log("line 51");
//         return hint.innerText = "Higher..."
//     }
// });


// guessButton.addEventListener("click", function () {
//     let guess = document.body.querySelector("#guess3").value
//     if (guess == number) {
//         console.log("line 17", guess)
//         containerDiv.className = "correctAnswer"
//         secretNumber.innerText = "The number was indeed " + number + "!"
//         console.log("line 19")
//         return hint.innerText = "Correct!"
//     }
//     else if (number < guess) {
//         console.log("line 23");
//         return hint.innerText = "Lower..."
//     }
//     else {
//         console.log("line 27");
//         return hint.innerText = "Higher..."
//     }
// });


// guessButton.addEventListener("click", function () {
//     let guess = document.body.querySelector("#guess4").value
//     if (guess == number) {
//         console.log("line 17", guess)
//         containerDiv.className = "correctAnswer"
//         secretNumber.innerText = "The number was indeed " + number + "!"
//         console.log("line 19")
//         return hint.innerText = "Correct!"
//     }
//     else if (number < guess) {
//         console.log("line 23");
//         return hint.innerText = "Lower..."
//     }
//     else {
//         console.log("line 27");
//         return hint.innerText = "Higher..."
//     }
// });


// guessButton.addEventListener("click", function () {
//     let guess = document.body.querySelector("#guess5").value
//     if (guess == number) {
//         console.log("line 17", guess)
//         containerDiv.className = "correctAnswer"
//         secretNumber.innerText = "The number was indeed " + number + "!"
//         console.log("line 19")
//         return hint.innerText = "Correct!"
//     }
//     else if (number < guess) {
//         console.log("line 23");
//         return hint.innerText = "Lower..."
//     }
//     else {
//         console.log("line 27");
//         return hint.innerText = "Higher..."
//     }
// });