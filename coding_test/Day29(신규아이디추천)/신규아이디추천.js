function solution(new_id) {
  var preAnswer = "";
  var answer = "";

  preAnswer = new_id.toLowerCase();

  answer = preAnswer
    .replace(/[^\w-_.]/g, "")
    .replace(/[.]{2,}/g, ".")
    .replace(/^[.]/, "")
    .replace(/[.]$/, "");

  if (answer === "") {
    answer = "a";
  } else if (answer.length >= 16) {
    answer = answer.slice(0, 15).replace(/[.]$/, "");
  }

  while (answer.length < 3) {
    answer += answer[answer.length - 1].repeat(1);
  }

  return answer;
}
