// const datas = [
//     {
//       id: 1,
//       first_name: "佳穎",
//       last_name: "陳",
//       phone: "0987654321",
//       birthday: "1985-03-15",
//       gender: "女",
//     },
//     {
//       id: 2,
//       first_name: "宇軒",
//       last_name: "林",
//       phone: "0912345678",
//       birthday: "1992-07-22",
//       gender: "男",
//     },
//     {
//       id: 3,
//       first_name: "雅婷",
//       last_name: "黃",
//       phone: "0923456789",
//       birthday: "1988-11-30",
//       gender: "女",
//     },
//     {
//       id: 4,
//       first_name: "冠宇",
//       last_name: "張",
//       phone: "0934567890",
//       birthday: "1995-01-05",
//       gender: "男",
//     },
//     {
//       id: 5,
//       first_name: "芳瑜",
//       last_name: "李",
//       phone: "0945678901",
//       birthday: "1982-09-18",
//       gender: "女",
//     },
//     {
//       id: 6,
//       first_name: "柏翰",
//       last_name: "王",
//       phone: "0956789012",
//       birthday: "1998-06-27",
//       gender: "男",
//     },
//     {
//       id: 7,
//       first_name: "怡君",
//       last_name: "吳",
//       phone: "0967890123",
//       birthday: "1990-04-11",
//       gender: "女",
//     },
//     {
//       id: 8,
//       first_name: "志偉",
//       last_name: "劉",
//       phone: "0978901234",
//       birthday: "1987-12-03",
//       gender: "男",
//     },
//     {
//       id: 9,
//       first_name: "淑芬",
//       last_name: "蔡",
//       phone: "0989012345",
//       birthday: "1993-08-20",
//       gender: "女",
//     },
//     {
//       id: 10,
//       first_name: "俊傑",
//       last_name: "楊",
//       phone: "0990123456",
//       birthday: "1997-02-14",
//       gender: "男",
//     },
//   ];

// 把班上學生按照年齡分組
// const categorizedByAge = users.reduce((accumulator, user) => {
//   let ageCategory = "";
//   if (user.age >= 20 && user.age < 30) {
//     ageCategory = "20-29";
//   } else if (user.age >= 30 && user.age < 40) {
//     ageCategory = "30-39";
//   } else if (user.age >= 40 && user.age < 50) {
//     ageCategory = "40-49";
//   }

//   // 初始化对应分类的数组
//   if (!accumulator[ageCategory]) {
//     accumulator[ageCategory] = [];
//   }

//   // 将用户放入对应的年龄段数组
//   accumulator[ageCategory].push(user);

//   return accumulator;
// }, {});

// console.log(categorizedByAge);

  // 返回累加器
//   return accumulator;
// }, {});
// console.log(categorizedByGender);

// "hello world" 倒過來排列
// console.log( 
//   "hello world".split("").reverse().join("")
// );

fetch("https://data.ntpc.gov.tw/api/datasets/308dcd75-6434-45bc-a95f-584da4fed251/json", {})
  .then((res) => res.json())
  .then((res) => console.log(res))

