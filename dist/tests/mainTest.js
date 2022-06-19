"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
const chai_1 = require("chai");
describe('parses a word - Test Suit', () => {
    it('Success parse word', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("Smooth")).to.eq('S3h');
    });
    it('word with numbers', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("Smo45345oth")).to.eq('Words can only be composed of alphabetic character');
    });
    it('word with special characters', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("Smo@ot=h")).to.eq('Words can only be composed of alphabetic character');
    });
    it('blank space', () => {
        (0, chai_1.expect)((0, main_1.parseWord)(" ")).to.eq('Words can only be composed of alphabetic character');
    });
    it('empty string', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("")).to.eq('Words can only be composed of alphabetic character');
    });
    it('numbers', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("1234")).to.eq('Words can only be composed of alphabetic character');
    });
    it('long word', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("antidisestablishmentarianism")).to.eq('a12m');
    });
    it('short word', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("hi")).to.eq('h0i');
    });
});
