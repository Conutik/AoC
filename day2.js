const fs = require("fs")
let file = fs.readFileSync("./assets/day-2.txt")
let input = file.toString()

let values = {
    A: 1,
    B: 2,
    C: 3
}
// A Y
// B X
// C Z
let outcomes = {
    AX: 4,
    AY: 8,
    AZ: 3,
    BX: 1,
    BY: 5,
    BZ: 9,
    CX: 7,
    CY: 2,
    CZ: 6
}
let splitOutcomes = input.split("\n");
let scoreOne = 0;

// 
// PART ONE
// 

splitOutcomes.forEach(result => {
    results = result.split(" ").join("")
    scoreOne = scoreOne + outcomes[results]
})

console.log(scoreOne)

// 
// PART TWO
// 

let winTable = {
    A: "C",
    B: "A",
    C: "B"
}
let loseTable = {
    C: "A",
    A: "B",
    B: "C"
}

let scoreTwo = 0;

splitOutcomes.forEach(result => {
    results = result.split(" ")
    switch(results[1]) {
        case "X":
            num = values[winTable[results[0]]]
            scoreTwo = scoreTwo + num
            break;
        case "Y":
            num = values[results[0]]
            scoreTwo = scoreTwo + (num+3)
            break;
        case "Z":
            num = values[loseTable[results[0]]]
            scoreTwo = scoreTwo + (num+6)
    }
})

console.log(scoreTwo)