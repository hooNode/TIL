function solution(record) {
  // 들 들어온 user// 나 나간 user
  // 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record
  // 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return
  var users = {};
  var firstAnswer = record.map((el) => {
    if (el.split(" ")[0] === "Enter") {
      users[el.split(" ")[1]] = el.split(" ")[2];
      return `${el.split(" ")[2]}님이 들어왔습니다. ${el.split(" ")[1]}`;
    } else if (el.split(" ")[0] === "Leave") {
      return `${el.split(" ")[2]}님이 나갔습니다. ${el.split(" ")[1]}`;
    } else if (el.split(" ")[0] === "Change") {
      users[el.split(" ")[1]] = el.split(" ")[2];
      return el;
    }
  });

  var answer = firstAnswer.map((el) => {
    if (el.includes("들")) {
      return `${users[el.split(" ")[2]]}님이 들어왔습니다.`;
    }
    if (el.includes("나")) {
      return `${users[el.split(" ")[2]]}님이 나갔습니다.`;
    }
  });

  // console.log()
  return answer.filter((el) => el !== undefined);
}
