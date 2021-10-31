"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lottery = void 0;
var lottery_constants_1 = require("../constants/lottery.constants");
var Lottery = /** @class */ (function () {
    function Lottery() {
    }
    Lottery.prototype.generateNewGame = function () {
        var results = lottery_constants_1.file_system.readFile('files/lotofacil.txt');
        return results;
        //return file_system.readFile('files/lotofacil.txt', (err) => 
        //{
        //  if (err) throw err;
        //const results = data.toString().replace(/\n/g, '\n').split('\n');
        //this.getSimpleFrequencyTable(results);
        //});
    };
    Lottery.prototype.getSimpleFrequencyTable = function (results) {
        for (var index = 0; index < results.length; index++) {
            console.log(results[index]);
        }
    };
    return Lottery;
}());
exports.Lottery = Lottery;
//# sourceMappingURL=lottery.js.map