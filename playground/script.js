let nTeams = 5;
let teams = ["blue","red","green","purple","orange","yellow"]

function buildTeams(){

    for(let i = 0; i < nTeams; i+= 2){
        const teamContainer = document.createElement("div");
        teamContainer.style.display = "flex"
        teamContainer.style.flexDirection = "row";


        for(let j = 0; j < 2; j++){
            const team = document.createElement("div");
            const name = document.createElement("h2");
            const score = document.createElement("div");
            const buttonContainer = document.createElement("div");
            
            buttonContainer.className = "scoreControls";
            buttonContainer.style.display = "flex";
            buttonContainer.style.flexDirection = "row";
            buttonContainer.style.justifyContent = "center";

            
        
            const add = document.createElement("button");
            add.textContent = "+1000";
            const sub = document.createElement("button");
            sub.textContent = "-1000";




    

            team.className = "team";
            team.style.backgroundColor = teams[i+j];

            name.textContent = teams[i+j].toUpperCase() + " TEAM";
            score.textContent = 0;

            buttonContainer.appendChild(add);
            buttonContainer.appendChild(sub);

            team.appendChild(name);
            team.appendChild(score);
            team.appendChild(buttonContainer);

            teamContainer.appendChild(team);
        }



        document.body.appendChild(teamContainer);
    }
}



buildTeams();

