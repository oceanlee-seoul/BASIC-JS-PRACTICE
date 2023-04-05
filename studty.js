/*********************************************************
 * nodejs로 실행방법 터미널을 열고
 * 현재 위치가 현파일이 있는 디렉토리인지 확인
 * node 파일명 을 입력하면 코드가 실행되고
 * console.log()의 내용들이 터미널에 나옴
 **********************************************************/
/*
    변수 선언 방법
    왜 var를 안쓰는가?
    아래의 이상한점을 찾아서 생각해보세용
    hint : 호이스팅
*/
//========================================================
// a = 2;
// b = 3;
// var a;
// const b;

// console.log(a);
//========================================================

/*
    연산자 응용 사용법
*/
//========================================================
// console.log(1 === '1');

// const num = undefined || 3;
//========================================================

/*
    배열 반복문 예제
*/
//========================================================
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// const array2 = array.map(a => a);

// console.log(array2);

// array.forEach((ab, i) => {
//     console.log(ab, i);
// });

//map, filter, find, reduce, every, some

// const number = [2, 4, 6].map(v => 2 * v);
// console.log(number);

// const filters = [2, 4, 7, 10].filter(v => v % 2 === 0);
// console.log(filters);

// const finds = [2, 4, 7, 10].find(v => v % 2 === 0);
// console.log(finds);

// const reduces = [1, 2, 3, 4, 5].reduce((acc, cur) => {
//     acc += cur;
//     return acc;
// }, 0);

// console.log(reduces);

// const everys = [1, 2, 3, 4, 5].every(v => v % 2 === 0);
// console.log(everys);

// const somes = [1, 2, 3, 4, 5].some(v => v % 2 === 0);
// console.log(somes);
//========================================================

/*
    함수 선언 방법 두가지
    arrow function
*/
//========================================================

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;

// console.log(add(1, 3));
//========================================================

/*
    객체 구조분해 할당
*/
//========================================================
// const obj = {
//     a: 1,
//     b: 3
// };

// const { a ,b } = obj;

// const result = a + 1;

// console.log(result);
//========================================================
/*
    parseInt가 어떻게 작용하는지 isNaN이 어떻게 작용하는지 알아보자
*/
//========================================================
// console.log(parseInt('지승한'));
// console.log(parseInt('3'));
// console.log(parseInt(6));

// console.log(isNaN(3));
// console.log(isNaN(NaN));
//========================================================

/*********************************************************
 * 문제들이 다소 난해할지도 대충 정리했는데 원본이 어땠을지 궁금하다면
 * 저~~~~ 아래로 내려가 어떠했는지 구경해보기...☆
 * 시작시 답을 엔터를 난사하여 눈에 안보이게 한뒤
 * 깊게 생각하며 하나씩 해본다
 * ★★★ 반드시 본인의 해결법이 나온뒤 답을 볼 것 ★★★
 * ★ 만약 답이 두개라면 더 못한게 지승한이 한 것 ★
 **********************************************************/

/* 문제 */
// student의 schedule이, '화'나 '목'일때만 console.log 찍게하는거
// const student = {
//     name : '지승한',
//     schedule : '목'
// }
//========================================================

// const days = ['화', '목'];

// if (days.includes(seletedDay)) {
//     alert("뺴애애애애애애애애액")
// }
//========================================================

/*
    간단하게 숫자 총합 구하기
    아래 나온 답 말고도 생각해보기
*/
// const num = [1, 3, 51, 58, 12, 18, 3];

// let result = 0;
// for (let i = 0; i < num.length; i++) {
//   result += num[i];
// }
// console.log(result);
//For문은 웬만하면 쓰지 말자.

// const numReduce = num.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log(numReduce);

// result = 0;
// const numForEach = num.forEach((a) => result += a);
// console.log(result);

//========================================================

// let sum = 0;

// num.forEach((sutja)=> {
//  sum += sutja;
// });

// const sum = [1, 2, 3, 4, 5].reduce((acc, val) => {
//     acc = acc + val;
//     return acc;
// }, 0)

// console.log(sum);

/*
    숫자 총합 구하기
*/
// const num = [1, 3, "a", 58, 12, 18, 3];
// //========================================================
// let result = 0;
// const numFilter = num.filter((v) => {
//   return typeof v === "number";
// });
// result = numFilter.reduce((acc, cur) => {
//   return (acc += cur);
// }, 0);
// console.log(result);

// let dick = [];

// array.forEach(sex => {
//     const value = parseInt(sex);
//     if (!isNaN(value)){
//      dick.push(value)
//     }

// });
// console.log(dick);

// const array2 = array
//     .map(v => parseInt(v))
//     .filter(v => !isNaN(v));
//========================================================

/*
    주말만 골라보기
*/
// const week = ["일", "월", "화", "수", "목", "금", "토"];
// //========================================================
// const weekend = ["월", "화", "수", "금"];
// const selectedDays = week.filter((day) => {
//   return weekend.includes(day);
// });
// console.log(selectedDays);

// selectedDays.push(week[week.indexOf(one)]);
// selectedDays.push(week[week.indexOf(two)]);

// let result = [];
// week.forEach(day => {
//     if (['토', '일'].includes(day)) {
//         result.push(day);
//     }
// });
// const weekend = week.filter(day => ['토', '일'].includes(day));

// console.log(weekend);
//========================================================
/*
    20살 이상만 뽑아서 넣어
    ex) [{ name: '지승한', age: 33 },{ name: '신영석', age: 22 }]
*/
// const obj = [
//   {
//     name: "고윤태",
//     age: 17,
//   },
//   {
//     name: "지승한",
//     age: 33,
//   },
//   {
//     name: "황대명",
//     age: 15,
//   },
//   {
//     name: "신영석",
//     age: 22,
//   },
// ];

