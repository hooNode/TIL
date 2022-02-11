function solution(answers) {
  var answer = [];
  const fir = [1, 2, 3, 4, 5];
  const sec = [2, 1, 2, 3, 2, 4, 2, 5];
  const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var firCnt = 0;
  var secCnt = 0;
  var thrCnt = 0;

  var newArr = [fir, sec, thr];
  var newArrCnt = [firCnt, secCnt, thrCnt];
  // answer[i] === el[i % el.length] && firCnt++

  var cnt = 0;
  for (let i = 0; i < 3; i++) {
    answers.map(
      (answer, index) =>
        answer === newArr[i][index % newArr[i].length] && newArrCnt[cnt]++
    );
    cnt++;
  }
  console.log(newArrCnt);

  return answer;
}
