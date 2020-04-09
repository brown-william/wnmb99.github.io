const trans = document.getElementById("tran1");
const ex1 = document.getElementById("x2");
const ex2 = document.getElementById("x1");
const ex3 = document.getElementById("x4");
const ex4 = document.getElementById("x3");
const ex5 = document.getElementById("x6");
const ex6 = document.getElementById("x5");
const ex7 = document.getElementById("x8");
const ex8 = document.getElementById("x7");


trans.addEventListener("click", function() {

ex1.style.transform = "rotate(45deg)";
ex2.style.transform = "skew(10deg, 12deg)";
ex3.style.transform = "skewX(30deg)";
ex4.style.transform = "skewY(70deg)";
ex5.style.transform = "scaleX(2)";
ex6.style.transform = "scaleY(1.5)";
ex7.style.transform = "scale(1.5, 1.5)";
ex8.style.transform = "rotate(45deg)";






});