// const result = obj.filter((student) => {
//   return student.age >= 20;
// });
// console.log(result);

//========================================================

// const result = obj.reduce((result, value) => {
//     value.age >= 20 && result.push(value);
//     return result;
// }, []);
//========================================================

/*
    step 1 : params를 for문을 돌려서 key=value 형태로 만든다
    step 2 : join

    예시 : 'name=고윤태&age=22'
*/
// const params = {
//   name: "고윤태",
//   age: 22,
// };
// const joiner = function (params) {
//   const arrayString = [];
//   arrayString.push("name=" + params.name);
//   arrayString.push("age=" + params.age);
//   return arrayString.join("&");
// };
// console.log(joiner(params));

// Object.entries(params).forEach((v) => {
//   result.push(v.join("="));
// });
// const result = Object.entries(params)
//   .map((v) => {
//     return v.join("=");
//   })
//   .join("&");

// console.log(result);

// [["name", 고윤태], ["age", 22]];

//========================================================

// let sex = [];

// Object.keys(params).forEach(key => {
//     sex.push(key + '=' + params[key]);
// });

// const s = sex.join('&')

// const string = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
//========================================================
/*
    아래 string을 객체로 만들어라~
    ex){ '고윤태' : 173, '지승한' : 185, ... }
*/
// const string = "고윤태:173,지승한:185,황대명:179,이대양:163,김";

// const result = string.split(",").reduce((acc, cur) => {
//   const [key, value] = cur.split(":");
//   if (value) {
//     acc[key] = value;
//   }
//   return acc;
// }, {});

// console.log(result);
//========================================================

// const obj = string.split(",").reduce((acc, cur) => {
//     const [key, value] = cur.split(':');

//     if (!!key && !!value) {
//         acc[key] = value;
//     }

//     return acc;
// }, {});

// console.log(obj);
//========================================================

/*
    아래 이름중 김씨만 걸러서 배열의 형태로 나타내시오
*/
// const array = ["김윤태", "지승한", "김대명", "김동현", "임채건"];

// const arrayFilter = array.filter((name) => {
//   const [firstName, ...names] = name.split("");
//   return firstName === "김";
// });

// console.log(arrayFilter);

//========================================================

// const names = array.filter(name => {
//     const [surName] = name.split('');

//     if (surName === '김') {
//         return name;
//     }
// });
//========================================================

// const point = [
//   "고윤태:213123A",
//   "지승한:B213",
//   "신영석:A21321",
//   "황대명:A",
//   "임채건:F",
//   "정대휘:D",
// ];
// 정확히 A인 사람만 뽑아서 알려줘라

// let result = [];

// point.forEach((v) => {
//   const tempArray = v.split(":");
//   if (tempArray[1] === "A") {
//     result.push(tempArray.join(":"));
//   }
// });
// console.log(result);

// result = point.filter((v) => {
//   const [name, other] = v.split(":");
//   return other === "A";
// });
// console.log(result);

//배열 메서드는 상황에 맞게 쓰는 것이 좋다.
//forEach() => 반환값이 필요 없는 것, Just 실행을 하기 위함.
//map() => 입출력 배열의 길이가 같을 때
//filter() => 입출력 배열의 길이가 짧아질 때
//reduce() => 입출력 형변환이 이루어질 때

// const results = point.filter((text) => {
//     const [name, grage] = text.split(":");

//     if (grage === 'A') {

//         return name;
//     }

//     // if (text.split(":")[1] === 'A') {
//     //     const name = text.split(":")[0];
//     //     return name;
//     // }
// });
// console.log(results);
//========================================================

/*
    아래 정보로 평균값 40이상인 사람만 구해내기
    ex) [ { name: '고윤태', avg: 53 }, { name: '지승한', avg: 40 } ]
*/
// const grade = [
//   { name: "고윤태", kor: 80, eng: 30, math: 50 },
//   { name: "지승한", kor: 30, eng: 80, math: 10 },
//   { name: "황대명", kor: 60, eng: 10, math: 30 },
//   { name: "이대양", kor: 10, eng: 20, math: 10 },
//   { name: "이민호", kor: 20, eng: 10, math: 5 },
// ];

//========================================================

//승한쓰 답
// const result = grade.map(v => {
//     const avg = (v.kor + v.eng + v["math"]) / 3;
//     return { name : v.name, avg };
// }).filter(v => v.avg>=40);

// const result = [];

// grade
//   .filter((student) => {
//     const tempArray = Object.values(student);
//     [student, ...score] = tempArray;
//     const avgScore = Math.round(
//       score.reduce((acc, cur) => {
//         return acc + cur;
//       }, 0) / 3
//     );
//     return avgScore >= 40;
//   })
//   .map((student) => {
//     const tempArray = Object.values(student);
//     [student, ...score] = tempArray;
//     const avgScore = Math.round(
//       score.reduce((acc, cur) => {
//         return acc + cur;
//       }, 0) / 3
//     );
//     result.push({ name: student, avg: avgScore });
//   });

// console.log(result);

// const avg = grade.reduce((acc, cur) => {
//     const { kor, eng, math, name } = cur,
//         averyge = (Math.round((kor + eng + math) / 3)),
//         params = { 'name': name, 'avg': averyge };
//     if (averyge >= 40) {
//         acc.push(params);
//     }
//     return acc;
// }, []);

// console.log(avg);

//========================================================

/*
    각각 카운트해서 객체로 만들기
    ex) { a: 2, b: 3, c: 1 }
*/
// const array = ["a", "b", "c", "a", "b", "b"];

// const setArray = array.reduce((acc, cur) => {
//   acc[cur] = 0;
//   return acc;
// }, {});

