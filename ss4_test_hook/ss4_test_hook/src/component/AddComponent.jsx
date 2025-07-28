import { add } from "../service/studentService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
const AddComponent = () => {
  const [student, setStudent] = useState({
    id: 0,
    name: "",
    age: 0,
    className: "",
  });
  const navigate = useNavigate();

  const handleAdd = async (value) => {
    value = {
      ...value,
    };
    await add(value);
    navigate("/list");
    Swal.fire({
      title: "Hello!",
      text: "Đây là thông báo từ SweetAlert2",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleValidate = Yup.object({
    name: Yup.string()
      .required("Yêu cầu nhập tên")
      .matches(/^[A-Z]\w+$/, "Tên nhập chưa định dạng"),
    age: Yup.string().required("Yêu cầu nhập tuổi"),
    className: Yup.string().required("Yêu cầu nhập lớp"),
  });
  return (
    <>
      {console.log("--------add Render------------")}
      <Formik
        initialValues={student}
        onSubmit={handleAdd}
        validationSchema={handleValidate}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage
              name="name"
              component={"div"}
              style={{ color: "red" }}
            />
          </div>
          <div>
            <label>Age</label>
            <Field type="text" name="age" />
            <ErrorMessage
              name="age"
              component={"div"}
              style={{ color: "red" }}
            />
          </div>
          <div>
            <label>className</label>
            <Field type="text" name="className" />
            <ErrorMessage
              name="className"
              component={"div"}
              style={{ color: "red" }}
            />
          </div>
          <button type={"submit"}>save</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddComponent;
