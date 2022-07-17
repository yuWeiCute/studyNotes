// 输入[1,2,3,4] 3
// 输出[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ];

function logPath(arr: Array<number>, k?: number): Array<any> {
  const res: Array<Array<number>> = [];
  const path: Array<number> = [];
  function addPath(index: number ) {
    if (path.length == k) {
      res.push(path.slice());
      return;
    }
    for (let i = index; i < arr.length; i++) {
      path.push(arr[i]);
      addPath(i + 1);
      path.pop(); //回溯
    }
  }
  addPath(0);
  return res;
}

let result = logPath([1, 2, 3, 4], 3);
console.log(result);


// 函数：

