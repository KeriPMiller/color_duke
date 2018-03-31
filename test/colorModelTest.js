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
    let goodColor, badColor, badColor2;

    beforeEach(() => {
      return Color.create({
        name: "PapayaWhip",
        hex: "#ffefd5",
        red: "255",
        green: "239",
        blue: "213",
        price: 2499
      }).then(newColor => (goodColor = newColor));
    });

    beforeEach(() => {
      return Color.create({
        name: 191970,
        red: "240",
        green: "248",
        blue: "255",
        price: 1
      }).then(newColor => (badColor = newColor));
    });

    beforeEach(() => {
      return Color.create({
        name: "AliceBlue",
        hex: "f0f8ff",
        red: "240",
        green: "248",
        blue: "255",
        price: 1000
      }).then(newColor => (badColor2 = newColor));
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
        assert.equal(badColor.hex, null);
      });
      it("Should start with '#'", () => {
        assert.equal(badColor2.hex, "#f0f8ff");
      });
    });
    describe("Color RGB...", () => {
      it("Should properly format the other three values as one RGB(red, green, blue)", () => {
        assert.equal(goodColor.rgb, "rgb(255, 239, 213)");
      });
    });
    describe("Color prices...", () => {
      it("Should have a value in pennies", () => {
        assert.equal(goodColor.price, 2499);
      });
      if (
        ("Should convert price into dollars",
        () => {
          assert.equal(goodColor.priceInDollars, `$24.99`);
        })
      );
      it("Should preserve the 00s for whole numbers in priceInDollars", () => {
        assert.equal(badColor2.priceInDollars, `$10.00`);
      });
    });
  });
});
