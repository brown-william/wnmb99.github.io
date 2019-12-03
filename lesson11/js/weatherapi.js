
const apiURLc = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=dff0efbe64cd32ab4b2fdd6e4a621a4f';
const forecastAPIc = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=dff0efbe64cd32ab4b2fdd6e4a621a4f&units=imperial';


fetch(apiURLc)
  .then((response) => response.json())
  .then((jsObjectc) => {
    console.log(jsObjectc);
    document.getElementById('currentc').textContent = jsObjectc.weather[0].description;
    document.getElementById('highc').textContent = jsObjectc.main.temp_max.toFixed(0);
    document.getElementById('humidc').textContent = jsObjectc.main.humidity;
    document.getElementById('wspeedc').textContent = jsObjectc.wind.speed.toFixed(0);

    var tempc = document.getElementById("highc").textContent;
    var windSpeedc = document.getElementById("wspeedc").textContent;

    if(tempc <= 50 && windSpeedc > 3) {
        var windChillc = Math.round(35.74 + 0.6215*tempc - 35.75*Math.pow(windSpeedc, 0.16) + 0.4275*tempc*Math.pow(windSpeedc, 0.16));
        document.getElementById("windchillc").innerHTML = windChillc.toFixed(0) + " &#8457;";

    } else {
        document.getElementById("windchillc").textContent = "N/A";
    }

   

  });

  fetch(forecastAPIc)
  .then((response) => response.json())
  .then((forecastObjectc) => {
    
    let constantc = 0;

    for(c=0; c < forecastObjectc.list.length; c++){

        let fcstc = forecastObjectc.list[c].dt_txt;
        if(fcstc.includes('18:00:00'))  {
            let theDayc = new Date(fcstc);
            let dayOptionc = { weekdatec: 'short'}
            let weekdatec = theDayc.toLocaleDateString('en-US', dayOptionc);
            let labelLc = 'dayc' + constantc;
            document.getElementById(labelLc).textContent = weekdatec;

            let imagec = 'https://openweathermap.org/img/w/' + forecastObjectc.list[c].weather[0].icon + '.png';
            let typec = forecastObjectc.list[c].weather[0].description;

            let iconc = 'fCastc' + constantc;
            document.getElementById(iconc).setAttribute('src', imagec);
            document.getElementById(iconc).setAttribute('alt', typec);

            let temperaturec = 'fTempc' + constantc;
            document.getElementById(temperaturec).textContent = Math.round(forecastObjectc.list[c].main.temp);
            constantc = constantc +1;

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
      if (towns[i].name == "Fish Haven") {
        
      
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