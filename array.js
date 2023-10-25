//1. Console log the length of the array, console log the 3rd value of the array, console log the 5th vaulue of the array
//let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];

let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; 
//console log the length of the array 
console.log("Length of the array:", myAlphabet.length); 
console.log("3rd value of the array:", myAlphabet[2]); 
console.log("5th value of the array:", myAlphabet[4]); 

//2. Declare and initialize an array called Planets with 8 string values

let plants = ["Mercury", "Venus", "Earth", "Mars", "Jupitar", "Saturn", "Uranus", "Neptune"]; 

// 3. For each item in this array console.log the item
//let furniture = ['Table', 'Chairs','Couch'];

let furniture = ['Table', 'Chairs','Couch']; 
for (let item of furniture) {
    console.log(item); 
}

//4. Loop over the array and if the value is "Math" console log "yuck"
//let student1Courses = ['Math', 'English', 'Programming'];

let student1Courses = ['Math', 'English', 'Programming']; 
for (let i = 0; i < student1Courses.length; i++) { 
    if (student1Courses[i] === 'Math') 
    { console.log('yuck'); } }

//5.  Create an array of 4 fruits, then add 2 fruits (kiwi, grapes) to the end of the array using the method learned. Display the result in the console.
// let fruits = ["apple", "orange", "pear", "banana"]   
//(Array becomes apple, orange, pear, banana, kiwi, grapes)

let fruits = ["apple", "orange", "pear", "banana"];
fruits.push("kiwi", "grapes");
console.log(fruits); 

//6. Remove the last value (grapes) from the array in #5. Display the result in the console.
//(Array becomes apple, orange, pear, banana, kiwi)

let fruits = ["apple", "orange", "pear", "banana", "kiwi", "grapes"];
fruits.pop(); //Removes the last element 
console.log(fruits); 

//7. Remove the first fruit (apple) from the array in #5. Display the result in the console.
//(Array becomes orange, pear, banana, kiwi)

let fruits = ["apple", "orange", "pear", "banana", "kiwi"]
fruits.shift(); // Removes the first element 
console.log(fruits);

//8.  Add a fruit (dragonfruit) to the beginning of the array in #5. Display the result in the console.
//(Array becomes dragonfruit, orange, pear, banana, kiwi)

let fruits = ["orange", "pear", "banana", "kiwi"];
fruits.unshift("dragonfruit"); // Adds dragonfruit to the beginning 
console.log(fruits); 

//9.   Change the fruit 'orange' to be the fruit 'persimmon', and display the result in the console.
//(Array becomes dragonfruit, persimmon, pear, banana, kiwi)
let fruits = ["dragonfruit", "orange", "pear", "banasna", "kiwi"]
fruits[1] = "persimmon";
console.log(fruits); 

//10.  In our console, display the length of our fruit array from #9.  The output should read "My array has____items."
My array has 5 items 

//Bonus:  Add a fruit (pomegranate) in the second location of your array. Display the result in the console. (Display should now read dragonfruit, pomegranate, persimmon, pear, banana, kiwi.)
let fruits = ["dragonfruit", "persimmon", "pear", "banasna", "kiwi"];
fruits.splice(1, 0, "pomegranate"); 
console.log(fruits); 
