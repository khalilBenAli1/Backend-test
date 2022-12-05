import { count, filterByString } from "./functions";

const filter = process.argv.find((arg) => arg.includes("--filter="));
const counter = process.argv.find((arg) => arg.includes("--count"));

let countries = require("../data");

if (filter) {
  filterByString(countries, filter.split("=")[1]);
}

if (counter) {
  count(countries);
}

console.log(JSON.stringify(countries));
