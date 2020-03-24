// 枚举类型

// 数字枚举 可以反向映射
enum Role {
    a = 1,
    b,
    c
}

console.log(Role.a)

// 字符串枚举
enum Message {
    Success = 'success',
    Fail = 'fail'
}
console.log(Message)

// 枚举成员性质
/* 
    1.枚举成员值定义之后不可更改；

*/