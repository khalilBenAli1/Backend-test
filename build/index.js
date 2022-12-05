"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
let countries = require("../data");
const filter = process.argv.find((arg) => arg.includes("--filter="));
const counting = process.argv.find((arg) => arg.includes("--count"));
if (filter) {
  (0, functions_1.filterByString)(countries, filter.split("=")[1]);
}
if (counting) {
  (0, functions_1.count)(countries);
}
