const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("rectangle", () => {
  let square = new Rectangle(5, 5);
  let rectangle = new Rectangle(13, 7);

  it("isSquare return true if 2 argument are same", () => {
    assert.strictEqual(square.isSquare(), true);
  });

  it("isSquare return false if 2 argument are not same", () => {
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it("getArea return the rectangle area correctly", () => {
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it("getPerimeter return the rectangle perimeter correctly", () => {
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
