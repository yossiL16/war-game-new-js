import {initGame, playRound} from "./game_logic/game.js"


let players = initGame()

let p1 = players.player1
let p2 = players.player2

while (p1.hand.length > 0) {
    playRound(p1,p2)
    }
const play1 = p1.wonPile.length
const play2 = p2.wonPile.length

if (play1 > play2){
    console.log(`${p1.name} win!!!`);
        
    }
    else if ( play2 > play1) {
        console.log(`${p2.name} win!!!`);
        
    }
    else {
        console.log("Equality");
        
    }

