function solution(n, lost, reserve) {
  var newLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);
  var newReserve = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => a - b);
  console.log(newLost, newReserve);
  var lostCnt = newLost.length;
  var reserveCnt = newReserve.length;

  for (let i = 0; i < newLost.length; i++) {
    if (newReserve.length === 0) break;
    for (let j = 0; j < newReserve.length; j++) {
      if (Math.abs(newLost[i] - newReserve[j]) === 1) {
        newReserve.splice(newReserve.indexOf(newReserve[j]), 1);
        lostCnt -= 1;
        continue;
        console.log(newReserve);
      }
    }
  }
  return lostCnt <= 0 ? n : n - lostCnt;
}
