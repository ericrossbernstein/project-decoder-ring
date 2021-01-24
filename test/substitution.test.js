const substitution = require("../src/substitution")
const expect = require("chai").expect;

describe("substitution", () => {
    it("should correctly encode word", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("should correctly decode word", () => {
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when encoding", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when decoding", () => {
        const expected = "you are an excellent spy";
        const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actualLower = substitution("a message", "xoyqmcgrukswaflnthdjpzibev");
        const actualUpper = substitution("A Message", "xoyqmcgrukswaflnthdjpzibev");
        expect(actualLower).to.equal(actualUpper);
    });

    it("should encode word even when alphabet parameter includes special characters", () => {
        const expected = "y&ii$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });

    it("should decode word even when alphabet parameter includes special characters", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });

    it("should return false if the alphabet parameter is not provided", () => {
        const expected = false;
        const actual = substitution("thinkful");
        expect(actual).to.equal(expected);
    });

    it("should return false if the alphabet parameter is not 26 characters", () => {
        const expected = false;
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(expected);
    });

    it("should return false if all of the characters in the alphabet parameter are not unique", () => {
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    });
});