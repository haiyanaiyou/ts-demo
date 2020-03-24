// 类型检查机制（ts编辑器在做类型检查时，所秉承的一些原则以及表现出的一些行为） 作用：辅助开发，提高开发效率
/* 
    类型推断：
        不需要指定变量的类型（函数的返回值类型）， ts可以根据某些规则自动的为其推断出一个类型
        基础类型推断
        最佳通用类型推断
        上下文类型推断
    类型兼容性
    类型保护
*/

// let a = 1;
// a= '2' //报错 a已经是number类型

// 类型断言
interface Foo{
    bar: number
}
let fn = {} as Foo
fn.bar = 1

// 类型兼容性
// 接口兼容性 ： 成员少的兼容成员多的
interface X {
    a: any
    b: any
}
interface Y {
    a: any
    b: any
    c: any
}
let x:X = {
    a: 1,
    b: 2
}
let y:Y = {
    a: 1,
    b: 2,
    c: 3
}
x=y;
console.log(x)
// y=x x可以赋值给y 但y不可以赋值给x

// 函数兼容性 成员多的兼容成员少的
type Handler = (a:number, b:number) => void;
function hof(handler: Handler) {
    return handler
    
}
// 1.参数个数  固定参数可以兼容可选参数和剩余参数；可选参数不能兼容固定参数和剩余参数；剩余参数可兼容固定参数和可选参数
let handler1 = (a:number) =>{}
hof(handler1)
let handler2 = (a:number, b:number, c:number)=>{}
// hof(handler2)

// 2、参数类型 
// 3、返回值类型

// 枚举之间相互不兼容
// 类兼容性 两个实例之间相互兼容 如果含有私有属性 则不兼容

// 泛型兼容性  无成员的时候兼容

// interface Empty<T> {
//     value: T
// }
// let empty1: Empty<number> = {}
// let empty2: Empty<string> = {}
// empty1 = empty2


/* 
    类型保护： ts能够在特定的区块中保证变量属于某种确定的类型
*/
enum Type { Strong, Week }

class Java {
    java: any
    helloJava(){
        console.log('hello java')
    }
}
class JavaScript {
    helloJavaScript() {
        console.log('hello javascript')
    }
    javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined

}

// function getLanguage (type: Type, x: number | string){
function getLanguage (type: Type){
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    // 第一种类型保护方法 instanceof
    // if(lang instanceof JavaScript){
    //     lang.helloJavaScript()
    // }else{
    //     lang.helloJava()
    // }
    console.log(lang)

    // 第二种方法 in 判断属性是否在此对象中
    // if('java' in lang){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }

    // 第三种方法 typeof
    // if(typeof x === 'string'){
    //    console.log( x.length)
    // }else{
    //     console.log(x.toFixed(2))
    // }

    // 第四种方法 创造类型保护函数
    if(isJava(lang)){
        lang.helloJava()
    }else{
        lang.helloJavaScript()
    }

    return lang

}
// getLanguage(Type.Strong, '3')
getLanguage(Type.Strong)
 