const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
        
        let card = document.createElement('section');
        let heading = document.createElement('h2');
        heading.textContent = towns[i].name;
        card.appendChild(heading);
        document.querySelector('div.cards').appendChild(card);

        let motto = document.createElement('h3');
        motto.textContent = towns[i].motto; 
        card.appendChild(motto);
        document.querySelector('div.cards').appendChild(card);

        let founded = document.createElement('p');
        founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        card.appendChild(founded);
        document.querySelector('div.cards').appendChild(card);

        let population = document.createElement('p');
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        card.appendChild(population);
        document.querySelector('div.cards').appendChild(card);
        
        let rain = document.createElement('p');
        rain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
        card.appendChild(rain);
        document.querySelector('div.cards').appendChild(card);

        let image = document.createElement('img');
        image.setAttribute('src', "/lesson9a/images/" + towns[i].photo);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);

      }
  }

});