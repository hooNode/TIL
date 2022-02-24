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
