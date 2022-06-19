"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
const chai_1 = require("chai");
describe('parses a word - Test Suit', () => {
    it('Success parse word', () => {
        (0, chai_1.expect)((0, main_1.parseWord)("Smooth")).to.eq('S3h');
    });
});
