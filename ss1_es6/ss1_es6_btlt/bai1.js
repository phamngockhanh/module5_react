import {courses} from './Bai1Service.js'

// for(let i = 0;i<courses.length;i++){
//     if(courses[i].rating>=4){
//         console.log(courses[i]);
//     }
// }

const number = courses.filter(course => course.rating >=4);
console.log (number);