import { useState, useEffect } from "react";
import { listAll } from "../service/student";
import DeleteComponent from "./DeleteComponent";
import AddComponent from "./AddComponent";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
const ListStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studentDelete, setStudentDelete] = useState({ id: 0, name: "" });
  useEffect(() => {
    console.log("--------useEffect run--------");
    setStudentList([...listAll()]);
  }, [isLoading, isShowModal]);

  const handleShowModal = (student) => {
    setIsShowModal((pre) => !pre);
    setStudentDelete(student);
  };

  const handleCloseModal = () => {
    setIsShowModal((pre) => !pre);
  };
  return (
    <>
      <AddComponent setIsLoading={setIsLoading} />
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>
                <button onClick={() => handleShowModal(s)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteComponent
        studentDelete={studentDelete}
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
export default ListStudent;
