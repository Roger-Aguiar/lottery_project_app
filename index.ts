import { Lottery } from "./src/lottery";
import { file_system } from "./constants/lottery.constants";

let newGame = new Lottery();

file_system.readFile('files/lotofacil.txt', (err, data) => 
{
    if (err) throw err;

    const results = data.toString().replace(/\n/g, '\n').split('\n');
    newGame.getSimpleFrequencyTable(results);
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