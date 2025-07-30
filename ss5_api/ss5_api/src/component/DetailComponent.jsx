import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import studentService from "../service/studentService";

const DetailComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await studentService.findById(id);
        setStudent(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="container text-center mt-5">
        <h4>Không tìm thấy sinh viên</h4>
        <button className="btn btn-secondary" onClick={() => navigate("/list")}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded-3">
        <div className="card-header bg-primary text-white text-center">
          <h3 className="mb-0">📄 Chi tiết sinh viên</h3>
        </div>
        <div className="card-body p-4">
          {/* Thông tin sinh viên */}
          <div className="mb-3 row">
            <label className="col-sm-3 fw-bold text-secondary">Tên:</label>
            <div className="col-sm-9 text-dark">{student.name}</div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 fw-bold text-secondary">Tuổi:</label>
            <div className="col-sm-9">{student.age}</div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 fw-bold text-secondary">Lớp:</label>
            <div className="col-sm-9">{student.classCG?.name}</div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 fw-bold text-secondary">
              Giới tính:
            </label>
            <div className="col-sm-9">{student.gender ? "Nam" : "Nữ"}</div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 fw-bold text-secondary">Môn học:</label>
            <div className="col-sm-9">
              {[]
                .concat(student.subject || [])
                .map((sub) => sub.name)
                .join(", ")}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="card-footer text-center bg-light">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("/list")}
          >
            ⬅ Quay lại danh sách
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
