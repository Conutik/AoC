const fs = require("fs")
let file = fs.readFileSync("./assets/day-6.txt")
let input = file.toString()
let char = input.split("")
// 
// PART ONE
// 
let t1;
char.forEach((x, index) => {
    if(index <= 0) return;
    if(t1R) return;
        let arrayOfChar = [
            char[index -1],
            char[index],
            char[index + 1],
            char[index + 2]
        ]
        const toFindDuplicates = arry => arry.filter((item, index) => arrayOfChar.indexOf(item) !== index)
        let checkDupe = toFindDuplicates(arrayOfChar)
        if(checkDupe.length <= 0) {
            t1 = true
            console.log(arrayOfChar)
            console.log(index)
            return console.log(index+3)
        };
})

// 
// PART TWO
// 
let t;
char.forEach((x, index) => {
    if(index <= 0) return;
    if(t) return;
        let arrayOfChar = [
            char[index -1],
            char[index],
            char[index + 1],
            char[index + 2],
            char[index + 3],
            char[index + 4],
            char[index + 5],
            char[index + 6],
            char[index + 7],
            char[index + 8],
            char[index + 9],
            char[index + 10],
            char[index + 11],
            char[index + 12]
        ]
        const toFindDuplicates = arry => arry.filter((item, index) => arrayOfChar.indexOf(item) !== index)
        let checkDupe = toFindDuplicates(arrayOfChar)
        if(checkDupe.length <= 0) {
            t = true
            console.log(arrayOfChar)
            console.log(index)
            return console.log(index+13)
        };
})