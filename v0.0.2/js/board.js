const teams = [
    {name : "Red", color: "#ef5e5e", score : 0},
    {name : "Blue", color: "#3a82df", score : 0},
    {name : "Green", color: "#6bf26b", score : 0},
    {name : "Yellow", color: "#ffff62", score : 0},
]


const scoreValues = [1000, 500];


function buildTeam(team, color, score){
    const teamPanel = document.createElement("div");
    teamPanel.className = "team-panel";


    const nameContainer = document.createElement("div");
    const scoreContainer = document.createElement("div");
    const controlsContainer = document.createElement("div");

    const nameElem = document.createElement("h2");
    nameElem.textContent = team.name + " Team";
    const scoreElem = document.createElement("h1");
    scoreElem.textContent = score;

    [nameContainer,scoreContainer,controlsContainer].forEach((elem) =>{
        teamPanel.appendChild(elem);
    });

    const teamSection = document.querySelector("teams-container");
    
    teamsSection.appendChild(teamPanel);   
}

function buildTeamControls(){
        //buttons
    const add = document.createElement("button");
    add.textContent = "+ " + scoreValues[0];
    const sub = document.createElement("button");
    sub.textContent = "- " + scoreValues[1];
    const reset = document.createElement("button");
    reset.textContent = "reset";


    nameContainer.appendChild(nameElem);
    scoreContainer.appendChild(scoreElem);

    [add,sub,reset].forEach((elem) => {
        controlsContainer.appendChild(elem);
    });
}

