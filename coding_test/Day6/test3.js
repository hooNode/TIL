//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
    let newArr = s.split("")
    if (s.length % 2 === 1) return newArr[Math.floor(s.length / 2)]
    return newArr.slice(Math.floor(s.length / 2) - 1, Math.round(s.length / 2) + 1).join("")
}