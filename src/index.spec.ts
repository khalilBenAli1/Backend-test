describe("testing that dummy data exist", function () {
  let countries = require("../data");
  let countries2 = require("../data");
  it("countries should be an array", function () {
    expect([...countries]).toBeInstanceOf(Array);
  });
  it("countries should have data", function () {
    expect([...countries2].length).toBeGreaterThan(0);
  });
});
