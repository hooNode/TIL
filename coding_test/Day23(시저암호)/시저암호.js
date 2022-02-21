const getNewChar = (char, n) => {
  if (char.charCodeAt() === 32) return char.charCodeAt();
  if (char.charCodeAt() + n > 90 && char.charCodeAt() <= 90) {
    return char.charCodeAt() + n - 26;
  }
  if (char.charCodeAt() + n > 122 && char.charCodeAt() <= 122) {
    return char.charCodeAt() + n - 26;
  }
  return char.charCodeAt() + n;
};

function solution(s, n) {
  return s
    .split("")
    .map((el) => getNewChar(el, n))
    .map((char) => String.fromCharCode(char))
    .join("");
}
