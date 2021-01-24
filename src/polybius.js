// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const square = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "55",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  }

  function polybius(input, encode = true) {
    return encode ? polybiusEncode(input) : polybiusDecode(input);
  }

  // Helper function for encoding
  function polybiusEncode(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const character = input[i].toLowerCase();
      // If square object contains given character, 
      // convert it to corresponding number pair.
      // Otherwise character remains the same.
      if (square[character]) {
        result += square[character];
      } else {
        result += character;
      }
    }
    return result;
  }

  // Helper function to convert number pair back into corresponding letter
  function findLetter(numberPair) {
    if (numberPair === "42") {
      return "(i/j)";
    } else {
      return Object.keys(square).find(key => square[key] === numberPair);
    }
  }

  // Helper function for decoding
  function polybiusDecode(input) {
    let result = "";
    let i = 0;
    while (i < input.length) {
      // If character is a space, it remains the same
      if (input[i] === " ") {
        result += " ";
        i++;
      } else {
        // Check if input has an even number of characters remaining 
        if (i + 2 > input.length) return false;
        // Divide string into number pairs, 
        // and then convert pairs back into corresponding letters
        const numberPair = input.substr(i, 2);
        result += findLetter(numberPair);
        i += 2;
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
