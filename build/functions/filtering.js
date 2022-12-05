"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterByString = (arr, query) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i].people = arr[i].people.filter((person) => {
            person.animals = person.animals.filter((animal) => animal.name.includes(query));
            return person.animals.length;
        });
        if (!arr[i].people.length) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};
exports.default = filterByString;
