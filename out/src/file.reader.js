"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.results = exports.FileReader = void 0;
var file_reader_constants_1 = require("../constants/file.reader.constants");
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.prototype.getFile = function () {
        var results = [];
        file_reader_constants_1.file_system.readFile('files/lotofacil.txt', function (err, data) {
            if (err)
                throw err;
            var array = data.toString().replace(/\n/g, '\n').split('\n');
            for (var index = 0; index < array.length; index++) {
                results.push(array[index]);
            }
        });
        return results;
    };
    return FileReader;
}());
exports.FileReader = FileReader;
exports.results = file_reader_constants_1.file_system.readFile('files/lotofacil.txt', function (err, data) {
    if (err)
        throw err;
    var array = data.toString().replace(/\n/g, '\n').split('\n');
    for (var index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
});
//# sourceMappingURL=file.reader.js.map