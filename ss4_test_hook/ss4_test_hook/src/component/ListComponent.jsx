import { useState, useEffect } from "react";
import { getAll } from "../service/studentService";
import DeleteComponent from "./DeleteComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Navigate, Link } from "react-router-dom";

const ListStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState({ id: 0, name: "" });
  useEffect(() => {
    console.log("--------------useEffect run-------------");
    setStudentList([...getAll()]);
  }, [isShowModal]);

  const handleShowModal = (student) => {
    setIsShowModal((pre) => !pre);
    setDeleteStudent(student);
  };

  const handleCloseModal = () => {
    setIsShowModal((pre) => !pre);
  };

  return (
    <>
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
          {studentList.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => handleShowModal(student)}>Delete</button>
              </td>
              <td>
                <Link to={`/detail/${student.id}`}>Detail</Link>
              </td>
              <td>
                <Link to={`/update/${student.id}`}>Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteComponent
        deleteStudent={deleteStudent}
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
export default ListStudent;
