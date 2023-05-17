function solution(n, times) {
  let min = 0;
  let max = Math.max(...times) * n;
  let arr = [];

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let count = times.reduce((acc, time) => {
      return acc + Math.floor(mid / time);
    }, 0);

    if (count < n) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return min;
}
