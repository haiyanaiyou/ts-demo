class Dog {
    constructor(name:string){
        this.name = name;
    }
    public name: string
    run() {}
    private sre: string //不可在子类以及实例中调用
    protected  pro() {} //受保护成员 只可在类以及子类中访问  不能在类的实例中访问
    readonly count:number = 4 //必须有初始值
    static food: string = 'bons' //只能通过类调用
}
console.log(Dog.prototype)
let dog = new Dog('xiaohuang');
console.log(dog)


class Husky extends Dog {
    constructor(name: string, public color: string){
        super(name);
        this.color = color;
    }
    // color: string
}
let hus = new Husky('xioahei', 'red');
console.log(hus)

// 抽象类 不能实例化 只能继承使用
// 多态： 在父类声明这个方法，在多个子类使用
abstract class Animal {
    eat(){
        console.log('eat')
    }
    abstract sleep(): void //在子类定义
}

class Cat extends Animal {
    constructor(name: string){
        super()
        this.name = name;
    }
    name: string
    sleep(){
        console.log('cat sleep')
    }
}

let cat = new Cat('mimi');
// cat.eat()

class Pig extends Animal{
    sleep(){
       console.log('pig sleep') 
    }
}
let pig = new Pig();
let animal: Animal[] = [cat,pig];

animal.forEach(item=>{
    item.sleep()
})

// this
class WorkFlow {
    step1(){
        return this
    }
    step2(){
        return this
    }
}

console.log(new WorkFlow().step1().step2())

// this的多态 可调用子类 也可调用父类
class NewWork extends WorkFlow {
    next(){
        return this
    }
}

new NewWork().next().step2().next().step1()

