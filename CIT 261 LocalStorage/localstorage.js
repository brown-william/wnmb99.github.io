const plankey = document.getElementById("planInput");
const raceInput = document.getElementById("race");
const planLog = document.getElementById("btn");
const log = document.getElementById("outPut");
const breakIt = document.getElementById("crash");
planLog.addEventListener("click", function(){
    const plan = plankey.value;
    const race = raceInput.value;

    if (plan && race) {
        localStorage.setItem(plan, race);
        location.reload();}
    else {
        localStorage.clear();
        location.reload();
        
    }
   
});

for (let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    log.innerHTML += `${key}: ${value}<br>`;
    if(key.length > 10) {
        breakIt.textContent = "Too many Entries detected, dumping storage";
        localStorage.clear();
        }
};

