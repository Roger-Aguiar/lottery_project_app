"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lottery = void 0;
var Lottery = /** @class */ (function () {
    function Lottery(frequencyTable, quantityOfNumbers) {
        this.gameCounter = 0;
        this.tableOfGames = [];
        this.frequencyTable = frequencyTable;
        this.quantityOfNumbers = quantityOfNumbers;
    }
    Lottery.prototype.generateGames = function () {
        while (this.frequencyTable.length > 15) {
            var newGame = [];
            for (var index = 0; index < this.quantityOfNumbers; index++) {
                newGame.push(this.frequencyTable[index]['number']);
            }
            newGame.sort();
            this.tableOfGames.push(newGame);
            this.gameCounter++;
            this.frequencyTable.shift();
        }
        return this.tableOfGames;
    };
    Lottery.prototype.getLayoutGames = function () {
        var layout = '';
        for (var index = 0; index < this.tableOfGames.length; index++) {
            for (var j = 0; j < this.tableOfGames[index].length; j++) {
                layout += this.tableOfGames[index][j] + '\t';
            }
            layout += '\n';
        }
        return layout;
    };
    Lottery.prototype.checkGames = function (result) {
        result.sort();
        var layoutResult = '';
        for (var i = 0; i < this.tableOfGames.length; i++) {
            var score = 0;
            for (var j = 0; j < this.tableOfGames[i].length; j++) {
                for (var k = 0; k < result.length; k++) {
                    if (this.tableOfGames[i][j] == result[k]) {
                        score++;
                        break;
                    }
                }
            }
            layoutResult += 'Game ' + (i + 1) + ': ' + score + 'points.\n';
        }
        return layoutResult;
    };
    return Lottery;
}());
exports.Lottery = Lottery;
//# sourceMappingURL=lottery.js.map