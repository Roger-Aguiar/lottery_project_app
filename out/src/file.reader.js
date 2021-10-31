"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
var fs_1 = require("fs");
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.prototype.getFile = function () {
        (0, fs_1.readFile)('files/lotofacil.txt', function (err, data) {
            if (err)
                throw err;
            var array = data.toString().replace(/\n/g, '\n').split('\n');
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var line = array_1[_i];
                console.log(line);
            }
        });
    };
    return FileReader;
}());
exports.FileReader = FileReader;
//# sourceMappingURL=file.reader.js.map