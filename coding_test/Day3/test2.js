const a = "A day without laughter is a day wasted."
console.log(a.split(""))
function countLetter(str) {
    let count = 0;
    for (let i = 0; i < str.split("").length; i++) {
        if (str.split("")[i] === "A") {
            count++;
        } else if (str.split("")[i] === "a") {
            count++;
        }

    }
    return count
}


countLetter("I am from Korea")                         // 2
countLetter("A day without laughter is a day wasted.") // 6