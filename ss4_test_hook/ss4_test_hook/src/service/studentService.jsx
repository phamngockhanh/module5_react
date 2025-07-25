const studentsData = [
  { id: 1, name: "Phạm Ngọc Khánh", age: 18, className: "c0225G1" },
  { id: 2, name: "Phạm Ngọc Khánh 2", age: 18, className: "c0225G1" },
  { id: 3, name: "Phạm Ngọc Khánh 3 ", age: 18, className: "c0225G1" },
  { id: 4, name: "Phạm Ngọc Khánh 4", age: 18, className: "c0225G1" },
];

export const getAll = () => {
  return studentsData;
};

export const add = (student) => {
  studentsData.push(student);
};

export const update = (student) => {
  const index = studentsData.findIndex((s) => (s.id = student.id));

  if (index !== -1) {
    studentsData[index] = student;
  }
};

export const findById = (id) => {
  return studentsData.find((s) => (s.id == id));
};

export const deleteStu = (id) => {
  const index = studentsData.findIndex((s) => (s.id = id));
  if (index !== -1) {
    studentsData.splice(index, 1);
  }
};
