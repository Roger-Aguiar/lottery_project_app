"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lottery_1 = require("./src/lottery");
var newGame = new lottery_1.Lottery();
var results = newGame.generateNewGame();
console.log('test');
/*import readline = require('readline');

let userInput = readline.createInterface({input: process.stdin, output: process.stdout});

userInput.question("Please, enter an integer number: ",
function(answer)
{
    let integerNumber = new SumOfDigits(answer);
    let digitalRootSum = integerNumber.digitalRoot();
    console.log(`The digital root sum is: ${digitalRootSum}`);
});*/ 
//# sourceMappingURL=index.js.map