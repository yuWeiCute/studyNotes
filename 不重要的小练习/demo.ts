// 数组 ｜ 联合赋值
let: arr2: Array<number | string> = [1, 2, 3, '4’]

// 元组 限定了数组元素的数量和类型
let tuple: [ number, string] = [0, '4’]
// push可以添加新的元素，但是不能越界访问

// 函数
let compute: (x:number, y: number) => number
Compute = (a, b) => a+b;
// 函数参数的名称可以和定义时候不一样

// 对象
let obj: {x:number, y:number} = {x: 1, y: 2}

// symbol
let s1: symbol = …

// undefined null
let un: undefined = undefined;
let un: null = null;
// 不能再被赋值为number等
// 如果需要忽略可以在`tsconfig.json`中更改`strict`配置的参数

// void 是一种操作符 让任何表达式返回undefined 比如void 0
// 因为在ts中undefined不是一个保留字样，可以定义一个名为undefined的变量
let noReturn = () => {}
// void表示没有任何返回值的类型

// any

// never 永远不会有返回值的类型
// 1. 抛出错误
   let error = () => {
       throw new Error(‘error’)
   }
// 2. 死循环
   let endless = () =>{
       While(true){}
   }