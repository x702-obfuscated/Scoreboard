let allteams = ["blueTeam", "redTeam"]



window.addEventListener("storage", (e) =>{
    updateScoreboard();
});


function updateScoreboard(){
    for(let i = 0; i < allteams.length; i++){
        const team = document.getElementById(allteams[i]);
        
        if(!team) continue;

        const score = team.querySelector(".score")
        const key = allteams[i] + "Score";
        score.textContent = parseInt(localStorage.getItem(key)) || 0;
    }
}


updateScoreboard();





