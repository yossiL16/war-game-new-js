import { createDeck, shuffle, comparCards } from "../utils/deck.js"

const createPlayer = (name = "AI") => {
    return {
        name: name,
        hand: [],
        wonPile: []
    }
}


export const initGame = () => {
    const p1 = createPlayer("yossi");
    const p2 = createPlayer();

    const listCard = shuffle(createDeck())
    p1.hand = listCard.slice(0, 26);
    p2.hand = listCard.slice(26)

    return {
        player1: p1,
        player2: p2
    }
}


export const playRound = (player1, player2) => {
    let cardPlayr1 = player1.hand.pop()
    let cardPlayr2 = player2.hand.pop()

    const check = comparCards(cardPlayr1, cardPlayr2)
    if (check === "p1") {
        player1.wonPile.push(cardPlayr1, cardPlayr2)
        console.log(`very good ${player1.name}`);
    }

    else if (check === "p2") {
        player2.wonPile.push(cardPlayr1, cardPlayr2)
        console.log(`vary good ${player2.name}`);
    }

    else {
        return
    }
}