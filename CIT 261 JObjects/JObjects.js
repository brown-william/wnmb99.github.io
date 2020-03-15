

var hikeObject = function(name, state, county, scenery, popDens) {

    this.name = name;
    this.state = state;
    this.county = county;
    this.scenery = scenery;
    this.popDens = popDens;
    
    this.displayObject = function(){
        document.getElementById("example1").innerHTML = "The hike is " + this.name +", in the state of " + this.state + " and the county of " + this.county + ", the scenery is " + this.scenery + ", and the average population density is " + this.popDens;
    };
};




var redRock = new hikeObject('Redrock', 'Utah', 'Iron', 'rocky', 'high');



redRock.displayObject();


hikeObject.prototype.birdTypes = "Predator";

hikeObject.prototype.birds = function() {
    return "In " + this.name + ", one of the common bird varieties is " + this.birdTypes;
}

document.getElementById("example2").innerHTML = redRock.birds();


document.getElementById("example3").innerHTML = "Is name a property of redRock? " + redRock.hasOwnProperty("name") + "<br>";


document.getElementById("example4").innerHTML = "Is birdTypes a property of redRock? " + redRock.hasOwnProperty("birdTypes") + "<br>";

document.getElementById("example5").innerHTML = Object.keys(redRock);

document.getElementById("example6").innerHTML = Object.values(redRock);

