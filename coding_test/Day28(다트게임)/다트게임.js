function solution(dartResult) {
  var newArr = dartResult.match(/[0-9]+[SDT][*#]?/g);
  var setNewArr = newArr.map((el) => {
    if (el.includes("10")) {
      if (el.includes("S")) {
        return Math.pow(10, 1);
      } else if (el.includes("D")) {
        return Math.pow(10, 2);
      } else if (el.includes("T")) {
        return Math.pow(10, 3);
      }
    } else {
      if (el.includes("S")) {
        return Math.pow(el[0], 1);
      } else if (el.includes("D")) {
        return Math.pow(el[0], 2);
      } else if (el.includes("T")) {
        return Math.pow(el[0], 3);
      }
    }
  });

  newArr.forEach((el, index) => {
    if (el.includes("#")) {
      setNewArr[index] *= -1;
    } else if (el.includes("*")) {
      if (index === 0) {
        setNewArr[index] *= 2;
      } else {
        setNewArr[index] = setNewArr[index] * 2;
        setNewArr[index - 1] *= 2;
      }
    }
  });

  return setNewArr.reduce((acc, cur) => acc + cur);
}
