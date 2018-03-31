const { assert } = require("chai");
const db = require("../server/db");
const Color = db.model("color");

describe("Color Model", () => {
  beforeEach(() => {
    return db.sync({
      force: true
    });
  });

  describe("Color Model Attributes", () => {
    let goodColor, badColor;

    beforeEach(() => {
      return Color.create({
        name: "PapayaWhip",
        hex: "#ffefd5"
      }).then(newColor => (goodColor = newColor));
    });

    beforeEach(() => {
      return Color.create({
        name: 191970
      }).then(newColor => (badColor = newColor));
    });
    describe("Color Names...", () => {
      it("Should be a STRING ", () => {
        assert.equal(typeof goodColor.name, "string");
      });
      xit("Should be a UNIQUE", () => {});
      xit("Should throw a validation error for names with numbers");
    });
    describe("Color HEX value...", () => {
      it("Should be a STRING", () => {
        assert.equal(typeof goodColor.hex, "string");
      });
      xit("Should be UNIQUE");
      it("Can be null", () => {
        assert.equal( badColor.hex, null);
      });
      xit("Should start with '#'")
    });
  });
});
