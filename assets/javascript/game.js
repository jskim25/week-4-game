// Week 4 Homework (Crystal Collector Game)

$(document).ready(function () {

    var wins = 0;
    $("#win-counter").text(wins);
    var losses = 0;
    $("#loss-counter").text(losses);

    var targetScore = 0;
    var playerScore = 0;

    var emerald = 0;
    var ruby = 0;
    var diamond = 0;
    var amethyst = 0;

    function setupGame() {
        playerScore = 0;
        $("#player-score").text(playerScore);

        targetScore = Math.floor(Math.random()*120+19);
        $("#target-score").text(targetScore);
        // console.log("target score is:", targetScore);
        
        emerald = Math.floor(Math.random()*12)+1;
        ruby = Math.floor(Math.random()*12)+1;
        diamond = Math.floor(Math.random()*12)+1;
        amethyst = Math.floor(Math.random()*12)+1;
        // console.log("emerald:", emerald, "ruby:", ruby, "diamond:", diamond, "amethyst:", amethyst);
    };

    function assessResult() {
        $("#player-score").text(playerScore);
        if (playerScore === targetScore) {
            wins++;
            $("#win-counter").text(wins);
            alert("Congratulations, you won!");
            setupGame();
        }
        else if (playerScore > targetScore) {
            losses++;
            $("#loss-counter").text(losses);
            alert("Sorry, you lost!");
            setupGame();
        }
    };

    setupGame();

    $("#emerald").on("click", function () {
        playerScore += emerald;
        assessResult();
    });
    $("#ruby").on("click", function () {
        playerScore += ruby;
        assessResult();
    });
    $("#diamond").on("click", function () {
        playerScore += diamond;
        assessResult();
    });
    $("#amethyst").on("click", function () {
        playerScore += amethyst;
        assessResult();
    });

});