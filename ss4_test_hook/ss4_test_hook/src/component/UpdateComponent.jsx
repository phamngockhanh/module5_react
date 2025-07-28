import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { update, findById } from "../service/studentService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateComponent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const student = await findById(id);
      console.log(student);
      setStudent(student);
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();
  const handleUpdate = async (value) => {
    value = {
      ...value,
    };
    console.log(value);
    await update(value);
    navigate("/list");
    Swal.fire({
      title: "Hello!",
      text: "cập nhật thành công",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const validateUpdate = Yup.object({
    name: Yup.string()
      .required("Hãy nhập trường này")
      .matches(/^[A-Z]\w+/),
    age: Yup.string().required("Hãy nhập trường này"),
    className: Yup.string().required("Hãy nhập trường này"),
  });

  //   if (student.id == 0) {
  //     return "";
  //   }

  return (
    <>
      {student && (
        <Formik
          initialValues={student}
          onSubmit={handleUpdate}
          validationSchema={validateUpdate}
        >
          <Form>
            <div>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component={"div"}
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div>
              <Field type="text" name="age" />
              <ErrorMessage
                name="age"
                component={"div"}
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div>
              <Field type="text" name="className" />
              <ErrorMessage
                name="className"
                component={"div"}
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <button type={"submit"}>Save</button>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default UpdateComponent;
