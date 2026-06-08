let timer = null;
let totalSeconds = localStorage.getItem("totalSeconds") || 60;
let initSeconds = totalSeconds;

const clockInput = document.getElementById("clockInput");

function updateDisplay(){
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;

    document.getElementById("clockTime").textContent =
        String(min).padStart(2,"0") + ":" +
        String(sec).padStart(2, "0");

    if(min <= 0 && sec <= 0){
        document.getElementById("clockTime").textContent = "GAME OVER";
    }
}


window.addEventListener("storage", (e) =>{
    if(e.key === "totalSeconds"){
        const clock = document.getElementById("clockTime");
        totalSeconds = localStorage.getItem("totalSeconds");
        updateDisplay();
        
    }
})


function tick(){
    if(totalSeconds <= 0){
        pauseClock();
        return;
    }

    totalSeconds--;
    localStorage.setItem("totalSeconds",totalSeconds);
    updateDisplay();
}


function startClock(){
    if(timer !== null) return;

    tick();
    timer = setInterval(tick,1000);


    document.getElementById("startClock").style.display = "none";
    document.getElementById("pauseClock").style.display = "block";
}


function pauseClock(){
    clearInterval(timer);
    timer = null;

    document.getElementById("startClock").style.display = "block";
    document.getElementById("pauseClock").style.display = "none";
}

function resetClock(){
    pauseClock();
    totalSeconds = initSeconds;
    localStorage.setItem("totalSeconds",totalSeconds);
    updateDisplay();

}

function editClock(){
    if(timer !== null) return;
    const clock = document.getElementById("clockTime");
    const input = document.getElementById("clockInput");

    clock.style.display = "none";
    input.style.display="block";
    input.focus();
    input.select();
}

function saveEdit(){
    let value = clockInput.value.trim();

    let min, sec;



    if(match = value.match(/^(\d\d):([0-5]\d)$/) ){
        min = parseInt(match[1]);
        sec = parseInt(match[2]);
    }
    else if(match = value.match(/^(\d):([0-5]\d)$/)){
        min = parseInt(match[1]);
        sec = parseInt(match[2]);
    }
    else if(match = value.match(/^:([0-5]\d)$/)){
        min = 0;
        sec = parseInt(match[1]);
    }
    else if(match = value.match(/^\d\d\d\d$/)){
        min = parseInt(match[0].substring(0,2));
        sec = parseInt(match[0].substring(2));
    }
    else if(match = value.match(/^\d\d\d$/)){
        min = parseInt(match[0].substring(0,1));
        sec = parseInt(match[0].substring(1));
    }
    else if (!isNaN(value) && value !=="" && value < 100){
        min = parseInt(value);
        sec = 0;
    }
    else{
        document.getElementById("clockTime").style.display = "block";
        clockInput.value="";
        clockInput.style.display = "none";
        updateDisplay();
        return;
    }

    totalSeconds = (Math.min(min,99) * 60) + Math.min(sec,59);
    initSeconds = totalSeconds;

    localStorage.setItem("totalSeconds", totalSeconds);
    document.getElementById("clockTime").style.display = "block";
    clockInput.style.display = "none";
    clockInput.value="";

    updateDisplay();
}


updateDisplay();

if(clockInput){
    clockInput.addEventListener("keydown", function(e){
    if(e.key === "Enter") saveEdit();
    if(e.key === "Escape") {
        clockInput.style.display = "none";
        document.getElementById("clockTime").style.display = "block";
    }
    });

    clockInput.addEventListener("input", () => {
        if (/^\d+$/.test(clockInput.value)) {
            clockInput.style.color = "#8a8a8a";
        } else {
            clockInput.style.color = "#dd1212";
        }
    });

    clockInput.addEventListener("blur",saveEdit);
}