// array.forEach((v) => {
//   if (v === "a") {
//     setArray.a += 1;
//   } else if (v === "b") {
//     setArray.b += 1;
//   } else if (v === "c") {
//     setArray.c += 1;
//   }
// });

// console.log(setArray);

//========================================================
// const counts = array.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     if (!!acc[cur]) {
//       acc[cur]++;
//     } else {
//         acc[cur] = 1;
//     }
//     return acc;
// }, {});

// console.log(counts);
//========================================================

/*
    아래 정보들로 students의 exits값이 true 이면서 강남에 사는 친구만 걸러내기
    ex) [
            { name: '김윤태', address: '서울특별시 강남구', class: 'A' },
            { name: '지윤태', address: '서울특별시 강남구', class: 'B' }
        ]
*/

// const students = [
//     { name: '고윤태', class: 'A', exits: true },
//     { name: '김윤태', class: 'A', exits: true },
//     { name: '최윤태', class: 'B' },
//     { name: '박윤태', class: 'A', exits: true },
//     { name: '이윤태', class: 'B' },
//     { name: '지윤태', class: 'B', exits: true },
//     { name: '황윤태', class: 'B' },
//     { name: '우윤태', class: 'a', exits: true },
//     { name: '신윤태', class: 'a' },
//     { name: '정윤태', class: 'b' }
// ];

// const information = [
//     { name: '고윤태', address: '서울특별시 동대문구' },
//     { name: '김윤태', address: '서울특별시 강남구' },
//     { name: '최윤태', address: '서울특별시 강남구' },
//     { name: '박윤태', address: '서울특별시 중랑구' },
//     { name: '이윤태', address: '서울특별시 마포구' },
//     { name: '지윤태', address: '서울특별시 강남구' },
//     { name: '황윤태', address: '서울특별시 강동구' },
//     { name: '우윤태', address: '서울특별시 강서구' },
//     { name: '신윤태', address: '서울특별시 영등포구' },
//     { name: '정윤태', address: '서울특별시 중구' }
// ];
//========================================================

// const rich_students = students.filter(student => {
//     if (student.exits) {
//         return student;
//     }
// })
//     .map(student => {
//         const { name } = student;

//         const [info] = information.filter(info => {
//             if (name == info.name) {
//                 return info;
//             }
//         });

//         if (info.address === '서울특별시 강남구' && !!student) {
//             return student;
//         }
//     })
//     .filter(r => !!r);

// console.log(rich_students);
//---------------------------------
// const richStudents = students
//     .filter(student => !!student.exits)
//     .filter(student => {
//         const { name } = student;
//         const { address } = information.find(info => name == info.name);

//         if (address === '서울특별시 강남구' && !!student) {
//             return student;
//         }
//     })
//     .reduce((acc, student) => {
//         const { name } = student, { address } = information.find(info => name == info.name);

//         (address === '서울특별시 강남구') && acc.push({ name: name, address: address, class: student.class });
//         return acc;
//     }, []);

// console.log(richStudents);
//========================================================
/*
    아까 그값으로 exits이 값이 없고 class A || a인 사람만 뽑아오기
*/
//========================================================
// const results = students.filter(student => {
//     if (!(!!student.exits)) {
//         return student;
//     }
// }).filter(student => {
//     if (student.class.toUpperCase() === 'A') {
//         return student;
//     }
// });

// const results = students
//     .filter(student => !student.exits)
//     .filter(student => student.class.toUpperCase() === 'A');

// console.log(results);
//========================================================

/*
    category => [HC,WA]  joinDate  2020년도에 가입한 사람 이름만.
    ex) [ '신영석' ]
*/

// const person = [
//     { name: '고윤태', category: ['HC', 'WA'], joinDate: 20190614 },
//     { name: '지승한', category: ['MC', 'MO'], joinDate: 20201001 },
//     { name: '황대명', category: ['MC', 'WA'], joinDate: 20200705 },
//     { name: '임채건', category: ['HC'], joinDate: 20200321 },
//     { name: '정대휘', category: ['MO'], joinDate: 20200128 },
//     { name: '신영석', category: ['HC', 'WA'], joinDate: 20200414 },
// ];
//========================================================

// const BS = person
//     .filter(ps => ps.joinDate >= 20200101 && ps.category.includes('HC') && ps.category.includes('WA'))
//     .map(({ name }) => name);
// console.log(BS);

// const bs = person.filter(ps => ps.joinDate >= 20200101)
//     .filter(({ category }) => category.includes('HC') && category.includes('WA'))
//     .map(({ name }) => name);
// console.log(bs);
//========================================================

// console.log(student);

// const person = [
//     { name: '고윤태', discount: 1, busket: 1 },
//     { name: '지승한', discount: 2, busket: 3 },
//     { name: '황대명', discount: 7, busket: 2 },
//     { name: '임채건', discount: 3, busket: 1 },
//     { name: '정대휘', discount: 2, busket: 3 },
//     { name: '신영석', discount: 5, busket: 5 },
// ];

//name : name busket X discount x total busket * 10000 ,
//  price => total - discountAmount , discountAmount : discountAmount  1
//  1500원 할인 해주는데 5개 부터 ~~ 5개랑 같은 금액 할인

// const bills = person.map(p => {
//     const { name, discount, busket } = p,
//         total = (busket * 10000),
//         discountAmount = Math.min(5, discount) * 1500,
//         priece = total - discountAmount;

//     return { name: name, total: total, discountAmount: discountAmount, priece: priece }
// });

// console.log(bills);

// const add = (x, y) => x + y;
// console.log(add(3, 6));

// const a = [1, 2, 3, 4, 5, 6, 7];
// console.log(a.filter(v => v % 2 === 0));

// ['초코파이','귤','스테이크']
// function compare(a, b) {
//     const ageA = a.age;
//     const ageB = b.age;

