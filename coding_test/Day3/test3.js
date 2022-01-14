function makeNumber(num) {
    let str = '';

    for (let i = 1; i < num + 1; i++) {
        str += i;
    }
    return str.split("").join("-");

}

makeNumber(5) // 1-2-3-4-5
makeNumber(7) // 1-2-3-4-5-6-7