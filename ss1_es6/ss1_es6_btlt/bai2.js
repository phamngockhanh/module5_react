import { courses } from "./Bai1Service.js";

const courses2 = courses
  .filter((course) => course.rating < 4)
  .map((course) => course.id + "_" + course.title + "_" + course.rating);
console.log(courses2);
