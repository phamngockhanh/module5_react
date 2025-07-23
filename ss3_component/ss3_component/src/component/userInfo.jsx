import React, { Component } from "react";

const students = [
  { id: 1, name: "Nguyễn Đức Vĩnh wibu", age: 25, className: "C0225G1" },
  { id: 2, name: "Nguyễn Đức Vĩnh wibu", age: 25, className: "C0225G1" },
  { id: 3, name: "Nguyễn Đức Vĩnh wibu", age: 25, className: "C0225G1" },
];
class UserInfo extends Component {
  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserInfo;
