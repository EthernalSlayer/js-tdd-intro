const assert = require("assert");

//the capitalizeFirstLetters function
function capitalizeFirstLetters(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 0 || input[i - 1] === " ") {
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
}

//check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");
//check that capitalizeFirstLetters accept 1 argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
//check that capitalizeFirstLetters transform i am learning TDD correctly
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
//check that capitalizeFirstLetters transfrom j correctly
assert.strictEqual(capitalizeFirstLetters("j"), "J");
//check that capitalizeFirstLetters works with empty string
assert.strictEqual(capitalizeFirstLetters(""), "");
