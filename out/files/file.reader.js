"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
var fs_1 = require("fs");
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.prototype.getFile = function () {
        (0, fs_1.readFile)('files/file.reader.ts', function (err, data) {
            if (err)
                throw err;
            console.log(data);
        });
    };
    return FileReader;
}());
exports.FileReader = FileReader;
//# sourceMappingURL=file.reader.js.map