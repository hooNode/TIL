const separate = (p) => {
  let left = 0;
  let right = 0;
  let u = "";
  let v = "";
  let pArr = p.split("");
  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] === "(") {
      left++;
    } else if (pArr[i] === ")") {
      right++;
    }
    if (left === right) {
      u = p.slice(0, left * 2);
      v = p.slice(left * 2);
      break;
    }
  }
  return { u: u, v: v };
};
const correct = (p) => {
  // if(p[0] === ')' || p[p.length -1] === '(') return false
  // return true
  let result = 0;
  let pArr = p.split("");
  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] === "(") result++;
    if (pArr[i] === ")") result--;
    if (result < 0) break;
  }
  return result >= 0 ? true : false;
};

const getChanged = (u, v) => {
  let newU = "";
  let result = "";
  newU = u
    .slice(1, u.length - 1)
    .split("")
    .map((el) => {
      if (el === "(") return ")";
      if (el === ")") return "(";
    })
    .join("");
  result = "(" + v + ")" + newU;
  return result;
};

function solution(p) {
  if (p === "") return "";
  let answer = "";
  let result = "";
  var { u, v } = separate(p);

  if (correct(u)) {
    v = solution(v);
    answer += u + v;
    return answer;
  }

  if (!correct(u)) {
    v = solution(v);
    result = getChanged(u, v);
    return result;
  }
}
