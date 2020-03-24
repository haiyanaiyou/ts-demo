interface Human {
    name: string;
    eat(): void
}

class Asian implements Human {
    constructor(name: string){
        this.name = name
    }
    name: string
    eat(){
        console.log('eat')
    }
    sleep(){
        console.log('sleep')
    }
}

// 接口不能约束类的构造函数 只能约束类的公共成员
// 一个接口可以继承多个接口
interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child{}

let boy: Boy = {
    name: '123',
    eat(){
        console.log('eat')
    },
    run(){
        console.log('run')
    },
    cry(){
        console.log('cry')
    }
}
console.log(boy)

class Auto {
    state=1
    private state2 = 2
}
interface AutoInterface extends Auto {}

// class C implements AutoInterface {
//     state = 1
// }
// let newC = new C()
// console.log(newC)

class Bus extends Auto implements AutoInterface {}

let bus = new Bus();
console.log(bus)