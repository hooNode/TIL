// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.


// 테스트 1 〉	통과 (0.07ms, 30.2MB)
// 테스트 2 〉	통과 (0.09ms, 30.2MB)
// 테스트 3 〉	통과 (0.08ms, 30MB)
// 테스트 4 〉	통과 (0.07ms, 30.3MB)
// 테스트 5 〉	통과 (0.08ms, 30.4MB)
// 테스트 6 〉	통과 (0.06ms, 30.3MB)
// 테스트 7 〉	통과 (0.07ms, 30.4MB)
// 테스트 8 〉	통과 (0.09ms, 30MB)
// 테스트 9 〉	통과 (0.06ms, 30.1MB)
// 테스트 10 〉	통과 (0.09ms, 30.3MB)
// 테스트 11 〉	통과 (0.07ms, 30.1MB)
// 테스트 12 〉	통과 (0.07ms, 30.3MB)
// 테스트 13 〉	통과 (0.10ms, 30.3MB)

function solution(phone_number) {
    let arr = phone_number.split('')
    let newArr = arr.map((i, index) => {
        if (index < arr.length - 4) {
            return "*"
        } else {
            return i
        }
    })
    return newArr.join("");
}



// 테스트 1 〉	통과 (0.09ms, 30.3MB)
// 테스트 2 〉	통과 (0.09ms, 30.3MB)
// 테스트 3 〉	통과 (0.06ms, 30.3MB)
// 테스트 4 〉	통과 (0.06ms, 30.2MB)
// 테스트 5 〉	통과 (0.06ms, 30.2MB)
// 테스트 6 〉	통과 (0.12ms, 30.2MB)
// 테스트 7 〉	통과 (0.06ms, 30.4MB)
// 테스트 8 〉	통과 (0.06ms, 30.2MB)
// 테스트 9 〉	통과 (0.05ms, 30.2MB)
// 테스트 10 〉	통과 (0.06ms, 30MB)
// 테스트 11 〉	통과 (0.08ms, 30MB)
// 테스트 12 〉	통과 (0.06ms, 30.1MB)
// 테스트 13 〉	통과 (0.07ms, 30.2MB)
function solution(phone_number) {
    return (
        phone_number.split("").map((i, index) => {
            if (index < phone_number.length - 4) {
                return "*"
            } else {
                return i
            }
        }).join("")
    )

}


// 테스트 1 〉	통과(0.08ms, 30.1MB)
// 테스트 2 〉	통과(0.05ms, 30.4MB)
// 테스트 3 〉	통과(0.05ms, 30.4MB)
// 테스트 4 〉	통과(0.07ms, 30.2MB)
// 테스트 5 〉	통과(0.08ms, 29.9MB)
// 테스트 6 〉	통과(0.13ms, 30.3MB)
// 테스트 7 〉	통과(0.05ms, 30.5MB)
// 테스트 8 〉	통과(0.08ms, 30MB)
// 테스트 9 〉	통과(0.05ms, 30.2MB)
// 테스트 10 〉	통과(0.15ms, 30.3MB)
// 테스트 11 〉	통과(0.05ms, 30.4MB)
// 테스트 12 〉	통과(0.06ms, 30.2MB)
// 테스트 13 〉	통과(0.08ms, 30.2MB)
function solution(phone_number) {
    let arr = phone_number.split('')
    let cnt = 0
    for (let i = 0; i < phone_number.length - 4; i++) {
        arr.shift()
        cnt++
    }
    for (let i = 0; i < cnt; i++) {
        arr.unshift("*")
    }

    return arr.join("");
}


// 테스트 1 〉	통과 (0.03ms, 30.4MB)
// 테스트 2 〉	통과 (0.10ms, 30.2MB)
// 테스트 3 〉	통과 (0.03ms, 30.2MB)
// 테스트 4 〉	통과 (0.05ms, 30.3MB)
// 테스트 5 〉	통과 (0.03ms, 30.1MB)
// 테스트 6 〉	통과 (0.03ms, 30.2MB)
// 테스트 7 〉	통과 (0.04ms, 30.4MB)
// 테스트 8 〉	통과 (0.05ms, 30.4MB)
// 테스트 9 〉	통과 (0.11ms, 30.4MB)
// 테스트 10 〉	통과 (0.03ms, 30.3MB)
// 테스트 11 〉	통과 (0.11ms, 30.3MB)
// 테스트 12 〉	통과 (0.03ms, 30.2MB)
// 테스트 13 〉	통과 (0.03ms, 30.5MB)
function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
}

