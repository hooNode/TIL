function solution(n, t, m, p) {
  var answer = "";
  let baseString = "";
  const NtoAlpha = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
    16: "G",
  };

  function baseNToString(startCount) {
    if (startCount < n) {
      if (baseString.length / m === t) return;
      baseString += NtoAlpha[startCount] ? NtoAlpha[startCount] : startCount;
      if (baseString.length % m === p % m)
        answer += NtoAlpha[startCount] ? NtoAlpha[startCount] : startCount;
    } else {
      baseNToString(Math.floor(startCount / n));
      baseNToString(startCount % n);
    }
  }

  let startCount = 0;
  while (baseString.length / m < t) {
    baseNToString(startCount);
    startCount++;
  }

  return answer;
}
