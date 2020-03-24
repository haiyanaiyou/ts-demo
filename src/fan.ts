// 泛型： 不预先确定的数据类型，具体的类型在使用的时候才能确定
/* 
好处： 1、函数和类可以轻松的支持多种类型，增强程序的扩展性；
       2、不必写多条函数重载，增强代码的可读性
       3、灵活控制类型之间的约束
*/
function log<T>(value: T):T {
    console.log(value)
    return value
}
log<string[]>(['a','b'])
log(['c'])

// interface Log {
//     <T>(value: T): T 
// }
// let myLog: Log = log;
// myLog('12')

// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log;
// myLog(2)

// 默认参数格式
interface Log<T=string> {
    (value: T): T
}
let myLog: Log = log;
myLog('2')

// 泛型约束类的成员 不能约束静态成员
class Con<T> {
    run(value: T){
        console.log(value)
        return value
    }
}
let con1 = new Con<number> ();
con1.run(1)
let con2 = new Con(); //未指定任何类型，可传入任何类型的参数
con2.run({name: '222'})

// 类型约束
interface Length {
    length: number
}

function validateType<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value

}
validateType([2])
validateType('abd')
validateType({length: 2})
