const getChange = (word, next) => {
  let cnt = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== next[i]) cnt++;
  }

  if (cnt === 1) return next;
  return "";
};

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let answer = Number.MAX_SAFE_INTEGER;
  let ch = Array.from({ length: words.length }, () => false);

  let count = 0;

  function DFS(L, word) {
    if (word === target) {
      if (answer > L) answer = L;
    } else {
      for (let i = 0; i < words.length; i++) {
        if (getChange(word, words[i]) !== "" && !ch[i]) {
          ch[L] = true;
          DFS(L + 1, getChange(word, words[i]));
          ch[L] = false;
        }
      }
    }
  }

  DFS(0, begin);

  return answer;
}
