import { country } from "../types/country";
import { people } from "../types/people";
import { animal } from "../types/animal";

const filterByString = (arr: country[], query: string) => {
  for (var i = 0; i < arr.length; i++) {
    arr[i].people = arr[i].people.filter((person: people) => {
      person.animals = person.animals.filter((animal: animal) =>
        animal.name.includes(query)
      );
      return person.animals.length;
    });
    if (!arr[i].people.length) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
export default filterByString;
