import { useState, useEffect, useRef } from "react";
import { getAll } from "../service/studentService";
import DeleteComponent from "./DeleteComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Navigate, Link } from "react-router-dom";
import { search } from "../service/studentService";
const ListStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState({ id: 0, name: "" });
  const name = useRef();
  // useEffect(() => {
  //   console.log("--------------useEffect run-------------");
  //   const fetchData = async () => {
  //     const result = await getAll();
  //     setStudentList([...result]);
  //   };
  //   fetchData();
  // }, [isShowModal]);

  useEffect(() => {
    const fetchData = async () => {
      getAll().then((data) => {
        setStudentList([...data]);
      });
    };
    fetchData();
  }, [isShowModal]);

  const handleShowModal = (student) => {
    setIsShowModal((pre) => !pre);
    setDeleteStudent(student);
  };

  const handleCloseModal = () => {
    setIsShowModal((pre) => !pre);
  };

  const handleSearch = async () => {
    // e.preventDefault();
    const result = await search(name.current.value);
    console.log(result);
    setStudentList(result);
  };


  return (
    <>
      {/* <form onSubmit={handleSearch}>
        <label htmlFor="searchName">Tên </label>
        <input ref={name} id="searchName" placeholder="name"></input>
        <button type="submit">Search</button>
      </form> */}
      <input ref={name} placeholder="Nhập tên" />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.subjects}</td>
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
