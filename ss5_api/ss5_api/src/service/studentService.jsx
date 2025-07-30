import axios from "axios";

const findAll = async () => {
  try {
    const listAll = await axios.get("http://localhost:3001/students");
    return listAll.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const add = async (student) => {
  try {
    await axios.post("http://localhost:3001/students", student);
  } catch (error) {
    console.log(error);
  }
};

const update = async (student) => {
  try {
    await axios.put(`http://localhost:3001/students/${student.id}`, student);
  } catch (error) {
    console.log(error);
  }
};

const findById = async (id) => {
  try {
    const findById = await axios.get(`http://localhost:3001/students/${id}`);
    return findById.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const deleteById = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/students/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const search = async (name, classCGId, page, limit) => {
  try {
    let url = `http://localhost:3001/students?_page=${page}&_limit=${limit}`;
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
