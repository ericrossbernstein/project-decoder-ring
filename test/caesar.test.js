const caesar = require("../src/caesar")
const expect = require("chai").expect;

describe("caesar", () => {
    it("should correctly encode word based on positive shift value", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });

    it("should correctly encode word based on negative shift value", () => {
        const expected = "qefkhcri";
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected);
    });

    it("should decode text if encode is set to false", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols while encoding", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols while decoding", () => {
        const expected = "this is a secret message!";
        const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is equal to 0", () => {
        const expected = false;
        const actual =  caesar("thinkful", 0);
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is less than -25", () => {
        const expected = false;
        const actual =  caesar("thinkful", -26);
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is greater than 25", () => {
        const expected = false;
        const actual =  caesar("thinkful", 99);
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is not present", () => {
        const expected = false;
        const actual =  caesar("thinkful");
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actualLower = caesar("a message", -2);
        const actualUpper = caesar("A Message", -2);
        expect(actualLower).to.equal(actualUpper);
    });
});
