import { person } from "./Bai2Service.js";

const {firstName,gender,education :{degree},languages} = person;

const student = {firstName,gender,degree,English: languages[0]};

console.log(student);