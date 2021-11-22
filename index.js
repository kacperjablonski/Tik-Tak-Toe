const prompt = require('prompt-sync')();
let Player1 = [];
let Player2 = [];
let Board = [];
let x = 0;
let set=0;
let actualPlayer = 'Player1';
let current=Player1;
console.log('1     | 2       | 3       \n' +
    '      |         |         \n' +
    '      |         |         \n' +
    '--------------------------\n' +
    '4     | 5       | 6       \n' +
    '      |         |         \n' +
    '      |         |         \n' +
    '--------------------------\n' +
    '7     | 8       | 9       \n' +
    '      |         |         \n' +
    '      |         |         \n'
);

function changePlayer(actual) {
    if (actual == 'Player1') {
        current=Player2
        return 'Player2';
    } else {
        current=Player1;
        return 'Player1';
    }
}

function checkWin(Player) {
    let winmove = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    let result;
    for (let i = 0; i < winmove.length; i++) {
        result = winmove[i].every(r => Player.includes(r));
        if (result == true) {
            return true;
        }
    }
    return result;
}

function chose(pkt, params) {
    params.push(pkt);
}

function checkBoard(Board, chose) {
    if (Board.includes(chose)) {
        console.log('Wybierz ponownie');
        return take();
    } else return chose;
    
}

function take() {
    let pole = prompt('Wybierz Pole ' +actualPlayer + ": ");
    pole=checkBoard(Board, Number(pole));
    return pole;
}

function Game() {
    x=take();
    Board.push(x);
    chose(x, current);
    if (checkWin(current)) {
        return console.log('Wim ' + actualPlayer)
    }
    actualPlayer = changePlayer(actualPlayer);
    if (set<10)
    {
        set++;
        Game();
    }
    else{
        return console.log("REMIS NOOBY") 
    }
}
Game();