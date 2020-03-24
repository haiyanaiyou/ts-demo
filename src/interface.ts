// 对象型接口
interface List {
    readonly id: number, //只读属性
    name: string,
    age?: number, //可选属性
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value)
    })
}

let result = {
    data: [
        { id: 1, name: '123', sex: '123' },
        { id: 2, name: '456', age: 12 },
    ]
}

render(result)

// 可索引属性
interface Names {
    [x: string]: string,
    [y: number]: string
}

// 函数型接口

let addFunc: (x: number, y: number) => number;

interface HandleAdd {
    (x: number, y: number): number
}

type Add = (x: number, y: number) => number

let addHandle: Add = (a, b) => a + b;
console.log(addHandle(1, 4))

// 混合接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}
// let lib: Lib = (()=>{}) as Lib;
// lib.version = '1.1'
// lib.doSomething = ()=>{}

function getLib(version: string) {
    let lib: Lib = (() => { }) as Lib;
    lib.version = version
    lib.doSomething = () => { 
        console.log(lib.version)
    }
    return lib
}

let lib1 = getLib('2.0');
lib1();
lib1.doSomething();

let lib2 = getLib('3.1');
lib2.doSomething();

function add1(x:number, y=0, z:number, m=2){
    return x+y+z+m;
}

console.log(add1(1,undefined,3))

function add2(x:number, ...rest: number[]){
    return x+ rest.reduce((pre,cur)=> pre+cur)
}
console.log(add2(1,2,3,4))

// 函数重载
function add3(...rest: number[]): number;
function add3(...rest: string[]): string;
function add3(...rest: any[]): any{
    let first = rest[0];
    if(typeof first === 'string'){
        return rest.join('');
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,cur)=>pre+cur);
    }

}
console.log(add3('3','5'))
