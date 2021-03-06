// 부분집합의 합이 같은 경우

function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (L === n + 1) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// 여행경로

function solution(tickets) {
  tickets.sort(); // 글자순 정렬
  let vis = Array(tickets.length).fill(false);
  var answer = [];
  function dfs(cur, cnt, path) {
    if (cnt === tickets.length && answer.length === 0) {
      //정렬했으므로 처음오는 경우의 수가 답
      answer = path;
      return;
    }
    for (let i = 0; i < tickets.length; i += 1) {
      if (vis[i]) continue;
      if (tickets[i][0] === cur) {
        // 출발하는 공항이 같다.
        vis[i] = true;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]); //배열 복사해서 넣어주기
        vis[i] = false;
      }
    }
  }
  dfs("ICN", 0, ["ICN"]);
  return answer;
}
