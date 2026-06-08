const teams = [
    {name : "blue", color: "#3a82df", score : 0},
    {name : "red", color: "#ef5e5e", score : 0},
    // {name : "green", color: "#6bf26b", score : 0},
    // {name : "yellow", color: "#ffff62", score : 0},
]


function displayTeams(){

    teams.forEach((team) =>{
        const teamPanel = document.createElement("div");
        teamPanel.classList.add("teamPanel");
        teamPanel.id = `${team.name}Panel`;
        teamPanel.style.backgroundColor = team.color;

        //team name
        const nameContainer = document.createElement("div");
        const nameElem = document.createElement("h2");
        nameElem.textContent = team.name.toUpperCase() + " Team";

        //team score
        const scoreContainer = document.createElement("div");
        scoreContainer.className = "scoreContainer";
        const scoreElem = document.createElement("h1");
        scoreElem.textContent = team.score;

        nameContainer.appendChild(nameElem);
        scoreContainer.appendChild(scoreElem);

        teamPanel.appendChild(nameContainer);
        teamPanel.appendChild(scoreContainer);

        const teamsSection = document.querySelector(".teams-container");
        teamsSection.appendChild(teamPanel);

    });

}

displayTeams();


window.addEventListener("storage", (e) =>{
    updateScoreboard();
});


function updateScoreboard(){

    teams.forEach((team) =>{
        const score = document.getElementById(team.name+"Panel").querySelector("h1");
        const key = team.name+"Score";
        score.textContent = parseInt(localStorage.getItem(key)) || 0;

    });
}


updateScoreboard();








