// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  // Helper function to check if character is alphabetic
  function isAlphabetic(character) {
    // If the character isn't the same lowercase and uppercase, it must be alphabetic.
    return character.toLowerCase() !== character.toUpperCase();
  }

  function caesar(input, shift, encode = true) {
    // Guard clause to check if shift value is included and is an appropriate value
    if (!shift || shift < -25 || shift > 25) return false;

    const splitInput = input.toLowerCase().split("");
    let result = splitInput.map((character) => {
      if (isAlphabetic(character)) {
        const characterCode = character.charCodeAt();
        let shiftedCode = encode ? characterCode + shift : characterCode - shift;
        // If a letter is shifted off of the alphabet,
        // it should wrap around to the other end of the alphabet
        if (shiftedCode > 122) shiftedCode -= 26;
        if (shiftedCode < 97) shiftedCode += 26;
        return String.fromCharCode(shiftedCode);
      } else {
        // Non-alphabetic characters should remain the same
        return character;
      }
    });
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
