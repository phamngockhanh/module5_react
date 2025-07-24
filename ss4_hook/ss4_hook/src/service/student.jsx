let studentsData = [
  {
    id: 1,
    name: "Khánh",
    age: 18,
  },
  {
    id: 2,
    name: "Khánh 1",
    age: 18,
  },
  {
    id: 3,
    name: "Khánh 2",
    age: 18,
  },
];

const add = (student) => {
  studentsData.push(student);
};

const listAll = () => {
  return studentsData;
};

const deleteStudent = (id) => {
  studentsData = studentsData.filter((student) => student.id != id);
};

// const updateStudent = (id) => {
//   return studentsData.filter((student) => student.id != id);
// };

export { add, listAll, deleteStudent };
