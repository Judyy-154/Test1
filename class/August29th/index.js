// 快速註解快捷鍵 ctrl(cmd) + /
// let a = 10
// const b = 20
// let c = a + b

// if (a > 0) {
//     console.log("a > 0")
// } else {
//     console.log("a <= 0")
// }

// function funcA() { }
// function funcB(p1) { console.log(p1) }
// function funcC(p1, p2) { return p1 + p2 }
// console.log(funcB(1))
// console.log(funcC(1, 2))

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// Q1:把 10 和 20 交換
// let a = 10;
// let b = 20;
// let c = 0;
// c = a
// a = b
// b = c
// console .log(a , b);

//Q2:設計一個方法，有兩個參數，把比較大的參數回傳
// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(max(1, 2));

//Q3:設計一個BMI公式
// function BMI(weight, height) {
//   if (height >= 100) {
//     height / 100;
//   }
//   return weight / (height * height);
// }
// console.log(BMI(50, 155));

//Q4:設計一個判斷某年份是否為閏年的方法
// //閏年判斷：必須是4的倍數，但不能是100的倍數，或是400的倍數
// function leapYear(year) {
//     return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
// }
// console.log(leapYear(2100));
// console.log(leapYear(2104));

//Q5:設計一個方法，判斷三個參數是否能組成三角形，
// //三角形特性：任兩邊相加大於第三邊
// function sidelenth(a, b, c) {
//   return (a + b > c && b + c > a && c + a > b)
// }
// console.log(sidelenth(3, 4, 5));
// console.log(sidelenth(3, 10, 6));

//Q6:請print出一個99乘法表
// sum =""
// for (var i = 1; i <= 9; i++) {
//   for (var j = 1; j <= 9; j++) {
//     sum=sum+(i + " * " + j + "=" + i * j)
//   }
//   console.log(sum);
//   sum = ""
// }

//Q7:print下面那個米字塔
//*
//**
//***
//****
//*****
// sum = ""
// for (var i = 1; i <= 5; i++){
//     console.log (sum + "*" )
//     sum = sum + "*"
// }

//Q7:print下面那個菱形
//   *
//  ***
// *****
//  ***
//   *
sum = "*";
for (var i = 1; i <= 3; i++) {
  console.log(sum);
  sum = sum + "**";
}
let stars = 3;
for (var j = stars ; j >= 1; j--) {
  for(var k = 1; k <= j; k++) {
    let star = ""
    console.log(star);
    
  }
}
// for (var i = 1; i <= 3; i++){
//   console.log ( "&nbsp;" + moon )
//   moon = "&nbsp;" + moon
//   }

//原生方法
// console.log("hello word".split("[//]"));
// ["1", true, 3];
// {
//   a: "a is good";
// }

// //string
// (" I, Jac, 36 years old, from Shanghai");

// var datas = [
//   { id: "1", name: "jac", birth: "1999-12-03", gender: "male" },
//   { id: "2", name: "may", birth: "1968-11-15", gender: "female" },
// ];

//陣列資料提取和使用
// var students = JSON.parse(
//   '[{"id":"1","name" : "jac", "birth": "1999-12-03", "gender": "male"},{ "id": "2", "name" : "may", "birth" : "1968-11-15", "gender": "female" }]'
// );
// console.log(students);
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
//   const keys = Object.keys(students[i])
//   for (let j = 0; j < keys.length; j++) {
//     console.log(keys[j] + ":" + students[i][keys[j]]);
//   };
//   console.log(2024 - + students[i].birth.substring(0, 4));
// }

students.forEach(function(){})