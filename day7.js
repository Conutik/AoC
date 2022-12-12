const fs = require("fs")
let file = fs.readFileSync("./assets/day-7.txt")
let input = file.toString()
let char = input.split("\n")
let arr = [];
let value = "";
let storageSpace = 0;
let storageObject = {}
let amountUnder = 0;

char.forEach(x => {
    if(x === "$ ls" || x.includes("dir ")) return;
    if(x.includes("$ cd")) {
        let dirPath = x.split(" ")[2]
        if(dirPath === "/") { arr.push("/"); value = "" }
        else if(dirPath === "..") { 
            let split = value.split("/")
            split.pop()
            value = split.join("/")
            storageSpace = 0
         }
        else { arr.push(value + "/" + dirPath); value = arr[arr.length - 1] }
    } else {
        let space = x.split(" ")[0]
        let ranOutOfVariableNames = storageObject[value] || 0
        storageObject[value] = parseInt(ranOutOfVariableNames) + parseInt(space)
        storageSpace = storageSpace + parseInt(space)
    }
})
// console.log(storageObject)
let storageArray = Object.entries(storageObject)
let object = {}
storageArray.forEach(([path, size], index) => {
    let splitPath = path.split("/")
    let reconstructedPath = "";
    splitPath.forEach(x => {
        reconstructedPath = reconstructedPath + "/" + x
        object[reconstructedPath] = (parseInt(object[reconstructedPath]) || 0) + size
    })
})
let sizes = 0;
Object.entries(object).forEach(([path, size]) => {
    if(size <= 100000) sizes = sizes+size
})

console.log("Part one: " + sizes)

// 
// PART TWO
// 
let neededSpace = 70000000-parseInt(Object.entries(object)[0][1])
neededSpace = 30000000-neededSpace


object = Object.values(Object.fromEntries(Object.entries(object).filter(([path, size]) => size >= neededSpace))).sort((a, b) => a-b)

console.log("Part two: " + object[0])