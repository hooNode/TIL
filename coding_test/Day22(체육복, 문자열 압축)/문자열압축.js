function solution(s) {
  if (s.length === 1) return 1;
  var answer = [];

  for (let i = 1; i < s.length; i++) {
    var wordsCnt = 1;
    var setArr = [];
    for (let j = 0; j < s.length; j++) {
      if (s.slice(i * j, i * j + i) === s.slice(i * j + i, i * j + i + i)) {
        wordsCnt++;
        continue;
      } else {
        if (wordsCnt === 1) {
          setArr.push(s.slice(i * j, i * j + i));
        } else {
          setArr.push(wordsCnt + s.slice(i * j, i * j + i));
        }
        wordsCnt = 1;
      }
    }
    answer.push(setArr.join("").length);
  }
  return Math.min(...answer);
}
