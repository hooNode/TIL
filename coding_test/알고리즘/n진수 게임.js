3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;

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
