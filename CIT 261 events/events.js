
window.onload = function() {

    const menu = document.getElementById('menu1');



    let f1 = document.createElement("li");
f1.textContent = 'Second';


let f2 = document.createElement("li");
f2.textContent = 'Third';
let f3 = document.createElement("li");
f3.textContent = 'Fourth';
let f4 = document.createElement("li");
f4.textContent = 'Fifth';
let f5 = document.createElement("li");
f5.textContent = 'Sixth';



menu.appendChild(f2);
menu.appendChild(f1);
menu.appendChild(f3);
menu.appendChild(f4);
menu.appendChild(f5);


};


const btn1 = document.getElementById("btn");

btn1.addEventListener("click", function() {
document.getElementById("spin").style.display = "block";
});


window.addEventListener('scroll', function(){
    
    const scroller = document.documentElement.scrollHeight - window.innerHeight;
    const scrolldown = window.scrollY;

    if (Math.ceil(scrolldown) === scroller) {
        const sec1 = document.createElement('section');
       const vid = document.createElement('h1');
       vid.textContent = 'Congratulations!'
        sec1.appendChild(vid)
        document.querySelector('div.example3').appendChild(sec1);

        
    };



});
