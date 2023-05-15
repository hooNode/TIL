function solution(n, times) {
  var answer = 0;
  let count = 1;
  const timeHash = {};
  times
    .sort((a, b) => a - b)
    .forEach((time) => {
      timeHash[time] = 1;
    });

  while (count < n) {
    for (let time in timeHash) {
      console.log(timeHash[time] * time);
      if (answer <= timeHash[time] * time) {
        answer = timeHash[time] * time;
        timeHash[time]++;
        count++;
      } else if (answer === timeHash[time] * time) {
        timeHash[time]++;
        count++;
      }
    }
  }

  return answer;
}
