let Player_1 = [];
let Player_2 = [];
let currentPlayer = firstRandom(0, 2);
let first = currentPlayer;
let PlayerX = 0;
let Player0 = 0;
let winner = false;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function firstRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

if(currentPlayer == 0) {
    document.getElementById("showPlayer").innerHTML = "PUT X";
} else {
    document.getElementById("showPlayer").innerHTML = "PUT 0";
}

function showBoard(button) {
    if(winner == false) {
        ++currentPlayer;
        if (currentPlayer % 2 != 0) {
            Player_1.push(parseInt(button.value));
            button.innerHTML = "X";
            document.getElementById("showPlayer").innerHTML = "PUT 0";

        } else if (currentPlayer % 2 == 0) {
            Player_2.push(parseInt(button.value));
            button.innerHTML = "O";
            document.getElementById("showPlayer").innerHTML = "PUT X";

        }
        for (let i = 0; i < winningCombinations.length; ++i) {
            if (winningCombinations[i].every(value => Player_1.includes(value))) {
                winner = true;
                ++PlayerX;
                document.getElementById("text").innerText =
                    "PlayerX won";
            }
        }
        for (let i = 0; i < winningCombinations.length; ++i) {
            if (winningCombinations[i].every(value => Player_2.includes(value))) {
                winner = true;
                ++Player0;
                document.getElementById("text").innerText =
                    "Player0 won";
            }
        }
        if (first == 0 && currentPlayer == 9 && !winner) {
            document.getElementById("text").innerText =
                "Is equal, try a new game";
                 winner = true;
        }if (first == 1 && currentPlayer == 10 && !winner) {
            document.getElementById("text").innerText =
                "Is equal, try a new game";
                 winner = true;
        }

    }
 }

function resetGame () {
    document.getElementById("scoreX").innerText = PlayerX;
    document.getElementById("score0").innerText = Player0;
    currentPlayer = firstRandom(0, 2);
    first = currentPlayer;
    Player_1.length = 0;
    Player_2.length = 0;
    for (let i = 0; i < 9; ++i) {
        document.getElementById("myButton" + i).innerHTML = '';
    }
    document.getElementById("text").innerHTML = '';
    winner = false;
}