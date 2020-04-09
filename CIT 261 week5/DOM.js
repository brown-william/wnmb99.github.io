
//Example 1
const button1 = document.querySelector(".button1");
const spanner = document.querySelector(".spanPlay")

button1.addEventListener("click", function(){

    const gameNames = ["Football", "BasketBall", "Hockey", "Soccer", "Badmitten", "Red Rover"];

    spanner.textContent = gameNames[Math.floor(Math.random() * gameNames.length)];
    
});

//Example 2
const nextButton = document.querySelector(".button2");
const nextMissing = document.querySelector(".missing");
const cleanButton = document. querySelector(".clean");

nextButton.addEventListener("click", function() {

const newLine = document.createElement("LI");

const theCatch = document.createElement("h3");

const tease = ["Gorgeous", "Amazing", "Stupendous", "Funny", "Mesmerizing", "The best"];

newLine.appendChild(theCatch);

nextMissing.appendChild(newLine);



theCatch.innerHTML = tease[Math.floor(Math.random() * tease.length)]
cleanButton.addEventListener("click", function(){
    nextMissing.removeChild(newLine);
});


});


//Example 3
const button3 = document.querySelector(".button3");
const scenes = '/CIT 261 week5/pictures.json';

button3.addEventListener("click",function(){
fetch(scenes)
  .then(function (response) {
    return response.json();
  })
  .then(function (picturesObject) {
    console.table(picturesObject); 
    const scenesA = picturesObject['pictures'];
     
        for(let i = 0; i < scenesA.length; i++ ) {
        
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = scenesA[i].name;
        card.appendChild(h2);
        document.querySelector('div.magic').appendChild(card);

        let p = document.createElement('p');
        p.textContent = scenesA[i].classification; 
        card.appendChild(p);
        document.querySelector('div.magic').appendChild(card);

        let image = document.createElement('img');
        image.setAttribute('src', "/CIT 261 week5/images/" + scenesA[i].photo);
        card.appendChild(image);
        document.querySelector('div.magic').appendChild(card);

    }
  }
)
});


