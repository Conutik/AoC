const fs = require("fs")
let file = fs.readFileSync("./assets/day-5.txt")
let input = file.toString()
let inputArray = input.split("\n")

// console.log(inputArray)
let boxOrder = inputArray.splice(0, 10)
let boxes = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
}
console.log(boxOrder)

boxOrder.splice(-2)
boxOrder.forEach(x => {
    x = x.match(/.{1,4}/g)
    x.forEach((y, ind) => {
        boxes[ind + 1].push(y)
    })
})

for(let x in boxes) {
    boxes[x] = boxes[x].reverse()
}
console.log(boxes[1])
inputArray.forEach((x, ind) => {
    let ar = x.split(" ")
    let instructions = {
        amount: parseInt(ar[1]),
        from: parseInt(ar[3]),
        to: parseInt(ar[5])
    }
    let amountSpliced = boxes[instructions.from].splice(-instructions.amount).reverse()
    amountSpliced.forEach(z => {
        // console.log(boxes[instructions.to])
        boxes[instructions.to].push(z)
        // console.log(boxes[instructions.to])
        // console.log('---')
    })
})

// console.log(boxes[8])
for(let x in boxes) {
    console.log(boxes[x].reverse()[0])
}