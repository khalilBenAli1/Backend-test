import count from "./count";

describe("count test", function () {
  let countries1 = require("../../data");
  it("count should output same result", function () {
    expect(count([...countries1])[0].name).toEqual("Uzuzozne [1]");
  });
});
