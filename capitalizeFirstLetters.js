const assert = require("assert");

//the capitalizeFirstLetters function

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
