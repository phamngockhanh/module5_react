import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findById } from "../service/studentService";
const DetailComponent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({ id: 0, name: "", className: "" });
  useEffect(() => {
    const fetchData = async () => {
      const data = await findById(id);
      console.log(data);
      setStudent(data);
    };
    fetchData();
  }, [id]);
  return (
    <>
      <h1>Chi tiết học sinh</h1>
      <span>Tên học sinh: {student.name}</span>
      <br />
      <span>Tuổi học sinh: {student.age}</span>
      <br />
      <span>Lớp: {student.className}</span>
    </>
  );
};

export default DetailComponent;
