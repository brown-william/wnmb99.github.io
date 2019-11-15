const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);
        document.querySelector('div.cards').appendChild(card);

        let p = document.createElement('p');
        p.textContent = 'Birth Date: ' + prophets[i].birthdate; 
        card.appendChild(p);
        document.querySelector('div.cards').appendChild(card);

        let p2 = document.createElement('p');
        p2.textContent = 'Birth Place: ' + prophets[i].birthplace;
        card.appendChild(p2);
        document.querySelector('div.cards').appendChild(card);

        let image = document.createElement('img');
        image.setAttribute('src', prophets[i].imageurl);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);

    }

});