//     let comparison = 0;
//     if (ageA > ageB) {
//         comparison = 1;
//     } else if (ageA < ageB) {
//         comparison = -1;
//     }
//     return comparison;
// }

//const arr = [1,5,3,2,4];

//arr.sort((a,b)=> a);

//console.log(arr);

//const participants = [{ name: 'Anna', age: 19 },
//    { name: 'Josh', age: 17 },
//    { name: 'Mary', age: 15 },
//    { name: 'Emily', age: 14 },
//    { name: 'Caroline', age: 24 },
//    { name: 'Sam', age: 16 }
//];

//participants.sort((a, b) => a.age - b.age);
//console.log(participants);

// const array = ['지승한', '황대명', '고윤태', '신영석'];

//신영석, 지승한,고윤태,황대명

//저 순서 어떤 식으로 key value 형태로 object를 만들고
//그 obj로 value 순으로 sort
//[name,order] 이 형태에서 [1]뽑아서 sort

/*const a = [1, 2];
console.log(a[1]);*/

// const nom = {
//     '신영석': 1,
//     '지승한': 2,
//     '고윤태': 3,
//     '황대명': 4
// };
// const array = [1, 2, 3, 4].reduce((acc, cur) => {

//     return acc;
// }, nom);

// const array2 = array
//     .map(name => [name, nom[name]])
//     .sort((a, b) => a[1] - b[1])
//     .map(([name]) => name);

// console.log(array2);

// const orderMenu = {
//     '중식>짜장면': 3,
//     '중식>탕수육': 1,
//     '중식>짬뽕': 8,
//     '양식>파스타': 3,
//     '양식>리조또': 5,
//     '양식>피자': 2,
//     '한식>비빔밥': 3,
//     '한식>된장찌개': 13,
//     '한식>김치찌개': 10,
// };

// const getMenuCount = category => {
//     const sum = Object.keys(orderMenu).reduce((acc, cur) => {
//         if (cur.split('>')[0].includes(category)) {
//             acc += orderMenu[cur];
//         }
//         return acc;
//     }, 0);

//     return sum;

//     // let sum = 0;
//     // Object.keys(orderMenu).forEach(key => {
//     //     if (key.split('>')[0].includes(category)) {
//     //         sum += orderMenu[key];
//     //     }
//     // });

//     // return sum;
// };

// console.log(getMenuCount('중식'));

// const type = document.querySelector('#empty') && document.querySelector('#empty').getAttribute('type');

// console.log(type);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const sum = Object.values(obj).reduce((acc, val) => {
//     acc += val;
//     return acc;
// }, 0);

// console.log(sum);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const obj2 = ['a', 'b'].reduce((obj, key) => {
//     !!obj[key] && delete obj[key];
//     return obj;
// }, obj);

// console.log(obj2);

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// document.querySelector('#empty').getAttribute('type');

// const getUser = () => {
//     const users = [
//         { id: 11, name: '고윤태', age: 23, group: 'editor' },
//         { id: 47, name: '지승한', age: 28, group: 'admin' },
//         { id: 85, name: '황대명', age: 34, group: 'editor' },
//         { id: 97, name: '신영석', age: 28, group: 'admin' }
//     ];

//     return users;
// };

// const salaryTable = (id) => {
//     const users = [
//         { id: 11, name: '고윤태', salary: 2200 },
//         { id: 47, name: '지승한', salary: 2600 },
//         { id: 85, name: '황대명', salary: 3000 },
//         { id: 97, name: '신영석', salary: 2400 }
//     ];
//     const findUser = users.find(user => (user.id === id));
//     return findUser;
// };

// //object key 삭제하는 법 delete (key) 이름
// const leaceTabel = (id) => {
//     const users = [
//         { id: 11, name: '고윤태', state: true },
//         { id: 47, state: true },
//         { id: 85, state: false },
//         { id: 97, name: '신영석', state: true }
//     ];
//     const findUser = users.find(user => (user.id === id));
//     return findUser;
// };

// //getUser 전체 인원 수 새끼들을 다 불러와 => 이게 기준이야 항상
// //gerUser 수 만큼 for문을 돌려
// //salaryTable, leaceTabel for문을 돌 떄마다 필요한 거 하나 씩 뺴와
// //마지막에 합쳐서 하나에 떄려 넣기
// //keyword?

// // const obj ={ a : 1};
// // obj['a']  obj.a

// // const obj = { a: 1, b: 2 },
// //     obj2 = { a: 3, d: 4 };

// // const obj3 = { ...obj, ...obj2 };

// // console.log(obj3);

// const answer = () => {
//     const dick = getUser().reduce((acc, user) => {
//         const sex = { ...user, ...salaryTable(user.id), ...leaceTabel(user.id) };
//         acc.push(sex);
//         return acc;
//     }, []);
//     console.log(dick);
// };

// answer();

// const array = [1, 2, 3, 4, 1, 2, 4];

// // const a = [...new Set(array)];

// // console.log(a);

// // const array2 = array.filter((v, index) => array.includes(v));

// console.log(array2);

// console.log([...1]);
//이미 배열에 있다? return 안하면 됨
// const array2 = array.reduce((acc, a) => {
//     if (!acc.includes(a)) {
//         acc.push(a);
//     }

//     return acc;
// }, []);

// console.log(array2);

// const evenOdd = [1, 2, 3, 4, 5, 6, 7, 8].reduce((evenOdd, number) => {
//     (number % 2) ? evenOdd.Odd.push(number): evenOdd.Even.push(number);
//     // evenOdd[(number % 2) ? 'Odd' : 'Even'].push(number);
//     return evenOdd;
// }, { Odd: [], Even: [] });

// console.log(evenOdd);

// const obj = {};

// obj.a = '지승한';

// obj['고윤태'] = '황대명';

// console.log(obj);

