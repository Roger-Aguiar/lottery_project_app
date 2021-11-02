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

    generateGamesBasedOnAccumulatedFrequency()
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

    checkGames(result: string[])
    {
        result.sort();

        let layoutResult = '';
        
        for (let i = 0; i < this.tableOfGames.length; i++) 
        {
            let score = 0;
            for (let j = 0; j < this.tableOfGames[i].length; j++) 
            {
                for (let k = 0; k < result.length; k++) 
                {
                    if(this.tableOfGames[i][j] == result[k])
                    {
                        score++;
                        break;
                    }
                }
            } 
            layoutResult += 'Game ' + (i + 1) + ': ' + score + ' points.\n';       
        }
        return layoutResult;
    }
}