import axios from "axios";
const DB_URL = "https://crud-student-49e77-default-rtdb.asia-southeast1.firebasedatabase.app/classCGs.json"
const getAll = async () => {
  try {
    // const resp= await axios.get("http://localhost:3001/classCGs");
    const resp= await axios.get(DB_URL);
    return resp.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const findById = async (id) => {
  try {
    // const resp= await axios.get(`http://localhost:3001/classCGs/${id}`);
    const resp= await axios.get(`${DB_URL}/${id}`);
    return resp.data;
  } catch (error) { 
    console.log(error);
    return {};
  }
};
export default { getAll, findById };
