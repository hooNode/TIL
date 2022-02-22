function solution(N, stages) {
  var newArr = [];
  for (let i = 1; i <= N; i++) {
    newArr.push(stages.filter((el) => el === i));
  }

  var newCnt = stages.length;
  var resArr = [];

  for (let i = 0; i < newArr.length; i++) {
    resArr.push([i + 1, newArr[i].length / newCnt]);
    newCnt -= newArr[i].length;
  }

  resArr.sort((a, b) => b[1] - a[1]);

  return resArr.map((el) => Number(el[0]));
}
