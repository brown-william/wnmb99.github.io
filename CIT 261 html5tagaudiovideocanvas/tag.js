var can = document.querySelector("canvas");

can.width = 600;
can.height = 600;

var v = can.getContext('2d');


v.fillRect(100, 100, 100, 100);
v.fillRect(200, 250, 100, 100);
v.fillRect(150, 300, 100, 100);
v.fillRect(400, 300, 100, 100);

v.beginPath();
v.moveTo(120, 250);
v.lineTo(120, 400);
v.lineTo(325, 400);
v.lineTo(325, 250);
v.lineTo(120, 250);
v.stroke();

v.beginPath();
v.moveTo(100, 100);
v.lineTo(400, 100);
v.lineTo(400, 400);
v.lineTo(500, 400);
v.lineTo(500, 200);
v.lineTo(100, 200);
v.stroke();




var button = document.getElementById('mess');

button.addEventListener('click', function(){

for (i = 0; i < 100; i++) {
    var x = Math.random() * 600;
    var y = Math.random() * 600;
    v.beginPath();
    v.arc(x, y, 30, 0, Math.PI * 2, false);
    v.strokeStyle = 'green';
    v.stroke();
}



});