export class Lottery 
{    
    frequencyTable: string[];
    quantityOfNumbers: number;
    gameCounter = 0;
    tableOfGames = [];

    constructor(frequencyTable, quantityOfNumbers)
    {
        this.frequencyTable = frequencyTable;
        this.quantityOfNumbers = quantityOfNumbers;
    }

    generateGames()
    {           
        while(this.frequencyTable.length > 15)
        {
            let newGame = [];
            for(let index = 0; index < this.quantityOfNumbers; index++)
            {
                newGame.push(this.frequencyTable[index]['number']);
            }
            newGame.sort();
            this.tableOfGames.push(newGame);
            this.gameCounter++;    
            this.frequencyTable.shift();        
        }
        return this.tableOfGames;
    }

    getLayoutGames()
    {
        let layout = '';
        for (let index = 0; index < this.tableOfGames.length; index++) 
        {
            for (let j = 0; j < this.tableOfGames[index].length; j++) 
            {
                layout += this.tableOfGames[index][j] + '\t';
            }
            layout += '\n';
        }
        return layout;
    }
}