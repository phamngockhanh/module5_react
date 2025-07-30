import axios from "axios";

const DB_URL = "https://crud-student-49e77-default-rtdb.asia-southeast1.firebasedatabase.app/students.json";
const findAll = async () => {
  try {
    //const listAll = await axios.get("http://localhost:3001/students");
    const listAll = await axios.get(DB_URL);
    return listAll.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const add = async (student) => {
  try {
  //  await axios.post("http://localhost:3001/students", student);
    await axios.post(DB_URL, student);
  } catch (error) {
    console.log(error);
  }
};

const update = async (student) => {
  try {
   // await axios.put(`http://localhost:3001/students/${student.id}`, student);
    await axios.put(`${DB_URL}/${student.id}`, student);
  } catch (error) {
    console.log(error);
  }
};

const findById = async (id) => {
  try {
    //const findById = await axios.get(`http://localhost:3001/students/${id}`);
    const findById = await axios.get(`${DB_URL}/${id}`);
    return findById.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const deleteById = async (id) => {
  try {
   // await axios.delete(`http://localhost:3001/students/${id}`);
    await axios.delete(`${DB_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const search = async (name, classCGId, page, limit) => {
  try {
   // let url = `http://localhost:3001/students?_page=${page}&_limit=${limit}`;
    let url = `${DB_URL}?_page=${page}&_limit=${limit}`;
    if (name) {
      url += `&name_like=${name}`;
    }
    if (classCGId) {
      url += `&classCG.id=${classCGId}`;
    }
    const resp = await axios.get(url);
    const totalCount = resp.headers["x-total-count"]; // lấy tổng số bản ghi từ header
    return { data: resp.data, totalCount };
  } catch (error) {
    console.log(error);
    return { data: [], totalCount: 0 };
  }
};
// const search = async (name, classCGId) => {
//   try {
//     let url = `http://localhost:3001/students?name_like=${name}`;
//     if (classCGId) {
//       url += `&classCG.id=${classCGId}`;
//     }
//     const resp = await axios.get(url);
//     const totalCount = resp.headers["x-total-count"]; // lấy tổng số bản ghi từ header
//     return { data: resp.data, totalCount };
//   } catch (error) {
//     console.log(error);
//     return { data: [], totalCount: 0 };
//   }
// };

export default { findAll, add, deleteById, update, findById, search };
