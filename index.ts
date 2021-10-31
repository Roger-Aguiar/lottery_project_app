import { FileReader } from "./src/file.reader";

let file = new FileReader();
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