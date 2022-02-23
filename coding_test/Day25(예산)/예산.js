function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] < 0) {
      break;
    } else if (budget - d[i] === 0) {
      answer++;
      break;
    } else {
      budget -= d[i];
      answer++;
    }
  }
  return answer;
}
