function solution(board, moves) {
  var answer = 0;
  var basket = [];

  moves.forEach((pick) => {
    var temp1 = basket[basket.length - 1];
    for (let i = 0; i < board.length; i++) {
      if (board[i][pick - 1] > 0) {
        basket.push(board[i][pick - 1]);
        var temp2 = board[i][pick - 1];
        board[i][pick - 1] = 0;
        break;
      }
    }

    if (temp1 === temp2 && basket.length !== 0) {
      basket = basket.slice(0, basket.length - 2);
      answer += 2;
    }
  });

  return answer;
}
