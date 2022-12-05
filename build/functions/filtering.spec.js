"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const filtering_1 = __importDefault(require("./filtering"));
describe("filter Test", function () {
  let countries1 = require("../../data");
  let countries2 = require("../../data");
  it("filterByString with 'ry' should output the same result length", function () {
    const output = (0, filtering_1.default)([...countries1], "ry");
    expect(output.length).toEqual(2);
  });
  it("filterByString with 'notFound' should output the same result length", function () {
    const output = (0, filtering_1.default)([...countries2], "notFound");
    expect(output.length).toEqual(0);
  });
});
