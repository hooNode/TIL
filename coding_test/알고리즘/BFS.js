// BFS 기초 알고리즘 초기값이 있는 경우
function solution(s, e) {
  let answer = 0;

  let ch = Array.from({ length: 10001 }, () => false);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  ch[s] = true;
  queue.push(s);
  dis[s] = 0;

  while (queue.length > 0) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx >= 0 && nx <= 10001 && !ch[nx]) {
        ch[nx] = true; // 방문 경우
        queue.push(nx);
        dis[nx] = dis[x] + 1; // 부모 노드의 distance
      }
    }
  }
  return asnwer;
}

console.log(solution(8, 3));
