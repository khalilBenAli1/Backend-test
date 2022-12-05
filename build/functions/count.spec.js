"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const count_1 = __importDefault(require("./count"));
describe("count test", function () {
    let countries1 = require("../../data");
    it("count with should output same result", function () {
        expect((0, count_1.default)([...countries1])[0].name).toEqual("Uzuzozne [1]");
    });
});
