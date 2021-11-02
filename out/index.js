"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statistic_1 = require("./src/statistic");
var lottery_constants_1 = require("./constants/lottery.constants");
lottery_constants_1.file_system.readFile('files/lotofacil.txt', function (err, data) {
    if (err)
        throw err;
    var results = data.toString().replace(/\n/g, '\n').split('\n');
    var newGame = new statistic_1.Statistic(results, 1, 25);
    var frequencyTable = newGame.getFrequencyTable();
    newGame.getLayoutFrequencyTable();
});
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