// { odd : [1,3,5,7] , even : [2,4,6,8]}

//possibleDate 20201210이상인사람만인데 화요일이나 일요일에 가능한사람만 배열로 만들어 안에 객체를넣어라. ex)[{ name: '고윤태', possibleDaysWeek: '일,월,화', possibleDate: '20201130~' }]
// const users = [
//     { name: '고윤태', possibleDaysWeek: '일,월,화', possibleDate: '20201130~' },
//     { name: '지승한', possibleDaysWeek: '일,월,화,수,목', possibleDate: '20201202~' },
//     { name: '황대명', possibleDaysWeek: '일,월,목', possibleDate: '20201211~' },
//     { name: '신영석', possibleDaysWeek: '월,화,수', possibleDate: '20201225~' },
//     { name: '임채건', possibleDaysWeek: '토,일', possibleDate: '20201216~' },
//     { name: '정대휘', possibleDaysWeek: '월,금,토', possibleDate: '20201213~' },
// ];

// const createReservation = date => {
//     const week = ['일', '월', '화', '수', '목', '금', '토'],
//         dayOfWeek = week[new Date(date).getDay()];

//     const possibleUser = users
//     .filter(user => (user.possibleDaysWeek.split(',').includes(dayOfWeek)))
//     .reduce((acc,cur)=>{
//          return parseInt(acc.possibleDate) > parseInt(cur.possibleDate) ? cur : acc;
//     });

//     console.log(possibleUser);

// };

// console.log('일,월,화,수,목'.split(',',2));

// createReservation('2020-11-29');

//11.29이후 가장 빠르게 가능한사람 + new date 써서 요일도 가능한지

// const array = [2, 4, 6];

// const evenOdd = array.reduce((evenOdd, number) => {
//     // console.log(evenOdd);

//     if (number % 2 === 0) {
//         evenOdd['odd'] = [...evenOdd['odd'] || [], ...[number]];
//     } else {
//         evenOdd['even'] = [...evenOdd['even'] || [], ...[number]];
//     }
//     return evenOdd;
// }, {});

// console.log(evenOdd);
// console.log(Math.min(...array));

/*문제 1 => a, b, c, d가 있는 객체에서 b, c의 키를 제거 하세요*/
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// };

// const removeObj = ['b', 'c'].reduce((removeObj, v) => {
//     delete obj[v];
//     return removeObj;
// }, obj);

/*문제 2 =>  date를 2020-08-13 형식으로 fotmat 하기*/
// const users = [
//     { name: '고윤태', date: '2020년8월13일' },
//     { name: '지승한', date: '2020년2월8일' },
//     { name: '황대명', date: '2020년4월3일' },
//     { name: '신영석', date: '2020년12월11일' },
//     { name: '정대휘', date: '2020년10월9일' }
// ];

// const dateFormat = users.reduce((dateFormat, user) => {
//     const { name, date } = user;

//     const formatDate = (date => {
//         const year = date.substring(0, 4),
//             month = date.substring(5, date.indexOf('월')).padStart(2, '0'),
//             day = date.substring(date.indexOf('월') + 1, date.indexOf('일')).padStart(2, '0');

//         return [year,month,day].join('-');
//     })(date);

//     dateFormat.push({name , date : formatDate})

//     return dateFormat;
// }, []);

// [1,2,3,4,5,6,7,8,9] 형태로 만들기
// const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const array2 = array.reduce((arr,val)=>{
//     return [...arr,...val];
// },[]);

// console.log(array2);

// 거꾸로 배열에 담기
// const string = '123458791';
// const array = string.split('').reverse();
// console.log(array);

//left || right 없으면 leftparent || rightparent키 자체가 없음 satisfaction => answer에 있는지 비교
// {leftparent: {left: 2, satisfaction: true} , rightparent: {right: 10, satisfaction: false}}
// const answer = {
//     'left': [2, 4, 5, 6],
//     "right": [3, 4, 7, 8]
// };

// const obj = { left: 2, right: 10 };

// const compare = Object.keys(obj).reduce((arr, key) => {
//     arr[`${key}parent`] = {
//         [key]: obj[key],
//         satisfaction: answer[key].includes(obj[key])
//     };

//     // if(key === 'left'){
//     //     (answer.left.includes(obj.left)) ? arr.leftparent = {left : obj.left , satisfaction : true} : arr.leftparent = {left : obj.left,satisfaction : false};
//     //     // arr.leftparent = {left : obj.left , satisfaction : answer.left.includes(obj.left)}
//     // }
//     // else if(key === 'right'){
//     //     (answer.right.includes(obj.right)) ? arr.rightparent = {right : obj.right , satisfaction : true} : arr.rightparent = {right : obj.right,satisfaction : false};
//     // }
//     return arr;
// }, {});

// console.log(compare);

// const evenOdd = [1, 3, 7].reduce((evenOdd, val) => {
//     if (!(val % 2 === 0)) {
//         evenOdd['odd'] = [...evenOdd['odd'] || [], ...[val]];
//     } else {
//         evenOdd['even'] = [...evenOdd['even'] || [], ...[val]];
//     }
//     return evenOdd;
// }, { odd: [], even: [] });

// console.log(evenOdd);

// 이 형태로 만들기 age 앞자리 기준 {2:[{name:"고윤태",age:22},{name:"황대명",age:22}],3:[{name:"지승한",age:32}]} 결과물

// const users = [
//     { name: '고윤태', age: 22, car: '소나타' },
//     { name: '황대명', age: 22, car: '그랜저' },
//     { name: '지승한', age: 32, car: '소나타' },
//     { name: '신영석', age: 42, car: '소나타' },
//     { name: '임채건', age: 22, car: '그랜저' },
//     { name: '우민제', age: '뷁', car: '그랜저'}
// ];

