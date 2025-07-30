import { Link } from "react-router-dom";
import studentService from "../service/studentService";
import classService from "../service/classService";
import DeleteComponent from "./DeleteComponent";
import { useState, useEffect, useRef } from "react";
const ListComponent = () => {
  const [studentList, setStudentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 1;
  const [classCGs, setClassCGs] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState({ id: 0, name: "" });
  const name = useRef();
  const classCG = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const classCGS = await classService.getAll();
      const { data, totalCount } = await studentService.search(
        name.current?.value || "",
        classCG.current?.value || "",
        currentPage,
        limit
      );
      setTotalPages(Math.ceil(totalCount / limit));
      setStudentList(data);
      setClassCGs(classCGS);
    };
    fetchData();
  }, [currentPage, isShowModal]);

  const handleShowModal = (student) => {
    setIsShowModal((pre) => !pre);
    setDeleteStudent(student);
  };
  const handleCloseModal = () => {
    setIsShowModal((pre) => !pre);
  };

  const search = async () => {
    setCurrentPage(1); // reset về trang 1 khi tìm kiếm
    const { data, totalCount } = await studentService.search(
      name.current.value,
      classCG.current.value,
      1,
      limit
    );
    setStudentList(data);
    setTotalPages(Math.ceil(totalCount / limit));
  };
  return (
    <div className="container mt-4">
      {/* Tiêu đề và nút thêm mới */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">Danh sách học sinh</h2>
        <Link
          to="/add"
          className="btn btn-success d-flex align-items-center px-4 py-2 shadow"
          style={{
            borderRadius: "20",
            fontSize: "16px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#28a745")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#198754")}
        >
          <i className="bi bi-plus-lg me-2"></i> Thêm mới
        </Link>
      </div>

      {/* Khu vực tìm kiếm */}
      <div className="card p-3 mb-4 shadow-sm">
        <h5 className="mb-3">Tìm kiếm học sinh</h5>
        <div className="row g-3">
          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Nhập tên học sinh..."
              ref={name}
            />
          </div>
          <div className="col-md-4">
            <select className="form-select" ref={classCG}>
              <option value="">Chọn lớp</option>
              {classCGs.map((classCG) => (
                <option key={classCG.id} value={classCG.id}>
                  {classCG.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 text-end">
            <button
              className="btn btn-primary w-100"
              type="button"
              onClick={search}
            >
              🔍 Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      {/* Bảng danh sách */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Môn học</th>
              <th>Địa chỉ</th>
              <th>Giới tính</th>
              <th>Lớp</th>
              <th>Ngày sinh</th>
              <th className="text-center" colSpan="3">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {studentList.length > 0 ? (
              studentList.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>
                    {[]
                      .concat(student.subject || [])
                      .map((sub) => sub.name)
                      .join(", ")}
                  </td>
                  <td>{student.address}</td>
                  <td>{student.gender ? "Nam" : "Nữ"}</td>
                  <td>{student.classCG?.name}</td>
                  <td>{new Date(student.dateOfBirth).toLocaleDateString()}</td>
                  <td>
                    <Link
                      to={`/update/${student.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      ✏ Cập nhật
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/detail/${student.id}`}
                      className="btn btn-info btn-sm me-2 text-white"
                    >
                      ℹ Chi tiết
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleShowModal(student)}
                      className="btn btn-danger btn-sm"
                    >
                      🗑 Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center text-muted">
                  Không có dữ liệu để hiển thị
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-outline-primary me-2"
          disabled={currentPage === 1 || studentList.length === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ⬅ Trước
        </button>
        <span className="align-self-center">
          Trang {currentPage} / {totalPages}
        </span>
        <button
          className="btn btn-outline-primary ms-2"
          disabled={currentPage === totalPages || studentList.length === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Sau ➡
        </button>
      </div>

      {/* Modal xóa */}
      <DeleteComponent
        deleteStudent={deleteStudent}
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};
export default ListComponent;
