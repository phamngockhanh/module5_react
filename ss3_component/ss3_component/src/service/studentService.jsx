const studentsData = [
  { id: 1, name: "Khánh đẹp trai nhất C02", age: 18, className: "C0225G1" },
  { id: 2, name: "Khánh đẹp trai nhất C02", age: 18, className: "C0225G1" },
  { id: 3, name: "Khánh đẹp trai nhất C02", age: 18, className: "C0225G1" },
];

const StudentService = {
  getStudents: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(studentsData);
      }, 500);
    });
  },

  addStudents: (student) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        studentsData.push(resolve);
        resolve(student);
      }, 300);
    });
  },

  updateStudents: (student) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = studentsData.findIndex((s) => s.id === student.id);
        if (index !== -1) {
          studentsData[index] = student;
        }
        resolve(student);
      }, 300);
    });
  },

  deleteStudents: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = studentsData.findIndex((s) => s.id === id);
        if (index !== -1) {
          studentsData.splice(index,1);
        }
        resolve(id);
      }, 300);
    });
  },
};

export default StudentService;
