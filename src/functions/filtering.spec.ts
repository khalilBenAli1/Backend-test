import filterByString from "./filtering";

describe("filter Test", function () {
  let countries1 = require("../../data");
  let countries2 = require("../../data");
  it("filterByString with 'ry' should output the same result length", function () {
    const output = filterByString([...countries1], "ry");
    expect(output.length).toEqual(2);
  });

  it("filterByString with 'notFound' should output the same result length", function () {
    const output = filterByString([...countries2], "notFound");
    expect(output.length).toEqual(0);
  });
});
