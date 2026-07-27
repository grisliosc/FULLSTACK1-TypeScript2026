/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
  studentId: string;
  fullName: string;
  age: number;
  isActStudent: boolean;
};

const students: Student[] = [
  {
    studentId: "TLKM123",
    fullName: "Datta Banu",
    age: 16,
    isActStudent: true
  },
  
  {
    studentId: "TLKM124",
    fullName: "Dynand Fahreza",
    age: 15,
    isActStudent: true
  },

  {
    studentId: "TLKM125",
    fullName: "Nilam Allutfiana",
    age: 30,
    isActStudent: false
  }
];

students.forEach((student, index) => {
  console.log(`\nData Siswa ke-${index + 1}`);
  console.log(`ID Siswa      : ${student.studentId}`);
  console.log(`Nama Lengkap  : ${student.fullName}`);
  console.log(`Umur          : ${student.age} tahun`);
  console.log(`Status Aktif  : ${student.isActStudent ? "Aktif" : "Tidak Aktif"}`);
});