const newContainer = document.querySelector(".example1");

const btn = document.querySelector(".button1");


btn.addEventListener("click", function() {
    var requestURL = new XMLHttpRequest();
    requestURL.open('GET', 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json');
    requestURL.onload = function() {
        var theData = JSON.parse(requestURL.responseText);
        htmlrender(theData);
    };
    requestURL.send();
     
});

function htmlrender(data) {
    const prophets = data['prophets'];
    var theString = "";

    for (i = 0; i < prophets.length; i++) {
        theString += "<p>" + prophets[i].name + " " + prophets[i].lastname + ", Date of Birth was " + prophets[i].birthdate + ", he had " + prophets[i].numofchildren + " children.</p>";
    }
       newContainer.insertAdjacentHTML('beforeend', theString);

}



