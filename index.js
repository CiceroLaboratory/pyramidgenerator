//Step 1
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

//Step 2
let character;

//Step 3
character = "Hello";

//Step 4
character = 'Hello';

//Step 5
character = 'Hello';
console.log(character)

//Step 6
character = "World"
console.log(character);

//Step 7
character = 'Hello';
console.log(character);
character = "World";
console.log(character)

//Step 8
let secondCharacter;

//Step 9
console.log(secondCharacter)

//Step 10
secondCharacter = "Test"

//Step 11
secondCharacter = character;

//Step 12
character = 'Hello';

//Step 13
let profession = "teacher";
let age;
console.log(age)
console.log(profession)

//Step 14 
character = "Hello";

//Step 15 
let count = 8;

//Step 16 
character = 'Hello';
count = 8;
console.log(count + 1)

//Step 17
// remove conole.log

//Step 18
let rows = []

//Step 19
rows = ["Naomi", "Quincy", "CamperChan"];

//Step 20
console.log(rows[0])

//Step 21
rows[2] = 10
console.log(rows)

//Step 22
rows[rows.length - 1]

//Step 23
// Just remove 

//Step 24
cities[cities.length - 1] = "Mexico City"
console.log(cities);

// Step 25
//Remove all of your code from the previous step.

// Step 26
rows.push("freeCodeCamp")

// Step 27
let popped = rows.pop()
console.log(popped);

// Step 28
let pushed = rows.push("freeCodeCamp");
console.log(pushed);

// Step 29
//remove some things

// Step 30
character = "Hello";
count = 8;
let rows = [];

// Step 31
// Just change let for const

// Step 32
character = "#";

// Step 33
for ('iterator'; "condition"; "iteration") { }

// Step 34
for (let i = 0; "condition"; "iteration") { }

// Step 35
for (let i = 0; i < count; "iteration") { }

// Step 36
for (let i = 0; i < count; i = i + 1) { }

// Step 37
console.log(i)

// Step 38
rows.push(i);

// Step 39
let result = "";

// Step 40
console.log(result)

// Step 41
for (const row of rows){}

// Step 42
for (const row of rows) {
  result = result + row
}

// Step 43
for (const row of rows) {
  result = result + row + "\n";
}

// Step 44
for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

// Step 45
for (let i = 0; i < count; i = i + 1) {
  
  rows.push(character.repeat(i));
}

// Step 46
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i+1))
}

// Step 47
function padRow(){}

// Step 48
padRow()

// Step 49
const call = padRow();

// Step 50
console.log(call);

// Step 51
return  "Hello!";

// Step 52
function padRow(name) {
  return "name";
}

// Step 53
// parameter added

// Step 54
call = padRow("Cícero");

// Step 55
function addTwoNumbers(a, b){
  return  a + b
}

const sum = addTwoNumbers(5,10)
console.log(sum)

// Step 56
// removed addNumbers function

// Step 57
function padRow(name) {
  return character + name;
}

// Step 58
const  test = "Testing";

// Step 59
  return test;

// Step 60
  function padRow(name) {
  const test = "Testing";
  console.log("This works!");
  return test;
  console.log("This works!"); 
}

// Step 61
function padRow() {
  const test = "Testing";
  return test;
}
padRow();

// Step 62
function padRow() {
}
padRow();

// Step 63
//a call declaration has been removed.

// Step 64
function padRow(rowNumber, rowCoun) {
}

// Step 65
  return character.repeat(rowNumber);

// Step 66
  for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow())
  padRow
}

// Step 67
for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i+1, count))
}

// Step 68
function padRow(rowNumber, rowCount) {
  return " " + character.repeat( rowNumber)+ " ";
}

// Step 69
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

// Step 70
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
// Step 71
for (let i = 0; i < count; i +=1) {}

// Step 72
for (let i = 0; i < count; i +=1) {}

// Step 73
for (let i = 1; i < count; i++) {
  rows.push(padRow(i + 1, count));
}

// Step 74
for (let i = 1; i < count; i++) {
  rows.push(padRow(i , count));
} 
// Step 75
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}