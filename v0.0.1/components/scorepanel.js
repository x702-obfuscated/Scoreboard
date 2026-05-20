let nTeams = 2;
let pointValue = 1000;
const teams = ["blue","red","green","purple","orange","yellow"];


function buildPanel(name, color, rootElement){
    const team = document.createElement("div");
    const teamName = document.createElement("h2");
    const score = document.createElement("div");
    const buttonContainer = document.createElement("div");

    buttonContainer.className = "panelControls";
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "row";
    buttonContainer.style.justifyContent = "center";

    const add = document.createElement("button");
    add.className = "addButton";
    add.textContent = "+" + pointValue;

    const sub = document.createElement("button");
    sub.className = "subtractButton";
    sub.textContent = "-" + pointValue;


    const reset = document.createElement("button");
    reset.className = "resetScoreButton";
    reset.textContent = "RESET";


    team.className = "teamPanel";
    team.style.backgroundColor = color;
    teamName.textContent = name.toUpperCase();
    score.textContent = 0;


    buttonContainer.appendChild(add);
    buttonContainer.appendChild(sub);


    team.appendChild(teamName);
    team.appendChild(score);
    team.appendChild(buttonContainer);
    team.appendChild(reset);


    rootElement.appendChild(team);
}

function buildScoreBoard(){



}