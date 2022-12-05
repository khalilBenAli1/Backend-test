import { country } from "../types/country";
import { people } from "../types/people";

const count = (arr: country[]) => {
  return arr.map((country: country) => {
    country.name = `${country.name} [${country.people.length}]`;
    country.people.forEach((people: people) => {
      people.name = `${people.name} [${people.animals.length}]`;
    });
    return country;
  });
};
export default count;
