// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//EXERCISES

/*Use `forEach` to log each name and each province to the 
console. Then, log each name with a matching province in the 
format "Name (Province)". */
console.log("Exercise 1");
names.forEach((name) => console.log(name));

function matchNamesWithProv() {
  provinces.forEach((province, index) => {
    console.log(`${names[index]} (${province})`);
  });
}

matchNamesWithProv();

/*Use `map` to create a new array of province names in all uppercase.
 Log the new array to the console. */

console.log("Exercise 2");
const provUpperCase = provinces.map((province) => province.toUpperCase());

console.log(provUpperCase);

/*Create a new array using `map` that 
contains the length of each name. */

console.log("Exercise 3");

const numberOfCharacters = names.map((name) => name.length);

console.log(numberOfCharacters);

/*Use `sort` to alphabetically sort the provinces */
console.log("Exercise 4");

const sortedProvinces = provinces.sort();

console.log(sortedProvinces);

/*Use `filter` to remove provinces containing "Cape". 
Log the count of remaining provinces. */
console.log("Exercise 5");

const noCape = provinces.filter((province) => !province.includes("Cape"));

console.log(noCape.length);

/*Create a boolean array using `map` and `some` 
to determine if a name contains the letter 'S'. */

console.log("Exercise 6");

const containsSArray = names.map((name) =>
  name.toLowerCase().split("").some((character) => character === 's'
 ));

 console.log(containsSArray);

/* */


