const polybius = require("../src/polybius")
const expect = require("chai").expect;

describe("polybius", () => {
    it("should correctly encode word", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when encoding", () => {
        const expected = "3251131343 2543241341";
        const actual =  polybius("Hello World");
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when decoding", () => {
        const expected = "hello world";
        const actual =  polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actualUpper =  polybius("Hello World");
        const actualLower =  polybius("hello world");
        expect(actualUpper).to.equal(actualLower);
    });

    it("translates i and j into 42 when encoding", () => {
        const expected = "424233221351";
        const actual =  polybius("jingle");
        expect(actual).to.equal(expected);
    });

    it("translates 42 into (i/j) when decoding", () => {
        const expected = "th(i/j)nkful";
        const actual =  polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });

    it("should return false if the number of characters in the string excluding spaces is not even when decoding", () => {
        const expected = false;
        const actual =  polybius("44324233521254134", false);
        expect(actual).to.equal(expected);
    });
});
