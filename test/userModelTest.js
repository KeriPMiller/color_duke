const { assert } = require("chai");
const db = require("../server/db");
const User = db.model("user");

describe("User Model", () => {
  beforeEach(() => {
    return db.sync({
      force: true
    });
  });

  describe("User Model Attributes", () => {
    let goodUser, rockStar;

    beforeEach(() => {
      return User.create({
        firstName: "David",
        lastName: "Bowie",
        email: "thinWhiteDuke@colorduke.net"
      }).then(newUser => (goodUser = newUser));
    });

    beforeEach(() => {
      return User.create({
        firstName: "Ziggy",
        lastName: "Stardust",
        email: "5p1d35fromM4r5@hotmail.com"
      }).then(newUser => (rockStar = newUser));
    });
    describe("User names...", () => {
      it("Should have a string for the first name", () => {
        assert.typeOf( goodUser.firstName, "string");
      });
      it("Should have a string for the last name", () => {
        assert.typeOf( goodUser.lastName, "string");
      });
      it("Should concat first and last name into a fullName", () => {
       assert.equal(goodUser.fullName,`David Bowie`);
      });
    });
    describe("User e-mails...", () => {
      it("Should should exsist", () => {
        assert.exists(goodUser.email, "email is niether null nor undefined")
      it("Should have an vaild email", ()=>{
        assert.deepEqual(goodUser.email, "thinWhiteDuke@colorduke.com")
      })
      });
    });
  });
});
