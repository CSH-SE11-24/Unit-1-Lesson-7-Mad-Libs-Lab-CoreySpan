// Console log a welcome message with instructions to mad libs
const name = prompt("What's your name?");
console.log(`Welcome to your mad libs, ${name}` );


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjustive = prompt("Give me an adjustive")
let verb = prompt("Give me a verb")
let noun = prompt("Give me a noun")
let pnoun = prompt("Give me a plural noun")

// Create an array that stores the values the user entered
let newarray = []
newarray.push(adjustive)
newarray.push(verb)
newarray.push(noun)
newarray.push(pnoun)


// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive

console.log("In a small " + newarray[0] + " school in the Bronx, there was a problem with too many " + newarray[3] + ". These" + newarray[3] + " loved to " + newarray[1] + ", which caused Mr.P so many headaches. However, no one to remove them because they were too " + newarray[1] + " so they stayed there forever.")