// const agesFilter = users.reduce((acc,cur) => {
//     const key = parseInt(cur.age / 10);
//     console.log(acc);
//     console.log(cur);
//     acc[key].push(cur);
//     return acc;
// },[]);

// const tiers = users.reduce((tiers, user) => {
//     const { name, age, car } = user, ageGroup = parseInt(age / 10);
//     return tiers;
// }, {});

// console.log(tiers);

// const sortUsers = users.reduce((sortUsers, user) => {
//     console.log(user);
//     const key = parseInt(user.age / 10);

//     sortUsers[key] = [...sortUsers[key] || [], ...[user]];

//     if (!sortUsers[key]) {
//         sortUsers[key] = [];
//     }

//     //js에서 [] = 배열array {} = 객체object

//     // sortUsers[key].push(user);

//     return sortUsers;
// }, {});

// console.log(sortUsers);

// let val = 'abc';

// if(true){
//     val += 'dfgh';
// }

// if(true){
//     val = 'abcdefg';
// }else{
//     val = 'abc';
// }

// const objj = {
//     a: { last: true, 'aa': 1 },
//     b: {
//         c: { last: true, 'cc': 1 }
//     },
//     d: {
//         f: { last: true, 'ff': 1 }
//     },
// };

// const recursiveSearch = (obj) => {

//     if (!!obj.last) {
//         return obj
//     }
//     Object.keys(obj).forEach(key => recursiveSearch(obj[key]));
// };

// const findkey = obj => {
//     const obj2 = Object.keys(obj).reduce((obj2, key) => {
//         console.log(recursiveSearch(obj[key]));
//         return obj2;
//     }, {});
// };

// findkey(objj);

// const students = [
//     { name: '고윤태', class: 'A', 담당교수: '이광현' },
//     { name: '지승한', class: 'B', 담당교수: '김지현' },
//     { name: '황대명', class: 'B', 담당교수: '김지현' },
//     { name: '신영석', class: 'A', 담당교수: '이광현' },
//     { name: '정대휘', class: 'C', 담당교수: '이광현' },
// ];

//담당교수가 이광형만 뽑아서 class : A { dsajdsako} , B : [asdhsadj]

// console.log({
//     animal: {
//         dog: 2,
//         cat: 3,
//     },
//     fruit: {
//         banana: 1
//     }
// });

/*함수 만들기 함수에 Super Burger:3, Big Slurp : 2 이런 식으로 입력 하면 출력 값은 Super Burger 3개, Big Slurp 2개 계산 금액은 ?? 입니다. 콘솔 로그로 출력하기  */
// const items = [
//     { id: '🍔', name: 'Super Burger', price: 399 },
//     { id: '🍟', name: 'Jumbo Fries', price: 199 },
//     { id: '🥤', name: 'Big Slurp', price: 299 }
// ];

// const requestOrder = order => {
//     const { menuList, sum } = order.split(',').reduce((orders, o) => {
//         const [menu, count] = o.split(':'), { price } = items.find(({ name }) => name === menu.trim());

//         orders['sum'] = (orders['sum'] || 0) + (price * count);
//         orders['menuList'] = [...orders['menuList'] || [], ...[`${menu.trim()} ${count.trim()}개`]];
//         return orders;
//     }, {});

//     console.log(`${String(menuList)} 계산 금액은 ${sum}입니다.`);
// };

// requestOrder('Super Burger:3, Big Slurp : 2');

// const a = false && 10000 || 5000;

// const a = {
//     a : false && 10000 || 5000,
//     b : true && 10000 || 5000,
// }

//{"dog":2,"chicken":3,"cat":1,"rabbit":1} 이 형태로 출력하기

// const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// console.log([...Array(10)]);

//name 옆에 randomValue 라고 key 이름으로 0~100 사이 랜덤 값 넣고 랜덤 값이 50 이상인 사람만 뽑아
//const users = [{ name: '고윤태' }, { name: '황대명' }, { name: '지승한' }, { name: '신영석' }];
// const users = [{ name: '고윤태' }, { name: '황대명' }, { name: '지승한' }, { name: '신영석' }]
//     .map(({ name }) => ({ name, randomValue: Math.floor(Math.random() * 100 + 1) }))
//     .filter(({ randomValue }) => randomValue >= 50);

// console.log(users);

// const uniqueId = (() => {
//     let count = 0;
//     return () => ++count;
// })();

// const addConut = () => {
//     console.log(uniqueId());
// };

// const users = [{ name: '고윤태' }, { name: '황대명' }, { name: '지승한' }, { name: '신영석' }];

// const overFifty = users.reduce((overFifty, user) => {
//     user.randomValue = (Math.floor(Math.random() * (100 - 0)) + 0);
//     if (user.randomValue >= 50) {
//         overFifty.push(user);
//     };
//     return overFifty;
// }, []);

// console.log(overFifty);

// const str = 'rhd ASDASD SADCC ccc'
// // //0번째 RHD 는 소문자로 asdasd 1번째는 대문자로 즉 짝수는 소문자 홀수는 대문자로 변환

// const spliter = str.split(' ').reduce((spliter, word, i) => {
//     spliter.push(i % 2 ? word.toLowerCase() : word.toUpperCase());
//     return spliter;

// }, []).join(' ');

// console.log(spliter);

//문자열에서 최댓값과 최솟값을 찾으면 됩니다. "1 2 3 4"면 1과 4죠.
// const arr = '1 2 3 4'.split(' ').map(v=> parseInt(v));

// const max = Math.max(...arr);
// const min = Math.min(...arr);

// console.log(max);
// console.log(min);

//꺼억;
//버억;

