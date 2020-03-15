const button1 = document.getElementById("but1");
const button2 = document.getElementById("but2");
const button3 = document.getElementById("but3");


button1.addEventListener("click", function(){
document.getElementById("header1").style.textAlign = "center";
document.getElementById("header2").style.textAlign = "right";
document.getElementById("header3").style.textAlign = "left";
document.getElementById("header4").style.textAlign = "center";
document.getElementById("header5").style.textAlign = "right";
document.getElementById("sec1").style.marginTop = "150px";
document.getElementById("sec2").style.marginBottom = "150px";
document.getElementById("sec3").style.marginBottom = "150px";
document.getElementById("sec4").style.marginBottom = "150px";
document.getElementById("sec5").style.marginBottom = "150px";

    
    document.getElementById("but1").style.display = "none";
});

button2.addEventListener("click", function(){
document.getElementById("header1").style.fontSize = "50px"
document.getElementById("header2").style.fontSize = "50px"
document.getElementById("header3").style.fontSize = "50px"
document.getElementById("header4").style.fontSize = "50px"
document.getElementById("header5").style.fontSize = "50px"
document.getElementById("but2").style.display = "none";
});

button3.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "green";
    document.getElementById("sec1").style.backgroundColor = "red";
    document.getElementById("sec2").style.backgroundColor = "pink";
    document.getElementById("sec3").style.backgroundColor = "yellow";
    document.getElementById("sec4").style.backgroundColor = "blue";
    document.getElementById("sec5").style.backgroundColor = "teal";
    document.getElementById("but3").style.display ="none";

});