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



