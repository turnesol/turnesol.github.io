(function() {
    "use strict"
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const intro = document.getElementById('intro');

    const footLinks = document.getElementById('bottom');

    let gameData = {
        // dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['Piggs', 'Wolf'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // start game
    startGame.addEventListener("click", function() {

        // glenda: the index is already set to 0 in the object initialization above
        gameData.index = 0;
        // changed this so it always starts on the PIGS
        console.log(gameData.index);
        // gameControl.innerHTML = '<h2>The Game Has Started</h2>';

        intro.remove();

        startGame.remove();

        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function() {
            location.reload();
        });

        // console.log("set up the turn!");
        setUpPiggsTurn();

    });

    function setUpPiggsTurn() {
        // game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        // game.innerHTML = `<p>Roll the dice for the Piggs</p>`;

        game.innerHTML = `<div class="theEnd" lid="content"><div id="line"><img id="pigs" src="images/pigs.png" alt="pigs"></img></div><div id="wolfBox"><img id="wolf" src="images/wolf.png" alt="wolf"></img></div></div>`;

        // game.innerHTML = '';
        

        actionArea.innerHTML = '<button id= "roll">Roll the Dice</button>';

        document.getElementById('roll').addEventListener('click', function() {
            // console.log("roll the dice!");
            throwPiggsDice();
        });
    };

    function throwPiggsDice() {
        // this needs to be th function for when player one is rolling
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        // game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        // game.innerHTML += `<div id="dice"><img id="die1" src="${gameData.dice[gameData.roll1-1]}"> <img id="die2" src="${gameData.dice[gameData.roll2-1]}"></div>`;
        // gameData.rollSum = gameData.roll1 + gameData.roll2;

        rollTheDice();

        if (gameData.rollSum === 2) {
            // console.log("snake eyes were rolled");
            // game.innerHTML += '<p>Oh Snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            // This code is meant to switch turns but I need to make it change just to the wolf
            // glenda commented out the line below
            // gameData.index==0 ? (gameData.index = 1) : (gameData.index = 0);

            // glenda added next line:
            gameData.index = 1;

            setTimeout(setUpWolfsTurn, 4000);

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // This code is meant to switch turns but I need to make it change just to the wolf

            // gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            // game.innerHTML += `<P>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]
            // }</p>`;

            // game.innerHTML += `<P>Sorry, one of your rolls was a one, switching to the Wolf</p>`;

            // glenda commented this out
            gameData.index == 0 ? (gameData.index = 1) : (gameData.index = 0);
            // glenda added next line:
            gameData.index = 1;

            setTimeout(setUpWolfsTurn, 4000);
            // console.log("one of the two dice was a 1");

        } 
        // else if(gameData.score[gameData.index] > gameData.gameEnd){
        //     document.getElementById('background').style.backgroundImage= "url('images/pigsWin.jpg')"

        //     document.getElementById('content').remove();

        //     document.getElementById('dice').remove();
        // } 
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function() {
                // setUpPiggsTurn();
                throwPiggsDice();
            });

            document.getElementById('pass').addEventListener('click', function() {
                // This code is meant to switch turns but I need to make it change just to the wolf
                // gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                // glenda added next line:
                gameData.index = 1;
                setUpWolfsTurn();
            });

            showCurrentScore();

            checkWinningCondition();

            // console.log("the game proceeds");
        }
    };

    function setUpWolfsTurn() {
        // game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        // game.innerHTML = `<div><div id="line"><img id="pigs" src="images/pigs.png" alt="pigs"></img></div><div id="wolfBox"><img id="wolf" src="images/wolf.png" alt="wolf"></img></div></div>`;


        // actionArea.innerHTML = '<button id= "roll">Roll the Dice</button>';

        // document.getElementById('roll').addEventListener('click', function() {
        //     // console.log("roll the dice!");
        //     throwPiggsDice();
        // });

        throwWolfsDice();
    };

    function throwWolfsDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        // game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        // game.innerHTML = `<p>It's the Wolf's turn!</p>`;

        game.innerHTML += '<p id="wolfsTurn">Wolfs Turn!</p>';

        // game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
        //                     <img src="${gameData.dice[gameData.roll2-1]}">`;
        // gameData.rollSum = gameData.roll1 + gameData.roll2;
        rollTheDice();



        if (gameData.rollSum === 2) {
            // console.log("snake eyes were rolled");
            // game.innerHTML += '<p>Oh Snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            // gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // glenda commented out
            // gameData.index == 1 ? (gameData.index = 0) : (gameData.index = 1);
            // glenda added next line:
            gameData.index = 0;

            setTimeout(setUpPiggsTurn, 4000);

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // game.innerHTML += `<P>Sorry, one of your rolls was a one, switching to Piggs</p>`;

            // glenda commented out
            // gameData.index == 1 ? (gameData.index = 0) : (gameData.index = 1);

            // glenda added next line:
            gameData.index = 0;
            setTimeout(setUpPiggsTurn, 4000);
            // console.log("one of the two dice was a 1");

        } else if (gameData.score[gameData.index] > gameData.gameEnd){
            document.getElementById('background').style.backgroundImage= "url('images/wolfWins.jpg')"

            document.getElementsByClassName('theEnd').remove();

            checkWinningCondition();

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            console.log("WOlf score", gameData.score[gameData.index])
                // actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            // document.getElementById('rollagain').addEventListener('click', function() {
            //     setUpTurn();
            // });

            // document.getElementById('pass').addEventListener('click', function() {
            //     gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //     setUpTurn();
            // });

            setTimeout(setUpWolfsTurn, 4000);

            showCurrentScore();

            // checkWinningCondition();
            // console.log("the game proceeds");
        }
    };

    function rollTheDice(){
        game.innerHTML += `<div class="theEnd" id="dice"><img id="die1" src="${gameData.dice[gameData.roll1-1]}"> <img id="die2" src="${gameData.dice[gameData.roll2-1]}"></div>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
    };

    function checkWinningCondition() {
        console.log('checking winning condition')
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2 id="ending">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            console.log(`${gameData.players[gameData.index]} wins`)


            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "New Game?";


        } else {
            score.innerHTML = `<ul id="scoreList"><li><strong>${gameData.players[0]} ${gameData.score[0]}</strong></li><li><strong>${gameData.players[1]} ${gameData.score[1]}</strong></li>`;
        }

    };

    function showCurrentScore() {
        score.innerHTML = `<ul id="scoreList"><li><strong>${gameData.players[0]} ${gameData.score[0]}</strong></li><li><strong>${gameData.players[1]} ${gameData.score[1]}</strong></li>`;

        checkWinningCondition();
    };


})();