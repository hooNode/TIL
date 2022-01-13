function bigNum(str) {
    let biggest = 0;
    for (let i = 0; i < str[str.length - 1]; i++) {
        if (Number(str[i]) > biggest) {
            biggest = Number(str[i])
        }
    }
    return biggest
}

bigNum("12345") // 5
bigNum("87135") // 8