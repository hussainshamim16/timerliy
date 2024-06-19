




function startTimer() {

    let timeInput = document.getElementById('timeInput').value;
    let container = document.getElementById('container');
    let time = parseInt(timeInput); // Converting the input to an integer


    if (isNaN(time) || time <= 0) {
        document.getElementById('timerDisplay').innerText = "Please enter a valid number.";
        return;
    }


    document.getElementById('timerDisplay').innerText = `Time remaining: ${time} seconds`;
    let countdown = setInterval(function () {
        time--;
        document.getElementById('timerDisplay').innerText = `Time remaining: ${time} seconds`;
        document.getElementById('bt').disabled = true;



        if (time <= 0) {
            clearInterval(countdown);
            document.getElementById('timerDisplay').innerText = "Time's up!";
            var h1 = document.createElement("h1");
            var atribute = document.createElement("a");
            
                var atribute 
                h1.style.color = "black"
                h1.innerHTML = "Time Up"
                atribute.style.color = "black"
                atribute.innerHTML = "Return"
                atribute.href = "./index.html"

                atribute.style.padding =  "17px 20px" ;
                atribute.style.borderRadius =  "50px";
                atribute.style.border =  "none";
                atribute.style.fontSize =  "1.2em";
                atribute.style.marginTop =  "10px";
                atribute.style.backgroundColor =  "#ff7a8a";
                atribute.style.textDecoration =  "none";
                atribute.style.color =  "white";
                atribute.style.fontWeight =  "700";

                container.innerHTML = ""
                container.appendChild(h1);
                container.appendChild(atribute);
                container.style.display = "flex";
                container.style.alignItems = "center";
                container.style.justifyContent = "center";
                container.style.flexDirection = "column";
      
            
        }
    }, 1000);
}
