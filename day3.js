const fs = require("fs")
let file = fs.readFileSync("./assets/day-3.txt")
let input = file.toString()
let arrayOfRuck = input.split("\n")

let values = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
}
// 
// PART ONE
// 
let num = 0;

arrayOfRuck.forEach(x => {
    let firstHalf = x.slice(0, x.length/2).split("")
    let secondHalf = x.slice(x.length/2)
    let dupe = firstHalf.filter(y => secondHalf.includes(y))
    num = num + values[dupe[0]]
})

console.log(num)

// 
// PART TWO
// 
let array = []
let newSum = 0;

arrayOfRuck.forEach((x, ind) => {
    if((ind/3) == (ind/3).toFixed()) {
        array.push([x, arrayOfRuck[ind+1], arrayOfRuck[ind+2]])
    }
})

array.forEach(x => {
    let firstFilter = x[0].split("").filter(y => x[1].includes(y))
    let secondFilter = firstFilter.filter(y => x[2].includes(y))
    newSum = newSum + values[secondFilter[0]]
})

console.log(newSum)


