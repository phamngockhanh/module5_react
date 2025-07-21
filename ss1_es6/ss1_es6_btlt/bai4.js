// const students = [
//   { name: "An", age: 20, scores: [8, 7.5, 9] },
//   { name: "Bình", age: 21, scores: [6, 5, 7] },
//   { name: "Chi", age: 22, scores: [9.5, 8.5, 10] }
// ];
// :dart: Yêu cầu:
// Dùng
// map() để tính điểm trung bình mỗi sinh viên.
// Dùng filter() để lấy danh sách sinh viên có điểm trung bình >= 8.
// Dùng destructuring để truy cập tên và điểm số.
// Dùng template literals để in ra danh sách sinh viên như sau:
// "Chi - Age: 22 - Avg Score: 9.33"

const students = [
  { name: "An", age: 20, scores: [8, 7.5, 9] },
  { name: "Bình", age: 21, scores: [6, 5, 7] },
  { name: "Chi", age: 22, scores: [9.5, 8.5, 10] }
];

// bai 1
const avg = students.map(student => student.name + "," + student.age + "," + student.scores.reduce((sum, num) => (sum + num),0)/student.scores.length );
console.log(avg);


// bai2
const studentList = students.filter(student => (student.scores.reduce((sum,num)=>(sum+num),0)/student.scores.length)>=8);
console.log(studentList);

// bai3

students.forEach(({name,scores}) =>
    console.log(`${name}: ${scores}`)
)

//bai4
const studentList3= students.map(student =>`${student.name} - Age: ${student.age} - Avg Score : `+ student.scores.reduce((sum, num) => (sum + num),0)/student.scores.length)
console.log(studentList3);


let arr = [10,15,20,30,35];
const evenArr = arr.filter(num=>num%2==0).reduce((sum,num)=>sum+num,0);
// const sumArr = evenArr.reduce((sum,num)=>sum+num,0);
console.log(evenArr);