// const obj = [
//     { name: '고윤태', id: 'dbsxo' },
//     { name: '황대명', id: 'eoaud' },
//     { name: '지승한', id: 'tmdgks' },
//     { name: '신영석', id: 'dudtjr' },
//     { name: '임채건', id: 'corjs' },
// ];

// const obj2 = {
//     'dbsxo': [15, 20, 30, 40, 55],
//     'eoaud': [13, 21, 7],
//     'tmdgks': [44, 72, 37, 30, 55, 16],
//     'dudtjr': [7, 13, 19, 22, 68],
//     'corjs': [7, 12, 16, 28],
// };

//예상 result =>  [{name : '고윤태' , avg : => obj2에 있는 배열 값 평균 구한 뒤 입력 } , { name : '황대명' , avg : 예시 74 }]

// const result = obj.reduce((result,ids) =>{
//     ids.avg = obj2[ids.id].reduce((avg,val)=> avg = avg + val ,0) / obj2[ids.id].length ;

//     delete ids.id;

//     result.push(ids);

//     return result;
// },[]);

// console.log(result);

/*
// 특정 조건이 있을때 key,value 적용;
const safi = 'sex';

const obj = {
    a : 3,
    ...safi && {b : 2}
};

console.log(obj);
*/

//여기서 포인트 프로미스를 왜 써야 할까?

// setTimeout(() => {
//     console.log('213');
// }, 2000);

/*
const server1 = () => {
    const user = [
        { name: '고윤태', age: 23, id: 'dbsxo' },
        { name: '지승한', age: 27, id: 'tmdgks' },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 2000); //2초는 포인트가 아니야 2초는 우리가 예시로 잡아놓은 숫자 ㅇㅋ?
    });
};


const server2 = () => {
    const userMap = [
        { name: '고윤태', sex: 'M' },
        { name: '지승한', sex: 'M' },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userMap);
            // reject('server2');
        }, 3000); //2초는 포인트가 아니야 2초는 우리가 예시로 잡아놓은 숫자 ㅇㅋ?
    });
};

const server3 = () => {
    const userMap = [
        { id: 'dbsxo', '연봉': 2200 },
        { id: 'tmdgks', '연봉': 2400 },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userMap);
            // reject('server2');
        }, 1000); //2초는 포인트가 아니야 2초는 우리가 예시로 잡아놓은 숫자 ㅇㅋ?
    });
};

const requestFromServer = () => {
    return Promise.all([server1(), server2()]);
};

const filterYuntae = () => {
    requestFromServer()
        .then(([userInfo, userSex]) => {
            const map = userInfo.map(user => {
                const { sex } = userSex.find(v => user.name === v.name);
                return ({ ...user, sex });
            });


            // console.log(userInfo);
            // console.log(userSex);
            // return server3();
            return Promise.all([server3(),map]);
            //naver api 써서 요청 => 그리고 내가 만든다 ㅇㅋ?
        })
        .then(([연봉,user]) => {
            console.log(연봉);
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        });
};

filterYuntae();

*/

//     const server1 = () => {
//         const user = [
//             { name: '고윤태', age: 23, id: 'dbsxo' },
//             { name: '지승한', age: 27, id: 'tmdgks' },
//         ];

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(user);
//             }, 900); //2초는 포인트가 아니야 2초는 우리가 예시로 잡아놓은 숫자 ㅇㅋ?
//         });
//     };

//     const server2 = () => {
//         const userMap = [
//             { name: '고윤태', sex: 'M' },
//             { name: '지승한', sex: 'M' },
//         ];

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(userMap);
//                 // reject('server2');
//             }, 600); //2초는 포인트가 아니야 2초는 우리가 예시로 잡아놓은 숫자 ㅇㅋ?
//         });
//     };

//     const server3 = () => {
//         const userMap = [
//             { id: 'dbsxo', '연봉': 2200 },
//             { id: 'tmdgks', '연봉': 2400 },
//         ];

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(userMap);
//                 // reject('server2');
//             }, 300); //2초는 포인트가 아니야 2초는 우리가 예시로 잡아놓은 숫자 ㅇㅋ?
//         });
//     };

//     const createUser = () => {
//         return Promise.all([server1(), server2()]);
//     }

//     const result = () => {
//         createUser()
//             .then(([userAges, userSex]) => {
//                 const maping = userAges.map(user => {
//                     const { sex } = userSex.find(v => user.name === v.name);
//                     return ({ ...user, sex });
//                 });
//                 return Promise.all([server3(), maping]);
//             })
//             .then(([salary, users]) => {
//                 const salaries = users.map(s => {
//                     const sexOnTheBeach = (salary.find(v => s.id === v.id));
//                     const 연봉 = sexOnTheBeach.연봉;
//                     return ({ ...s, 연봉 });
//                 });
//                 console.log(salaries);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     result();

// //createUser라는 함수를 만들어서 server1과 server2 는 promise All 연결 후 받은 결과로
// //server3에 요청 보내서 모든 [{name: 고윤태 , sex : m , id : dbsxo , age 23 , 연봉 2200}]
// //형태로 만들기 배열 안에 지승한도 있어야함

//구조분해할당이용해서 a,b값 뒤바꾸기;

// let a = 3;
// let b = 4;

// console.log(a,b);

// [a,b] = [b,a];

// console.log(a,b);

// const num = 3;

// console.log('num');

// console.log(`${num}`);

//문제 2 =>  date를 2020-08-13 형식으로 fotmat 하기
// const users = [
//     { name: '고윤태', date: '2020년8월13일' },
//     { name: '지승한', date: '2020년2월8일' },
//     { name: '황대명', date: '2020년4월3일' },
//     { name: '신영석', date: '2020년12월11일' },
//     { name: '정대휘', date: '2020년10월9일' }
// ];
// const sex = users.reduce((acc,cur)=>{
//     const [year,month,day] = cur.date.split(/년|월|일/);
//     const formating = [year,month.padStart(2,'0'),day.padStart(2,'0')].join('-');
//     acc.push({name : cur.name, date : formating});
//     return acc;
// },[]);

