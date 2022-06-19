import {parseWord} from '../src/main';
import {expect} from 'chai';

describe('parses a word - Test Suit',()=>{
    it('Success parse word', () => {
        expect(parseWord("Smooth")).to.eq('S3h')
    });
    it('word with numbers', () => {
        expect(parseWord("Smo45345oth")).to.eq('Words can only be composed of alphabetic character')
    });
    it('word with special characters', () => {
        expect(parseWord("Smo@ot=h")).to.eq('Words can only be composed of alphabetic character')
    });
    it('blank space', () => {
        expect(parseWord(" ")).to.eq('Words can only be composed of alphabetic character')
    });

    it('empty string', () => {
        expect(parseWord("")).to.eq('Words can only be composed of alphabetic character')
    });

    it('numbers', () => {
        expect(parseWord("1234")).to.eq('Words can only be composed of alphabetic character')
    });

    it('long word', () => {
        expect(parseWord("antidisestablishmentarianism")).to.eq('a12m')
    });

    it('short word', () => {
        expect(parseWord("hi")).to.eq('h0i')
    });


});