"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseWord = void 0;
const parseWord = (word) => {
    if ((/[^a-zA-Z]/.test(word)) || word == "") {
        return 'Words can only be composed of alphabetic character';
    }
    else {
        return word.charAt(0) + removeDuplicate(word.substring(1, word.length - 1)).length + word.charAt(word.length - 1);
    }
};
exports.parseWord = parseWord;
function removeDuplicate(word) {
    return word
        .split('')
        .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    })
        .join('');
}
console.log((0, exports.parseWord)("Smooth"));
