
let scoreboardState = localStorage.getItem("scoreboardState") || {};
let pointValue = localStorage.getItem("pointValue") || 1000;




function addScore(button){
    const team = button.closest(".team");
    const score = team.querySelector(".score");

    score.textContent = parseInt(score.textContent) + pointValue;

    localStorage.setItem(team.id+"Score",score.textContent);

}

function subScore(button){
    const team = button.closest(".team");
    const scoreElem = team.querySelector(".score");
    let score = parseInt(scoreElem.textContent);
    

    scoreElem.textContent = parseInt(scoreElem.textContent) - pointValue;

        if(score <= 0){
            scoreElem.textContent = 0;  
        }
    console.log(scoreElem.textContent);
    localStorage.setItem(team.id+"Score",scoreElem.textContent);
}

function resetScore(button){
    const team = button.closest(".team");
    const scoreElem = team.querySelector(".score");

    scoreElem.textContent = 0;  

    localStorage.setItem(team.id+"Score",scoreElem.textContent);
}

function updatePointValues(){
    document.querySelectorAll(".addScore").forEach(btn =>{
        btn.textContent = "+" + pointValue;
    });

    document.querySelectorAll(".subScore").forEach(btn =>{
        btn.textContent = "-" + pointValue;
    });
}

updatePointValues();




