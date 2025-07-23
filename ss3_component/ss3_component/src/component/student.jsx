import StudentService from "../service/studentService";
import { Component } from "react";

class StudentManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      name: "",
      age: "",
      className: "",
      editId: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    this.setState({ loading: true });
    StudentService.getStudents().then((data) => {
      this.setState({ students: data, loading: false });
      console.log("Data:", data);
    });
  };

  handleAddOrUpdate = () => {
    const { name, age, className, editId } = this.state;
    if (
      name.trim() === null ||
      age.trim() === null ||
      className.trim() === null
    ) {
      alert("Vui lòng nhập đầy đủ các trường!!!");
      return;
    }

    if (editId) {
      const updateStudent = { id: editId, name, age };
      StudentService.updateStudents(updateStudent).then(() => {
        this.fetchStudents();
        this.setState({ name: "", age: "", editId: null });
      });
    } else {
      const newStudent = { id: Date.now(), name, age };
      StudentService.addStudents(newStudent).then(() => {
        this.fetchStudents();
        this.setState({ name: "", age: "", editId: null });
      });
    }
  };

  handleEdit = () => {
    this.setState({
      name: this.name,
      age: this.age,
      className: this.className,
      editId: this.editId,
    });
  };

  handleDelete = (id) => {
    StudentService.deleteStudents(id).then(() => {
      this.fetchStudents();
    });
  };
  render() {
    const { students, name, age, className, editId, loading } = this.state;

    return (
      <div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Nhập tên sinh viên"
            style={{ marginRight: "10px" }}
          />
          <input
            type="number"
            name="age"
            value={age}
            onChange={this.handleChange}
            placeholder="Nhập tuổi"
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            name="className"
            value={className}
            onChange={this.handleChange}
            placeholder="Nhập lớp"
            style={{ marginRight: "10px" }}
          />
          <button onClick={this.handleAddOrUpdate}>
            {editId ? "Cập nhật" : "Thêm"}
          </button>
        </div>
        {loading ? (
          <p>Đang tải dữ liệu</p>
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Tuổi</th>
                <th>Lớp</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.className}</td>
                  <td>
                    <button onClick={() => this.handleEdit(student)}>
                      Sửa
                    </button>
                    <button
                      onClick={() => this.handleDelete(student.id)}
                      style={{ marginLeft: "10px", color: "red" }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    Không có sinh viên nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default StudentManager;
