import axios from "axios";

const getAll = async () => {
  try {
    const resp = await axios.get("http://localhost:3001/subjects");
    return resp.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const findById = async (id) => {
  try {
    const resp = await axios.get(`http://localhost:3001/subjects/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};


export default { getAll, findById};
