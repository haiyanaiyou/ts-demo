// 高级类型

// 交叉类型与联合类型

interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}

// let pet: DogInterface & CatInterface = {
//     run(){},
//     jump(){}
// } //pet为交叉类型 使用&拼接 取所有类型的并集
// console.log(pet)

// 联合类型：声明的类型并不确定，可以为多个类型中的一个
let a: string | number = 2

// 对象的联合类型

class DogFunc implements DogInterface {
    run(){}
    eat(){}
}
class CatFunc implements CatInterface {
    jump() {}
    eat(){}
}

enum Master {Boy, Girl}
function getPet(master: Master) {
    let pet = master === Master.Boy ? new DogFunc() : new CatFunc();
    return pet
}
getPet(Master.Boy)

// 可选择联合类型
interface Square {
    kind: 'square'
    size: number
}

interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}

type Shape = Square | Rectangle 
function area(shape: Shape){
    switch(shape.kind) {
        case 'square':
            return shape.size * shape.size
        case 'rectangle':
            return shape.width * shape.height
    }

}
console.log(area({kind: 'square',size: 12}))

// 索引类型

let objDetail = {
    a: 1,
    b: 2,
    c: 3
}

function getValues(obj:any, keys: string[]) {
    return keys.map(key=> obj[key])

}
console.log(getValues(objDetail, ['a','c']))