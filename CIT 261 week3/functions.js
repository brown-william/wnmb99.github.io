let first = ["a Master", "an Apprentice", "a Novice", "an Expert", "a Grandmaster"];

//variable that randomizes the array value of "first"
let rand = first[Math.floor(Math.random() * first.length)];

//list of students names
let students = ["John ", "Jimmy ", "William ", "Isaiah ", "Thomas "];

//variable that randomizes the array value of "students"
let randS = students[Math.floor(Math.random() * students.length)];


    
    for (i = 0; i < first.length; i++) {
        
        document.getElementById('example2').innerHTML += first[i] + " " + students[i] + "<br>";
        
    }
 
  

function doSomething(name, age) {
    let result = name + " " + age;
    return result;

}

document.getElementById("example3").innerHTML = doSomething("John", 32) + "<br>" + doSomething("william", 35) + "<br>" + doSomething("Allicia", 50);





document.getElementById("example1").innerHTML = "today " + randS + "is " + rand;

const theButton1 = document.querySelector(".fillIn");

theButton1.addEventListener("click", function(){
    
    const theColor = document.querySelector(".color");
    const theAnimal = document.querySelector(".animal");
    const theObject = document.querySelector(".object");
    const storyValues = {color: 'white', animal: 'rabbit', object: 'log'};

    theColor.textContent = storyValues.color;
    theAnimal.textContent = storyValues.animal;
    theObject.textContent = storyValues.object;
    
});
