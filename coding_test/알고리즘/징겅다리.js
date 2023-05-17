function solution(distance, rocks, n) {
  let answer = 0;
  rocks = [0, ...rocks.sort((a, b) => a - b), distance];

  const BinarySearch = () => {
    let start = 0;
    let end = rocks[rocks.length - 1];

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let count = 0,
        now = 0;
      for (let i = 1; i < rocks.length; i++) {
        if (rocks[i] - now < mid) {
          count++;
        } else {
          now = rocks[i];
        }
      }

      if (count > n) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    answer = end;
  };

  BinarySearch();
  return answer;
}

// 되는 애들 중 작은 값을 찾아 -> count === n && max - 1
// 되는 애들 중 큰 값을 찾아 -> count === n && min + 1
// 그 후 min or max 중에 정답 확인
