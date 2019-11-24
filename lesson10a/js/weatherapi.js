const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=dff0efbe64cd32ab4b2fdd6e4a621a4f';
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=dff0efbe64cd32ab4b2fdd6e4a621a4f&units=imperial';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wspeed').textContent = jsObject.wind.speed.toFixed(0);

    var temp = document.getElementById("high").textContent;
    var windSpeed = document.getElementById("wspeed").textContent;

    if(temp <= 50 && windSpeed > 3) {
        var windChill = Math.round(35.74 + 0.6215*temp - 35.75*Math.pow(windSpeed, 0.16) + 0.4275*temp*Math.pow(windSpeed, 0.16));
        document.getElementById("windchill").innerHTML = windChill.toFixed(0) + " &#8457;";

    } else {
        document.getElementById("windchill").textContent = "N/A";
    }

   

  });

  fetch(forecastAPI)
  .then((response) => response.json())
  .then((forecastObject) => {
    
    let constant = 0;

    for(i=0; i < forecastObject.list.length; i++){

        let fcst = forecastObject.list[i].dt_txt;
        if(fcst.includes('18:00:00'))  {
            let theDay = new Date(fcst);
            let dayOption = { weekdate: 'short'}
            let weekdate = theDay.toLocaleDateString('en-US', dayOption);
            let labelL = 'day' + constant;
            document.getElementById(labelL).textContent = weekdate;

            let image = 'https://openweathermap.org/img/w/' + forecastObject.list[i].weather[0].icon + '.png';
            let type = forecastObject.list[i].weather[0].description;

            let icon = 'fCast' + constant;
            document.getElementById(icon).setAttribute('src', image);
            document.getElementById(icon).setAttribute('alt', type);

            let temperature = 'fTemp' + constant;
            document.getElementById(temperature).textContent = Math.round(forecastObject.list[i].main.temp);
            constant = constant +1;

        }
    }
  });