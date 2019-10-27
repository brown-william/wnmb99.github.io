function chill() {
    var temp = parseFloat(document.getElementById("temp").textContent);
    console.log("temp=" + temp); 
    var wSpeed = parseFloat(document.getElementById("wspeed").textContent);
    console.log("wspeed=" + wSpeed);
    
    if(temp<50 && wSpeed > 3) {

        var windChill = 35.74 + 0.6215 * temp - 37.75 * Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
        console.log("wChill=" + windChill);
        document.getElementById("wChill" + windChill).innerHTML = windChill + " &#8457";

    } else {
        document.getElementById("wChill").innerHTML = "N/A";
    }










}