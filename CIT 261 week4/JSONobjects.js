
//Javascript Object
var first = {name: "Jake"
            ,age: 40,
            occupation: "Machinist"};

document.getElementById("firstExample").innerHTML = first.name;

var second = JSON.stringify(first);

document.getElementById("secondExample").innerHTML = second;


var third = {
    country: "America",
    states: "50",
    weather: "All kinds",
    stateBird: "Eagle"
}

const stringThird = JSON.stringify(third, ['country', 'states'], '\xa0\xa0\xa0\xa0\xa0 ')


document.getElementById("thirdExample").innerHTML = stringThird;

let house = {description: "conventional", 
             color: "grey",
             lotSize: "1 acre",
             neighborhood: "wonderful",
             crimeRate: "none",
             boyScouts: "true"}

let changes = JSON.stringify(house, ['description', 'color', 'crimeRate'])

document.getElementById("fourthExample").innerHTML = changes;

let moreChanges = JSON.parse(changes)

document.getElementById("fifthExample").innerHTML = Object.entries(moreChanges);

let tvShow = {genre: "comedy",
              lowBudget: true,
              numOfActors: 5,
              title: "Ace Ventura",
              award: false,
              razzies: 1}

function modify(key, val) {
    if(typeof val === 'number') {
        return undefined;
    }else{
        return val;
    }
    
}

function modify1(key, val) {
    if(key == "genre") {
        return val = "funny";
    }else{
        return val;
    }
    
}

let critics = JSON.stringify(tvShow, modify);



document.getElementById("sixthExample").innerHTML = Object.entries(tvShow);

document.getElementById("seventhExample").innerHTML = critics;

let otherStuff = JSON.stringify(tvShow, modify1);
let moreTest = JSON.parse(otherStuff, modify);
document.getElementById("eighthExample").innerHTML = otherStuff;

document.getElementById("ninthExample").innerHTML = Object.entries(moreTest);

var myVehicles = ["Camaro", "Jetta", "BMW", "Xterra"];

function upper (key, value) {
    return value.toString().toUpperCase();
}

let cars1 = JSON.stringify(myVehicles);

document.getElementById("tenthExample").innerHTML = JSON.stringify(myVehicles, upper);


