// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return s.match(/\D/g) == null ? true : false
    } else return false
}