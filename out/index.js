"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("./src/file.reader");
var file = new file_reader_1.FileReader();
file.getFile();
console.log("End program");
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