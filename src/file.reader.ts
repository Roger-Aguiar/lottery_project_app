import { readline, file_system } from "../constants/file.reader.constants";
import { readFile } from 'fs';

export class FileReader
{
    constructor() {}

    getFile()
    {
        readFile('files/lotofacil.txt', (err, data) => 
        {            
            if(err) throw err;

            const array = data.toString().replace(/\n/g, '\n').split('\n');

            for(let line of array)
            {
                console.log(line);
            }            
        });
    }
}