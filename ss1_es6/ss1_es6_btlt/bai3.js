import {courses} from './Bai1Service.js'

let addedCourses = [ 
  { 
    id: 6, 
    title: "PHP Tutorial", 
    rating: 3, 
  }, 
  { 
    id: 7, 
    title: "C# Tutorial", 
    rating: 2, 
  }, 
  { 
    id: 8, 
    title: "Docker Tutorial", 
    rating: 3.8, 
  } 
]; 
let newArr = [...courses, ...addedCourses];
console.log(newArr);
console.log("Concat:")
console.log(courses.concat(addedCourses));
