import { Statistic } from "./src/statistic";
import { file_system } from "./constants/lottery.constants";
import { Lottery } from "./src/lottery";
function main() 
{
    file_system.readFile('files/lotofacil.txt', (err, data) => 
    {
        if (err) throw err;

        const results = data.toString().replace(/\n/g, '\n').split('\n');
        let newGame = new Statistic (results, 1, 25);
        let frequencyTable = newGame.getFrequencyTable();
        let games = new Lottery(frequencyTable, 15);
        games.generateGames();
        console.log(games.getLayoutGames());
        
    });
}

main();



/*import readline = require('readline');

let userInput = readline.createInterface({input: process.stdin, output: process.stdout});

userInput.question("Please, enter an integer number: ", 
function(answer)
{
    let integerNumber = new SumOfDigits(answer);
    let digitalRootSum = integerNumber.digitalRoot();
    console.log(`The digital root sum is: ${digitalRootSum}`);
});*/