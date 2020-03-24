// 原始类型
let bool: boolean = true;
let str: string = '123';
let num: number = 1;

// 数组
let arr1: number[] = [1,2,3];
let arr2: Array<number | string> = [3,4,5,'22'];

// 元祖 （限制元素的个数和类型） 可通过push添加新元素 但是不能访问
let tuple : [number,string, boolean] = [0,'1',true];
tuple.push(2);
console.log(tuple)
// console.log(tuple[3])

// 函数
let add = (x:number,y:number):number  => x+y;
// 声明函数类型
let compute: (x:number,y:number) => number;
compute = (a,b) => a + b;

// 对象
let obj: {x:number,y:number} = {
    x:1,
    y:2
}
obj.x = 3;
console.log(obj)

// symbol(具有唯一值)
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2)

// undefined和null
let un:undefined = undefined;
let nu:null = null;
num = null;

// void (没有返回值的类型则是void类型)
let noReturn = () =>{}

// any 未指定类型默认为any类型 可任意赋值
let m;

// never 表示永远不会有返回值的类型
let error = ()=>{
    throw new Error('error')
}
let endless = ()=>{
    while(true){}
}


