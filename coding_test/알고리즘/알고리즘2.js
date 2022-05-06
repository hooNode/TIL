// ——————특정 문자열까지 제거——————
while(stack.pop()!=='(');


// ——————pop과 shift의 반환값을 잘 이용하자——————
// ——————특정 수까지의 배열 만들기——————
  let queue=Array.from({length:n}, (v, i)=>i+1); 


// ——————특정 배수 제거——————
while(queue.length > 1) {
	  for(let i = 0; i < k-1; i++) queue.push(queue.shift())
  	queue.shift()  
  }

// ——————오름차순 정렬——————
function solution(arr){
  let answer=arr;
	
  for (let i = 0; i < arr.length-1; i++) {
    console.log(arr)
    let index = i
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[index]) index = j
    }
    
    [arr[i], arr[index]] = [arr[index], arr[i]]
	}
  
  console.log(answer)
  return answer;
}


// ——————두 길이가 겹치는지?——————
!(대상 끝나는 시간 < 기준 시작시간 || 대상 시작시간 > 기준 끝나는 시간)


// ——————이분검색——————
let lt=0, rt=arr.length-1;
while(lt<=rt){
	let mid=parseInt((lt+rt)/2);
	if(arr[mid]===target){
	answer=mid+1;
	break;
}
else if(arr[mid]>target) rt=mid-1;
else lt=mid+1;
}

// ——————이진수 구하기——————
  let answer="";
  function DFS(n){
       if(n===0) return;
       else{
           DFS(parseInt(n/2));
           answer+=String(n%2);
       }
  }
  DFS(n);
  return answer;

// ——————이진트리 순회——————
  function DFS(v){
      if(v>7) return;
      else{
          console.log(v) // 전위
          DFS(v*2);
          console.log(v) // 중위
          DFS(v*2+1);
          console.log(v) // 후위
      }
  }
  DFS(n);

// ——————부분집합 구하기——————
  function DFS(L){
      if(L===n+1){
          let tmp="";
          for(let i=1; i<=n; i++){
              if(ch[i]===1) tmp+=(i+" ");
          }
          if(tmp.length>0) answer.push(tmp.trim());
      }
      else{
          ch[L]=1;
          DFS(L+1);
          ch[L]=0;
          DFS(L+1);
      }
  }
  DFS(1);

// 노드가 세개일 때 DFS
  function solution(n, m){
    let answer=[];
    let tmp=Array.from({length:m}, ()=>0);
    function DFS(L){
        if(L===m){
            answer.push(tmp.slice());
        }
        else{
            for(let i=1; i<=n; i++){
                tmp[L]=i;
                DFS(L+1);
            }
        }   
    }
    
    DFS(0);
    return answer;
}

console.log(solution(3, 2));


// 펙토리얼
function solution(n){
	if(n === 1) return 1;
  else {
    return n * solution(n-1)
  }
}