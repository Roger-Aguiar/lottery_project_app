"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistic = void 0;
var Statistic = /** @class */ (function () {
    function Statistic(results, firstNumber, lastNumber) {
        this.results = [];
        this.frequencyTable = [];
        this.totalFI = 0;
        this.totalFac = 0;
        this.results = results;
        this.firstNumber = firstNumber;
        this.lastNumber = lastNumber;
    }
    Statistic.prototype.getFrequencyTable = function () {
        while (this.firstNumber <= this.lastNumber) {
            var frequency = 0;
            for (var index = 0; index < this.results.length; index++) {
                var array = this.results[index].split('\t').sort();
                for (var indexArray = 0; indexArray < array.length; indexArray++) {
                    if (this.firstNumber < Number(array[indexArray])) {
                        break;
                    }
                    else if (this.firstNumber == Number(array[indexArray])) {
                        frequency++;
                        break;
                    }
                }
            }
            this.frequencyTable.push({
                number: this.firstNumber < 10 ? '0' + this.firstNumber : this.firstNumber.toString(),
                frequencyNumber: frequency.toString(),
                relativeFrequency: (frequency / this.results.length).toFixed(2)
            });
            this.totalFI = this.totalFI + (frequency / this.results.length);
            this.firstNumber++;
        }
        this.sortFrequencyTable();
        this.getAccumulatedFrequency();
        return this.frequencyTable;
    };
    Statistic.prototype.getAccumulatedFrequency = function () {
        for (var index = 0; index < this.frequencyTable.length; index++) {
            this.frequencyTable[index].accumulatedFrequency = index == 0 ? Number(this.frequencyTable[index].relativeFrequency).toFixed(2) :
                (Number(this.frequencyTable[index].relativeFrequency) +
                    Number(this.frequencyTable[index - 1].accumulatedFrequency)).toFixed(2);
        }
    };
    Statistic.prototype.getLayoutFrequencyTable = function () {
        var layoutTable = '---------------------------------------------------------\n|Number\t|\tN(i)\t|\tF(i)\t|\tF(ac)\t|\n' +
            '---------------------------------------------------------\n';
        for (var index = 0; index < this.frequencyTable.length; index++) {
            layoutTable += '|' + this.frequencyTable[index].number + '\t' +
                '|\t' + this.frequencyTable[index].frequencyNumber + '\t' +
                '|\t' + this.frequencyTable[index].relativeFrequency + ' %\t' +
                '|\t' + this.frequencyTable[index].accumulatedFrequency + '%\t|\n' +
                '---------------------------------------------------------\n';
        }
        layoutTable += '|Total\t|\t' + this.results.length + '\t|\t' + this.totalFI + '\t|\t\t|\n' +
            '---------------------------------------------------------\n';
        layoutTable += '\nTable description\n' +
            'N(i):  Frequency of each number\n' +
            'F(i):  Relative frequency of each number\n' +
            'F(ac): Accumulated frequency';
        return layoutTable;
    };
    Statistic.prototype.sortFrequencyTable = function () {
        return this.frequencyTable.sort(function (a, b) {
            var keyA = new Number(a.relativeFrequency);
            var keyB = new Number(b.relativeFrequency);
            if (keyA > keyB)
                return -1;
            if (keyA < keyB)
                return 1;
            return 0;
        });
    };
    return Statistic;
}());
exports.Statistic = Statistic;
//# sourceMappingURL=statistic.js.map