function solution(s) {
  var answer = 0;
  var words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < words.length; i++) {
    while (s.includes(words[i])) {
      s = s.replace(words[i], i);
    }
  }

  return Number(s);
}

function solution(s) {
  var answer = 0;
  var words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  words.forEach((el, i) => {
    s = s.split(el).join(i);
  });

  return Number(s);
}
