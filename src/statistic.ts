export class Statistic
{
    results = [];
    firstNumber: number;
    lastNumber: number;
    frequencyTable = [];
    totalFI = 0;
    totalFac = 0;

    constructor(results?, firstNumber?, lastNumber?)
    {   
        this.results = results;
        this.firstNumber = firstNumber;
        this.lastNumber = lastNumber;
    }
  
    getFrequencyTable()
    {                       
        while(this.firstNumber <= this.lastNumber)
        {
            let frequency = 0;            
            let currentIndex = 0;

            for(let index = 0; index < this.results.length; index++)
            {                                
                let array = this.results[index].split('\t').sort();
                                
                for (let indexArray = 0; indexArray < array.length; indexArray++) 
                {
                    if (this.firstNumber < Number(array[indexArray])) 
                    {                        
                        break;
                    }   
                    else if(this.firstNumber == Number(array[indexArray]))
                    {
                        frequency++;
                        break;
                    }               
                }
                
            }
            
            this.frequencyTable.push(
                {
                    number: this.firstNumber < 10 ? '0' + this.firstNumber : this.firstNumber.toString(),
                    frequencyNumber: frequency.toString(),
                    relativeFrequency: (frequency / this.results.length).toFixed(2)                    
                }
            );
            
            this.totalFI = this.totalFI + (frequency / this.results.length);            
            this.firstNumber++;
        }   
        
        this.sortFrequencyTable();
        this.getAccumulatedFrequency();

        return this.frequencyTable;
    }

    getAccumulatedFrequency()
    {        
        for (let index = 0; index < this.frequencyTable.length; index++) 
        {
            this.frequencyTable[index].accumulatedFrequency = index == 0 ? Number(this.frequencyTable[index].relativeFrequency) : 
            (Number(this.frequencyTable[index].relativeFrequency) + 
             Number(this.frequencyTable[index - 1].accumulatedFrequency)).toFixed(2);                           
        }
    }

    getLayoutFrequencyTable()
    {
        let layoutTable = '---------------------------------------------------------\n|Number\t|\tN(i)\t|\tF(i)\t|\tF(ac)\t|\n' +
                          '---------------------------------------------------------\n';
        
        for (let index = 0; index < this.frequencyTable.length; index++) 
        {
            layoutTable += '|' + this.frequencyTable[index].number + '\t' +
                           '|\t' + this.frequencyTable[index].frequencyNumber + '\t' + 
                           '|\t' + this.frequencyTable[index].relativeFrequency + '\t' + 
                           '|\t' + this.frequencyTable[index].accumulatedFrequency + '\t|\n' +
                           '---------------------------------------------------------\n';
        }

        layoutTable += '|Total\t|\t' + this.results.length + '\t|\t' + this.totalFI + '\t|\t\t|\n' +
                       '---------------------------------------------------------\n';

        layoutTable += '\nTable description\n' + 
                       'N(i):  Frequency of each number\n' + 
                       'F(i):  Relative frequency of each number (%)\n' +
                       'F(ac): Accumulated frequency (%)';

        return layoutTable;
    }

    sortFrequencyTable()
    {
        return this.frequencyTable.sort(function (a, b) 
        {
            let keyA = new Number(a.relativeFrequency);
            let keyB = new Number(b.relativeFrequency);
            if(keyA > keyB) return -1;
            if(keyA < keyB) return 1;
            return 0;
        });
    }
}