// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  // Helper function to check if all alphabet characters are unique
  function isUnique(alphabet) {
    const splitCharacters = alphabet.split("")
    const sortedCharacters = splitCharacters.sort((character1, character2) => 
      character1.toLowerCase() > character2.toLowerCase() ? 1 : -1
    );
    for (let i = 0; i < sortedCharacters.length; i++) {
      if (sortedCharacters[i] === sortedCharacters[i + 1]) return false;
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    // Guard clause to check if alphabet parameter is provided
    // and has 26 unique characters.
    if (!alphabet || !isUnique(alphabet) || alphabet.length !== 26) return false;
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const splitInput = input.toLowerCase().split("");
    let result = splitInput.map((character) => {
      if (character === " ") {
        return character;
      } else if (encode) {
        // Find index of each character in standard alphabet,
        // and return corresponding character at same index in substitution alphabet.
        for (let j = 0; j < standardAlphabet.length; j++) {
          if (character === standardAlphabet[j]) {
            return alphabet[j];
          }
        }
      } else {
        // Find index of each character in substitution alphabet,
        // and return corresponding character at same index in standard alphabet.
        for (let j = 0; j < alphabet.length; j++) {
          if (character === alphabet[j]) {
            return standardAlphabet[j];
          }
        }
      }
    });
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
