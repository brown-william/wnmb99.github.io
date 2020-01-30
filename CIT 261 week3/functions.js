var first = ["a Master", "an Apprentice", "a Novice", "an Expert", "a Grandmaster"];

//variable that randomizes the array value of "first"
var rand = first[Math.floor(Math.random() * first.length)];

//list of students names
var students = ["John ", "Jimmy ", "William ", "Isaiah ", "Thomas "];

//variable that randomizes the array value of "students"
var randS = students[Math.floor(Math.random() * students.length)];





document.getElementById("function").innerHTML = "today " + randS + "is " + rand;