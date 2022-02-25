function solution(id_list, report, k) {
  var answer = [];
  var userObj = {};
  var newObj = {};

  var newArr = [...new Set(report)];
  var reportCnt = 0;

  id_list.forEach((el) => {
    userObj[el] = reportCnt;
    newObj[el] = reportCnt;
  });

  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (id_list[i] === newArr[j].split(" ")[1]) {
        userObj[id_list[i]]++;
      }
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (userObj[newArr[i].split(" ")[1]] >= k) {
      newObj[newArr[i].split(" ")[0]]++;
    }
  }

  return Object.values(newObj);
}

function solution(id_list, report, k) {
  var newArr = [];
  var newObj = {};
  var cnt = 0;

  id_list.forEach((el) => {
    newObj[el] = cnt;
  });

  id_list.forEach((el, index) => {
    newArr.push(report.filter((rep) => el === rep.split(" ")[1]));
    if (index === id_list.length - 1) {
      newArr.forEach((el) => {
        el = [...new Set(el)];
        if (el.length >= k) {
          el.forEach((e) => {
            newObj[e.split(" ")[0]] += 1;
          });
        }
      });
    }
  });

  return Object.values(newObj);
}
