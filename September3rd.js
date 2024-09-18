// 練習1 "hello world"找出o的所有索引值
// function findWordIndex(targetWord) {
//   let result = [];
//   "hello world".split("").forEach(function (word, index) {
//     if (word == targetWord) {
//       result.push(index);
//       // result = result.concat(index)
//     }
//   });
//   return result;
// }
// console.log(findWordIndex("o"));


// 練習2 "gave a nice day" 把所有文字第一個字變成大寫
  //   "have a nice day"
  //     .split(" ")
  //     .map(function (word) {
  //       return word[0].toUpperCase() + word.substring(1);
  //     })
  //     .join(" ")
  // let needUpper = true;
  // console.log(
  //   "have a nice day"
  //     .split("")
  //     .map(function (word) {
  //       if (needUpper) {
  //         needUpper = false;
  //         return word.toUpperCase();
  //       }
  //       if (word == " ") {
  //         needUpper = true;
  //       }
  //       return word;
  //     })
  //     .join("")
  // );

  //練習3 把奇數保留
  console.log(
    Array(10)
      .fill("")
      .map((x, i) => i)
      .filter(function (x) {
        if (x % 2 != 0) {
          return true;
        }
        return false;
      })
  );
// 簡短版： .filter(x => x % 2 != 0);

// 練習把0-9陣列打亂


//練習4 把年紀低於30的保留、
  const datas = [
    {
      id: 1,
      first_name: "佳穎",
      last_name: "陳",
      phone: "0987654321",
      birthday: "1985-03-15",
      gender: "女",
    },
    {
      id: 2,
      first_name: "宇軒",
      last_name: "林",
      phone: "0912345678",
      birthday: "1992-07-22",
      gender: "男",
    },
    {
      id: 3,
      first_name: "雅婷",
      last_name: "黃",
      phone: "0923456789",
      birthday: "1988-11-30",
      gender: "女",
    },
    {
      id: 4,
      first_name: "冠宇",
      last_name: "張",
      phone: "0934567890",
      birthday: "1995-01-05",
      gender: "男",
    },
    {
      id: 5,
      first_name: "芳瑜",
      last_name: "李",
      phone: "0945678901",
      birthday: "1982-09-18",
      gender: "女",
    },
    {
      id: 6,
      first_name: "柏翰",
      last_name: "王",
      phone: "0956789012",
      birthday: "1998-06-27",
      gender: "男",
    },
    {
      id: 7,
      first_name: "怡君",
      last_name: "吳",
      phone: "0967890123",
      birthday: "1990-04-11",
      gender: "女",
    },
    {
      id: 8,
      first_name: "志偉",
      last_name: "劉",
      phone: "0978901234",
      birthday: "1987-12-03",
      gender: "男",
    },
    {
      id: 9,
      first_name: "淑芬",
      last_name: "蔡",
      phone: "0989012345",
      birthday: "1993-08-20",
      gender: "女",
    },
    {
      id: 10,
      first_name: "俊傑",
      last_name: "楊",
      phone: "0990123456",
      birthday: "1997-02-14",
      gender: "男",
    },
  ];

//把年紀低於30的保留
// console.log(datas.filter(person => {
//   let birthdayyear = person.birthday.substring(0, 4);
//   let age = 2024 - birthdayyear;
//   if (age < 30) {
//     return true
//   }
//   return false
// }))

//getter fill-name 的方法
// const newStudents = datas.map((x) => {
//   return {
//     id: x.id,
//     first_name: x.first_name,
//     last_name: x.last_name,
//     phone: x.phone,
//     birthday: x.birthday,
//     gender: x.gender,
//     get Fullname() {
//       return   x.last_name + x.first_name;
//     },
//   };
// });
// console.log (newStudents.map(x => x.Fullname))

// let i = 0;
// let timer = setInterval(() => {
//   console.log("interval" + i++);
//   if (i > 4) {
//     clearInterval(timer);
//   }
// }, 1000);
// setTimeout(() => {
//   console.log("time out");
// }, 6000);