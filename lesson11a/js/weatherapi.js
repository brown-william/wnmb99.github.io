const apiURLa = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=dff0efbe64cd32ab4b2fdd6e4a621a4f';
const forecastAPIa = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=dff0efbe64cd32ab4b2fdd6e4a621a4f';


fetch(apiURLa)
  .then((response) => response.json())
  .then((jsObjecta) => {
    console.log(jsObjecta);
    document.getElementById('currentdatea').textContent = jsObjecta.weather[0].description;
    document.getElementById('higha').textContent = jsObjecta.main.temp_max.toFixed(0);
    document.getElementById('humida').textContent = jsObjecta.main.humidity;
    document.getElementById('wspeeda').textContent = jsObjecta.wind.speed.toFixed(0);

    var tempa = document.getElementById("higha").textContent;
    var windSpeeda = document.getElementById("wspeeda").textContent;

    if(tempa <= 50 && windSpeeda > 3) {
        var windChilla = Math.round(35.74 + 0.6215*tempa - 35.75*Math.pow(windSpeeda, 0.16) + 0.4275*tempa*Math.pow(windSpeeda, 0.16));
        document.getElementById("windchilla").innerHTML = windChilla.toFixed(0) + " &#8457;";

    } else {
        document.getElementById("windchilla").textContent = "N/A";
    }

   

  });

  fetch(forecastAPIa)
  .then((response) => response.json())
  .then((forecastObjecta) => {
    
    let constanta = 0;

    for(j=0; j < forecastObjecta.list.length; j++){

        let fcsta = forecastObjecta.list[j].dt_txt;
        if(fcsta.includes('18:00:00'))  {
            let theDaya = new Date(fcsta);
            let dayOptiona = { weekdatea: 'short'}
            let weekdatea = theDaya.toLocaleDateString('en-US', dayOptiona);
            let labelLa = 'daya' + constanta;
            document.getElementById(labelLa).textContent = weekdatea;

            let imagea = 'https://openweathermap.org/img/w/' + forecastObjecta.list[j].weather[0].icon + '.png';
            let typea = forecastObjecta.list[j].weather[0].description;

            let icona = 'fCasta' + constanta;
            document.getElementById(icona).setAttribute('src', imagea);
            document.getElementById(icona).setAttribute('alt', typea);

            let temperaturea = 'fTempa' + constanta;
            document.getElementById(temperaturea).textContent = Math.round(forecastObjecta.list[j].main.temp);
            constanta = constanta +1;

        }
    }
  });

  const getURLf = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(getURLf)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObjectf) {
    const towns = jsonObjectf['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Soda Springs") {
        
      
        let list = document.createElement('ul'); 

        
        for (let j = 0; j < towns[i].events.length; j++) {
          let item = document.createElement('li');
          item.textContent = towns[i].events[j];
          list.appendChild(item);
        } 

        document.querySelector('div.events').appendChild(list); 
      } 
    } 
  });