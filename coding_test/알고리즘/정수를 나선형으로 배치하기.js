function solution(n) {
  let answer = Array.from(Array(n), () => Array(n));

  let startNum = 1;

  let topRow = 0;
  let rightCol = n - 1;
  let bottomRow = n - 1;
  let leftCol = 0;

  while (startNum <= n * n) {
    for (let i = leftCol; i <= rightCol; i++) {
      answer[topRow][i] = startNum;
      startNum++;
    }
    ++topRow;

    for (let i = topRow; i <= bottomRow; i++) {
      answer[i][rightCol] = startNum;
      startNum++;
    }
    --rightCol;

    for (let i = rightCol; i >= leftCol; i--) {
      answer[bottomRow][i] = startNum;
      startNum++;
    }
    --bottomRow;

    for (let i = bottomRow; i >= topRow; i--) {
      answer[i][leftCol] = startNum;
      startNum++;
    }
    ++leftCol;
  }

  return answer;
}
