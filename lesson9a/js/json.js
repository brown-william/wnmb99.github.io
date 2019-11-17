const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
        let town = ["Preston", "Soda Springs", "Fish Haven"];
        let card = document.createElement('section');
        let heading = document.createElement('h2');
        heading.textContent = towns[i].name;
        card.appendChild(heading);
        document.querySelector('div.cards').appendChild(card);

        let motto = document.createElement('h3');
        motto.textContent = towns[i].motto; 
        card.appendChild(motto);
        document.querySelector('div.cards').appendChild(card);

        let p2 = document.createElement('p');
        p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        card.appendChild(p2);
        document.querySelector('div.cards').appendChild(card);

        let image = document.createElement('img');
        image.setAttribute('src', prophets[i].imageurl);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);

      }
  }

});