// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
function solution(x) {
  var answer = true;
  let getNum = 0;
  let getStr = x + "";

  for (let i = 0; i < getStr.length; i++) {
    getNum += Number(getStr[i]);
  }
  console.log(getNum);

  if (x % getNum == 0) {
    console.log(answer);
  } else if (x % getNum != 0) {
    answer = false;
    console.log(answer);
  }
  return answer;
}

function solution(x) {
  const newArr = String(x).split("");
  return x % newArr.reduce((acc, cur) => acc + Number(cur), 0) === 0
    ? true
    : false;
}
