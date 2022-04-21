function solution(lines) {
  let times = lines.map((line) => {
    let h = Number(line.split(" ")[1].split(":")[0]) * 3600;
    let m = Number(line.split(" ")[1].split(":")[1]) * 60;
    let s = Number(line.split(" ")[1].split(":")[2]);
    let processTime =
      Number(line.split(" ")[2].slice(0, line.split(" ")[2].length - 1)) -
      0.001;
    let startTime = h + m + s - processTime;
    return {
      startTime: startTime * 1000,
      endTime: (h + m + s) * 1000,
    };
  });

  let result = 0;
  for (let j = 0; j < times.length; j++) {
    let temp = 0;
    for (let i = 0; i < times.length; i++) {
      if (
        !(
          times[j].endTime + 999 < times[i].startTime ||
          times[j].endTime > times[i].endTime
        )
      ) {
        temp++;
      }
    }
    if (temp > result) result = temp;
  }
  return result;
}
