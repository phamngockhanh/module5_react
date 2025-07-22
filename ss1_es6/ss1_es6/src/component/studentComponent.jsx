
const studentLists = [
  {
    id: 1,
    name: "khanh",
    age: 18,
    class: "13A1",
  },
  {
    id: 2,
    name: "khanh2",
    age: 17,
    class: "13A1",
  },
  {
    id: 3,
    name: "khanh3",
    age: 16,
    class: "13A1",
  },
];

const StudentList = () => {
  return (
    <table border="1">
      <thead>
        <tr >
          <td>STT</td>
          <td>Họ tên</td>
          <td>Tuổi</td>
          <td>Lớp</td>
        </tr>
      </thead>
      <tbody>
        {studentLists.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.class}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
