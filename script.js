




function startTimer() {
   
   let timeInput = document.getElementById('timeInput').value;
   let time = parseInt(timeInput); // Converting the input to an integer

  
   if (isNaN(time) || time <= 0) {
       document.getElementById('timerDisplay').innerText = "Please enter a valid number.";
       return;
   }

   
   document.getElementById('timerDisplay').innerText = `Time remaining: ${time} seconds`;
   let countdown = setInterval(function() {
       time--; 
       document.getElementById('timerDisplay').innerText = `Time remaining: ${time} seconds`;
       document.getElementById('bt').disabled = true;


       
       if (time <= 0) {
           clearInterval(countdown);
           document.getElementById('timerDisplay').innerText = "Time's up!";
       }
   }, 1000); 
}
