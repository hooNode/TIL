function solution(rows, columns, queries) {
  var answer = [];

  let table = Array.from(Array(rows), (_, i) =>
    Array.from(Array(columns).fill(i * columns), (x, j) => (x = x + j + 1))
  );

  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query;
    let topRow = table[x1 - 1].slice(y1 - 1, y2 - 1);
    let rightCol = Array(x2 - x1)
      .fill()
      .map((_, i) => table[x1 + i - 1][y2 - 1]);
    let bottomRow = table[x2 - 1].slice(y1, y2);
    let leftCol = Array(x2 - x1)
      .fill()
      .map((_, i) => table[x1 + i][y1 - 1]);

    answer.push(Math.min(...topRow, ...rightCol, ...bottomRow, ...leftCol));

    topRow.forEach((el, i) => (table[x1 - 1][y1 + i] = el));
    rightCol.forEach((el, i) => (table[x1 + i][y2 - 1] = el));
    bottomRow.forEach((el, i) => (table[x2 - 1][y1 + i - 1] = el));
    leftCol.forEach((el, i) => (table[x1 + i - 1][y1 - 1] = el));
  });
  return answer;
}
