console.log("red");

var timerContainer = document.getElementById("timerContainer");
var diplay = document.getElementById("diplay");
var hours = document.getElementById("hours");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var inputs = document.getElementById("inputs");
var hoursInputs = document.getElementById("hoursInputs");
var minuteInputs = document.getElementById("minuteInputs");
var secondInputs = document.getElementById("secondInputs");
var buttons = document.getElementById("buttons");

// hours.innerHTML = ""
// hours.innerHTML = ""
// hours.innerHTML = ""





function start(absd){
   hours.innerHTML =  hoursInputs.value,"00"
   minute.innerHTML = minuteInputs.value,"00"
   second.innerHTML = secondInputs.value,"00"
}

function reset(eleme){
   hours.innerHTML = "00"
   minute.innerHTML = "00"
   second.innerHTML = "00"
}