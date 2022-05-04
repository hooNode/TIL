// ——————소수 찾기——————
if (num === 1) return false;
for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
  if (num % i === 0) return false;
}

// ——————투 포인터 변수 ——————
let n = arr1.length;
let m = arr2.length;
let p1 = (p2 = 0);
while (p1 < n || p2 < m) {
  if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
  else answer.push(arr2[p2++]);
}

// ——————최대, 최소값——————
let max = Number.MIN_SAFE_INTEGER;
let max = Number.MAX_SAFE_INTEGER;

// ——————아나그램——————
for (let x of str1) {
  if (sH.has(x)) sH.set(x, sH.get(x) + 1);
  else sH.set(x, 1);
}

for (let x of str2) {
  if (!sH.has(x) || sH.get(x) == 0) return "NO";
  sH.set(x, sH.get(x) - 1);
}
