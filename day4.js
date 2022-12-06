const fs = require("fs")
let file = fs.readFileSync("./assets/day-4.txt")
let input = file.toString()
let arrayOfElfs = input.split("\n")

let num = 0;
arrayOfElfs.forEach(x => {
    let firstElf = x.split(",")[0]
    let secondElf = x.split(",")[1]
    firstElf = firstElf.split("-")
    secondElf = secondElf.split("-")
    if(parseInt(firstElf[0]) <= parseInt(secondElf[0]) && parseInt(secondElf[1]) <= parseInt(firstElf[1])) {
        num++
    } else if(parseInt(secondElf[0]) <= parseInt(firstElf[0]) && parseInt(firstElf[1]) <= parseInt(secondElf[1])) {
        num++
    }
})

console.log(num)

// 
// PART TWO
// 
num = 0
arrayOfElfs.forEach(x => {
    let firstElf = x.split(",")[0]
    let secondElf = x.split(",")[1]
    firstElf = firstElf.split("-")
    secondElf = secondElf.split("-")
    let firstElfArray = Array(parseInt(firstElf[1]) - parseInt(firstElf[0]) + 1).fill().map((_, idx) => parseInt(firstElf[0]) + idx)
    let secondElfArray = Array(parseInt(secondElf[1]) - parseInt(secondElf[0]) + 1).fill().map((_, idx) => parseInt(secondElf[0]) + idx)
    let collusions = firstElfArray.filter(y => secondElfArray.includes(y))
    // console.log(collusions)
    if(collusions.length > 0) {
        console.log(collusions)
        num++
    }
})

console.log(num)