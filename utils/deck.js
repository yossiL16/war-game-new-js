export const createCard = (rank, suite) => {
    const values = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7,
         "8":8, "9":9, "10":10, "J":11, "Q":12, "K":13, "A":14}

         return {
            rank : rank,
            suit : suite,
            value : values[rank]
         }
}


export const comparCards = (p1, p2) =>{
    if(p1.value > p2.value) {
        return "p1"
    } 
    else if(p2.value > p1.value) {
        return "p2"
    }
    else {
        return "WAR"
    }
}


export const createDeck = () => {

    const val = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
    const su = ["H", "S", "D", "C"]
    let listCards = []

    for(let i in su) {

        for(let j in val) {
            listCards.push(createCard(val[j], su[i]))
        }
    }
    return listCards
}


export const shuffle = (list) => {
    let x = 0
 while (x < 1000){
    const num1 = Math.floor(Math.random() * (list.length -1));
    const num2 = Math.floor(Math.random() * (list.length -1));
    if ( num1 !== num2){
        let temp = list[num1]
        list[num1] = list[num2];
        list[num2] = temp
        x++
    }
    continue
 }
 return list
}