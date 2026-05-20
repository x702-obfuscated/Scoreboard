
let timer = null;
let totalSeconds = localStorage.getItem("totalSeconds") || 60;
let initSeconds = totalSeconds;

const clockInput = document.getElementById("clockInput");

function updateDisplay(){
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;

    document.getElementById("clock").textContent =
        String(min).padStart(2,"0") + ":" +
        String(sec).padStart(2, "0");

    if(min <= 0 && sec <= 0){
        document.getElementById("clock").textContent = "GAME OVER";
    }
}


window.addEventListener("storage", (e) =>{
    if(e.key === "totalSeconds"){
        const clock = document.getElementById("clock");
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
    updateDisplay();

}

updateDisplay();




