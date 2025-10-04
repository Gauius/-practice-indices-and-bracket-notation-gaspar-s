// Task 1: Create a multi-dimensional array with nine books and/or movies of your choice.
let moviesCollection = [
  ["Superman", "Avatar", "Mission Impossible"],
  ["Captain America", "The Fantastic Four", "Mickey 17"],
  ["Wicked", "28 Years Later", "A Minecraft Movie"],
];
// Task 2: Access and log all the elements in the array using bracket notation with numbers.
console.log("Popular Movies 2025: ");
console.log("1. " + moviesCollection[0][0]);
console.log("2. " + moviesCollection[0][1]);
console.log("3. " + moviesCollection[0][2]);
console.log("4. " + moviesCollection[1][0]);
console.log("5. " + moviesCollection[1][1]);
console.log("6. " + moviesCollection[1][2]);
console.log("7. " + moviesCollection[2][0]);
console.log("8. " + moviesCollection[2][1]);
console.log("9. " + moviesCollection[2][2]);
// Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item.
let row = 0;
let item = 0;
console.log("Popular Movies 2025: ");
console.log("1. " + moviesCollection[row][item]);
item = 1;
console.log("2. " + moviesCollection[row][item]);
item = 2;
console.log("3. " + moviesCollection[row][item]);
row = 1;
item = 0;
console.log("4. " + moviesCollection[row][item]);
item = 1;
console.log("5. " + moviesCollection[row][item]);
item = 2;
console.log("6. " + moviesCollection[row][item]);
row = 2;
item = 0;
console.log("7. " + moviesCollection[row][item]);
item = 1;
console.log("8. " + moviesCollection[row][item]);
item = 2;
console.log("9. " + moviesCollection[row][item]);
// Task 4: Write a loop that prints all the items on the second shelf.
console.log("Popular Movies 2025 at Shelf 2: ");
for (let index = 0; index < moviesCollection[1].length; index++) {
  console.log(`${index + 1}. ` + moviesCollection[1][index]);
}
