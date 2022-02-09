// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
  var first = 0;
  var second = 0;
  for (let i = 1; i <= n; i++) {
    if (m % i === 0 && n % i === 0) first = i;
  }
  for (let i = m; i > 0; i--) {
    if ((n * i) % m === 0) second = n * i;
  }
  return [first, second];
}

function solution(num1, num2) {
  // Greatest Common Divisor
  let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

  // Least Common Multiple
  // num1 * num2 = gcd * lcm
  // lcm = (num1*num2) / gcd
  let getLCM = () => (num1 * num2) / getGCD(num1, num2);
  return [getGCD(num1, num2), getLCM()];
}
