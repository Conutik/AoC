const fs = require("fs")
let file = fs.readFileSync("./assets/day-1.txt")
let input = file.toString()

// 
// PART ONE
// 
let array = [];
input = input.split("\n").join("-").split("--")
input.forEach(x => {
    x = x.split("-");
    let num = 0;
    x.forEach(y => {
        num = num + parseInt(y)
    })
    array.push(num)
})

let sortedArray = array.sort((a, b) => b-a)
console.log(sortedArray[0])

// 
// PART TWO
// 

console.log(sortedArray[0] + sortedArray[1] + sortedArray[2])