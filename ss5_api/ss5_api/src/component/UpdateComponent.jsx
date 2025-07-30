import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import studentService from "../service/studentService";
import classService from "../service/classService";
import subjectService from "../service/subjectService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateComponent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(undefined);
  const [classList, setClassList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const student = await studentService.findById(id);
      student.classCG = student.classCG.id;
      student.subject = student.subject.map((s) => s.id.toString());
      student.gender = student.gender.toString();
      const classList = await classService.getAll();
      const subjectList = await subjectService.getAll();

      setClassList(classList);
      setSubjectList(subjectList);
      setStudent(student);
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = async (value) => {
    let classCGInput = await classService.findById(parseInt(value.classCG));
    let subjectInput = [];
    for (let i = 0; i < value.subject.length; i++) {
      subjectInput.push(
        await subjectService.findById(parseInt(value.subject[i]))
      );
    }
    value = {
      ...value,
      classCG: classCGInput,
      gender: value.gender === "true",
      subject: subjectInput,
    };
    console.log(value);
    await studentService.update(value);
    navigate("/list");
    Swal.fire({
      title: "Hello!",
      text: "cập nhật thành công",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const handleValidate = Yup.object({
    name: Yup.string()
      .required("Yêu cầu nhập tên")
      .matches(/^[A-Z]\w+$/, "Tên chưa nhập đúng định dạng"),
    age: Yup.number().required("Yêu cầu nhập tuổi").min(18, "Tuổi lớn hơn 18"),
    address: Yup.string().required("Yêu cầu nhập địa chỉ"),
    dateOfBirth: Yup.date()
      .required("Yêu cầu chọn ngày sinh")
      .max(new Date(), "Ngày sinh không được là tương lai"),
    gender: Yup.string().required("Yêu cầu chọn giới tính"),
    classCG: Yup.string().required("Yêu cầu chọn lớp"),
    subject: Yup.array().min(1, "Vui lòng chọn ít nhất 1 môn học"),
  });
  return (
    <>
      {student && (
        <Formik
          initialValues={student}
          onSubmit={handleUpdate}
          validationSchema={handleValidate}
          enableReinitialize={true}
        >
          <Form>
            <div className="container mt-5 p-4 shadow rounded bg-light w-50">
              <h3 className="text-center mb-4 text-primary">
                Cập nhật sinh viên
              </h3>

              {/* Tên sinh viên */}
              <div className="mb-3">
                <label className="form-label fw-bold">Tên sinh viên:</label>
                <Field type="text" className="form-control" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Tuổi */}
              <div className="mb-3">
                <label className="form-label fw-bold">Tuổi:</label>
                <Field type="number" className="form-control" name="age" />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Địa chỉ */}
              <div className="mb-3">
                <label className="form-label fw-bold">Địa chỉ:</label>
                <Field type="text" className="form-control" name="address" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Ngày sinh */}
              <div className="mb-3">
                <label className="form-label fw-bold">Ngày sinh:</label>
                <Field
                  type="date"
                  className="form-control"
                  name="dateOfBirth"
                />
                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Giới tính */}
              <div className="mb-3">
                <label className="form-label fw-bold d-block">Giới tính:</label>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="true"
                    id="gender-male"
                  />
                  <label className="form-check-label" htmlFor="gender-male">
                    Nam
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="false"
                    id="gender-female"
                  />
                  <label className="form-check-label" htmlFor="gender-female">
                    Nữ
                  </label>
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Lớp */}
              <div className="mb-3">
                <label className="form-label fw-bold">Lớp:</label>
                <Field as="select" className="form-select" name="classCG">
                  <option value="">Chọn lớp</option>
                  {classList.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="classCG"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Môn học */}
              <div className="mb-3">
                <label className="form-label fw-bold">Môn học:</label>
                <div className="d-flex flex-wrap">
                  {subjectList.map((subject) => (
                    <div key={subject.id} className="form-check me-3">
                      <Field
                        className="form-check-input"
                        name="subject"
                        type="checkbox"
                        value={subject.id.toString()}
                        id={`subject-${subject.id}`}
                      />
                      <label
                        htmlFor={`subject-${subject.id}`}
                        className="form-check-label"
                      >
                        {subject.name}
                      </label>
                    </div>
                  ))}
                </div>
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Nút Lưu */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-secondary w-25"
                  type="button"
                  onClick={() => navigate("/list")}
                >
                  Quay lại
                </button>
                <button className="btn btn-success w-50" type="submit">
                  Lưu
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default UpdateComponent;