//문제 3 거꾸로 배열에 담기
// const string = '123458791';
// const arr = [];
// arr.push(string.split('').reverse().join(''));
// console.log(arr);

//문제 4 //담당교수가 이광형이 담당교수님인 애들만 뽑아서 묶어 {class : A [dsajdsako] , B : [asdhsadj]
// const students = [
//     { name: '고윤태', class: 'A', 담당교수: '이광형' },
//     { name: '지승한', class: 'B', 담당교수: '김지현' },
//     { name: '황대명', class: 'B', 담당교수: '김지현' },
//     { name: '신영석', class: 'A', 담당교수: '이광형' },
//     { name: '정대휘', class: 'C', 담당교수: '이광형' },
// ];

// const sex = students.reduce((acc,cur)=>{
//     if(cur.담당교수==='이광형')
//         !!acc.class[cur.class] ? acc.class[cur.class].push(cur.name) : acc.class[cur.class] = [cur.name];
//     return acc;
//     },{ class:{} });
// console.log(sex);

// const num = [1,2,8,0];
// const names = ['지승한','정준휘','우민제','조성규']

// const result = num.reduce((acc,cur,i) => {
//     const obj = {
//         name : names[i],
//         ...!!cur && {number : cur}
//     }
//     acc.push(obj);
//     return acc;
// },[])

// console.log(result);

// 종류별로 나눠서 카운트

// ex) {중식:{튀김류:8,면류9},양식:{...}

// const menu = {
// 	'중식>탕수육' : 5,
// 	'중식>깐풍기' : 3,
// 	'중식>짜장면' : 8,
// 	'중식>차돌짬뽕' : 1,
// 	'양식>하와이안피자':1,
// 	'양식>포테이토피자':4,
// 	'양식>크림파스타':3,
// 	'양식>알리올리오파스타':4,
// 	'한식>순대국밥':3
// };
// const menu = {
// 	'중식>튀김류>탕수육' : 5,
// 	'중식>튀김류>깐풍기' : 3,
// 	'중식>면류>짜장면' : 8,
// 	'중식>면류>차돌짬뽕' : 1,
// 	'양식>피자>하와이안피자':1,
// 	'양식>피자>포테이토피자':4,
// 	'양식>면류>크림파스타':3,
// 	'양식>면류>알리올리오파스타':4,
// 	'한식>밥류>순대국밥':3
// };
//  // ex) {중식:{튀김류:8,면류9},양식:{...}
// let count = {};
// // console.log(Object.entries(menu));
// const result = Object.keys(menu).reduce((result,key) => {
//     const [nation,category,item] = key.split('>');
//     if(!!result[nation]){
//         if(!!result[nation][category]){
//             result[nation][category] += menu[key]; //중식,종류 이미 있는 경우
//         } else {
//             result[nation] = {...result[nation],...{[category] : menu[key]}}; //중식은있지만, 종류는 없는경우
//         }
//     } else {
//         result[nation] = {[category] : menu[key]};//그냥 없는경우
//     }
//     return result;
// },{});

// console.log(result);

// const obj = [
//     { name: '고윤태', id: 'dbsxo' },
//     { name: '황대명', id: 'eoaud' },
//     { name: '지승한', id: 'tmdgks' },
//     { name: '신영석', id: 'dudtjr' },
//     { name: '임채건', id: 'corjs' },
// ];

// const obj2 = {
//     'dbsxo': [15, 20, 30, 40, 55],
//     'eoaud': [13, 21, 7],
//     'tmdgks': [44, 72, 37, 30, 55, 16],
//     'dudtjr': [7, 13, 19, 22, 68],
//     'corjs': [7, 12, 16, 28],
// };

// const result = obj.map(user => {
//     const avg = obj2[user.id].reduce((avg, grade) => avg + grade) / obj2[user.id].length;
//     return { name: user.name, avg };
// })

// console.log(result);

//예상 result =>  [{name : '고윤태' , avg : => obj2에 있는 배열 값 평균 구한 뒤 입력 } , { name : '황대명' , avg : 예시 74 }]

// const dbRow = [
//     {
//         name: '지승한',
//         age: 25,
//         dept: '소프트웨어 공학과'
//     },
//     {
//         name: '일승한',
//         age: 16,
//     }, {
//         name: '이승한',
//         age: 22,
//         dept: '자동차 공학과'
//     }, {
//         name: '삼승한',
//         age: 32,
//         dept: '컴퓨터 공학과'
//     }, {
//         name: '임서인',
//         age: 23,
//         dept: '소프트웨어 공학과'
//     }
// ];

// const result = dbRow.map(v => Math.floor(v.age / 10));

// const result = dbRow.map(student => {
//     student.age = parseInt(student.age / 10);
//     return student;
// });

// console.log(result);

// const point = ['고윤태:213123A', '지승한:B213', '신영석:A21321', '황대명:C213123', '임채건:F', '정대휘:D'];

// const obj = point.reduce((acc, cur) => {
//     [key, value] = cur.split(':');
//     acc[key] = value;
//     return acc;
// }, {});

// console.log(고윤태);

// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
// ()()()()()((()))

// const s = () => {
//     let str = '';
//     const character = '()';
//     const stringLength = 8;

//     for (let i = 0; i < stringLength; i++) {
//         str += character.charAt(Math.floor(Math.random() * character.length));
//     };

//     return str;
// }

// const solution = (str) => {
//     let count = 0;

//     [...str].forEach(v => {
//         v === '(' ? count++ : count--
//         if (count < 0)
//             return false;
//     });
//     return true;
// }

// console.log(solution(s()));
