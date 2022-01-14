const myShopping = [
    { category: "과일", price: 12000 },
    { category: "의류", price: 10000 },
    { category: "의류", price: 20000 },
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000 },
    { category: "과일", price: 8000 },
    { category: "의류", price: 7000 },
    { category: "장난감", price: 5000 },
    { category: "의류", price: 10000 },
]


const result = (myShopping) => {
    let cnt = 0
    let price = 0
    let grade = ''
    for (let i = 0; i < myShopping.length; i++) {
        if (myShopping[i].category === "의류") {
            cnt++;
            price += Number(myShopping[i].price)
        }
    }

    if (cnt >= 5) {
        grade = "Gold"
    } else if (cnt >= 3) {
        grade = "Silver"
    } else if (cnt > 0) {
        grade = "bronze"
    }
    return console.log(cnt, grade, price)
}

result(myShopping)