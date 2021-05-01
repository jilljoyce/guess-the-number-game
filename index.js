
let welcomeMessage = () => {
    let nameGamer = prompt("Welkom! Wat is je naam?"); //ouput and input
    alert("Hey " + nameGamer);
    return nameGamer;
};

let getRandomNumberBetweenMinAndMax = () => {
    let numberMin = prompt("Wat is het kleinste getal?");
    let numberMinInt = parseInt(Math.ceil(numberMin)) + 1;
    let numberMax = prompt("Wat is het grootste getal?");
    let numberMaxInt = parseInt(Math.floor(numberMax));
    let randomIntNumber = Math.floor(Math.random() * (numberMaxInt - numberMinInt) + numberMinInt);
    //alert(randomIntNumber);
    return randomIntNumber;
};

let guessNumberFunction = (name, randomNumber) => { //attention: in parameters you don't have to use the function name (you do when calling as argument, see line 42), just give a "new" name. if you use the function name as parameter, then without parentheses.
    let chances = 5;
    let givenNumber = prompt("Voer een nummer in om te beginnen met raden...");
    for (i = 1; i <= 6; i++) {
        givenNumber = parseInt(givenNumber);
        if (givenNumber === randomNumber && chances >= 1) { //if you use the function name (as discussed above) with parenthese like: getRandomNumberBetweenMinAndMax(), then the whole function is running over again. so you have to do it without parentheses.
            alert("Gefeliciteerd je hebt gewonnen!"); 
            alert("Dag " + name + ". Tot de volgende keer");
            return;
        }
        else if (givenNumber !== randomNumber && chances >= 1) {
            alert("Dat is niet correct. Je hebt nog " + chances + " kans over");
            givenNumber = prompt("Probeer het opnieuw:");
        }
        else if (givenNumber !== randomNumber && chances == 0) {
            alert("Je hebt geen pogingen meer! Dag " + name + ". Tot de volgende keer");
            return;
        }
        chances--;
    }
};

// console.log(welcomeMessage());      ! call the function with parentheses.
// console.log(getRandomNumberBetweenMinAndMax());
// ! functions above: Calling these functions are unnecessary, because they are already called in line 42.
console.log(guessNumberFunction(welcomeMessage(), getRandomNumberBetweenMinAndMax())); //calling the function as parameter without parentheses