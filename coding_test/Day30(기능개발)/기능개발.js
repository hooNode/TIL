function solution(progresses, speeds) {
  var answer = [];
  var day = 0;
  var deploy = 0;

  var newArr = progresses.map((el) => 100 - el);

  while (speeds.some((el, index) => el * day < newArr[index])) {
    day++;
    for (let i = 0; i < newArr.length; i++) {
      console.log(newArr[i], speeds[i] * day);
      if (newArr[i] <= speeds[i] * day) {
        deploy++;
      } else break;
    }

    if (deploy > 0) {
      answer.push(deploy);
      for (let i = 0; i < deploy; i++) {
        newArr.shift();
        speeds.shift();
      }
      deploy = 0;
    }
  }
  return answer;
}
