import axios from "axios";

let studentsData = [
  { id: 1, name: "Phạm Ngọc Khánh", age: 18, className: "c0225G1" },
  { id: 2, name: "Phạm Ngọc Khánh 2", age: 18, className: "c0225G1" },
  { id: 3, name: "Phạm Ngọc Khánh 3 ", age: 18, className: "c0225G1" },
  { id: 4, name: "Phạm Ngọc Khánh 4", age: 18, className: "c0225G1" },
];

export const getAll = async () => {
  try {
    const resp = await axios.get("http://localhost:3001/students");
    return resp.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const add = async (student) => {
  try {
    await axios.post("http://localhost:3001/students", student);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (student) => {
  try {
    await axios.put(`http://localhost:3001/students/${student.id}`, student);
  } catch (error) {
    console.log(error);
  }
};

export const findById = async (id) => {
  try {
    const student = await axios.get(`http://localhost:3001/students/${id}`);
    return student.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const deleteStu = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/students/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const search = async (name) => {
  try {
    const searchStudent =  await axios.get(`http://localhost:3001/students?name_like=${name}`);
    return searchStudent.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
