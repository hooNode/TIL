function makeOdd(num) {
    let str = '';

    for (let i = 1; i < num + 1; i++) {
        if ((i % 2) == 1) {
            str += i
        }
    }
    return str;
}

makeOdd(5) // 135
makeOdd(7) // 1357