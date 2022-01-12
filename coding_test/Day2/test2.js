function evenOdd(num) {
    if ((num % 2 === 0) && (num !== 0)) {
        return console.log("Even")
    } else if (num % 2 === 1) {
        return console.log("Odd")
    } else if (num === 0) {
        return console.log("Zero")
    }
}