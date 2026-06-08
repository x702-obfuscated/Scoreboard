const scoreValues = [1000,500,100];

function displayControls(){
    const teams = document.querySelectorAll(".teamPanel");

    teams.forEach((team) =>{
        team.querySelector("h1").style.fontSize = "clamp(0.5rem, 2.5vw, 36pt)";
        const addContainer = document.createElement("div");
        addContainer.className = "addContainer";

        const subContainer = document.createElement("div");
        subContainer.className = "subContainer";

        scoreValues.forEach((score)=>{
            const plus = document.createElement("button");
            plus.textContent = "+ " + score;
            plus.className = "plus";


            plus.addEventListener("click", () => {
                const teamName = team.id.replace("Panel", "");
                const key = teamName + "Score";

                const currentScore =
                    parseInt(localStorage.getItem(key)) || 0;

                localStorage.setItem(key, currentScore + score);

                updateScoreboard();
            });

            const minus = document.createElement("button");
            minus.textContent = "- " + score;
            minus.className = "minus";

            minus.addEventListener("click", () => {
                const teamName = team.id.replace("Panel", "");
                const key = teamName + "Score";

                const currentScore =
                    parseInt(localStorage.getItem(key)) || 0;

                localStorage.setItem(key, currentScore - score);

                updateScoreboard();
            });

            addContainer.appendChild(plus);
            subContainer.appendChild(minus);
        });

        const resetContainer = document.createElement("div");
        resetContainer.className = "resetContainer";

        const resetButton = document.createElement("button");
        resetButton.className = "reset";
        resetButton.textContent = "RESET";

        resetButton.addEventListener("click", () => {
            const teamName = team.id.replace("Panel", "");
            const key = teamName + "Score";

            localStorage.setItem(key, 0);
            updateScoreboard();
        });

        resetContainer.appendChild(resetButton);

        team.appendChild(addContainer);
        team.appendChild(subContainer);
        team.appendChild(resetContainer);
    });

}

displayControls();


