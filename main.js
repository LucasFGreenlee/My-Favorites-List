/**
 * Using insertBefore
 * todo reference - obtain a reference to where we'll add it
 * todo create - create an li element
 * todo reference - obtain a reference to second element
 * todo print - print second element reference to console
 * todo insert - use insertBefore to add newMovie just before the second element.
 * */

// REFERENCE
const list = document.getElementById("my-favorite-books");
const list = document.getElementById("my-closet");

// CREATE
let newMovie = document.createElement("li");
newMovie.innerText = "Dr. Strangelove";

// REFERENCE
let second = list.children[1];

// PRINT
console.log(second);

// INSERT
list.insertBefore(newMovie, second);

let a = document.createElement("a");
a.href = "https://github.com/LucasFGreenlee";
a.textContent = "Github";

document.body.appendChild(a);