const button1 = document.getElementById("bnt1");
const button2 = document.getElementById("bnt2");
const button3 = document.getElementById("bnt3");
document.getElementById("bnt1").style.fontSize = "50px";
document.getElementById("bnt2").style.fontSize = "50px";
document.getElementById("bnt3").style.fontSize = "50px";
button1.addEventListener("click", function(){

document.getElementById("sec1").style.backgroundColor = "#000066";
document.getElementById("bnt1").style.display = "none";
document.getElementById("bnt2").style.display = "block";
});




button2.addEventListener("click", function(){
    document.getElementById("bnt2").style.display = "none";
    document.getElementById("bnt3").style.display = "block";




});
button3.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector("img").style.display = "block";



});