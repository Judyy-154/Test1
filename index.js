// console .log("Hello World");
// alert("Hello World"); 
var a = 10;
var b;
let c = "C";
const d = "D";

function funcA(param1, param2) {
    if(true) {
        var e = "E";
        let bb = "b";
        bb = "dd";
        bb = function() {
            console.log("hello bb");
        };
        bb(); // 调用函数 bb
    }
    return param1 + param2;
}

// 调用函数并传递参数
funcA(1, 2);

// 1+3+5+7+9+...+50
// var sum = 0
// for(var i = 1; i <= 50; i++) {
//     console.log(2 * i-1);
//     sum = (2 * i-1)+sum
// }
// console.log(sum);

//老師算奇數加總的方式
// var sum = 0
// for(var i = 0; i <= 100; i++) {
//     console.log(i % 2 ); 
//     if(i % 2 != 0) {
//         sum = i +sum
//     }
// }
// console.log(sum);


// let sum = 0
// function funcB(num) {
//     return 2 * num;
// }
// for(var i = 0; i <= 10; i++){
//     sum = funcB(i) + sum
// }
// console.log(sum)

function square(num, n) {
    let result = num
    for(let i = 1; i < n; i++) {
        result = result * num
    }
    return result
}
console.log(square(2, 10))