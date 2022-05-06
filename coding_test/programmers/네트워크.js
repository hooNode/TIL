// 각각의 컴퓨터에 대해 방문하지 않았으면 네트워크 +1 (독립된 네트워크)

function solution(n, computers) {
  var answer = 0;
  var visited = Array.from({ length: n }, () => false);

  function getNetworks(v) {
    visited[v] = true;
    for (let i = 0; i < n; i++) {
      if (computers[v][i] === 1 && !visited[i]) {
        getNetworks(i);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      getNetworks(i);
      answer++;
    }
  }

  return answer;
}
