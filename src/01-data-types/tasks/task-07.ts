/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
  studentId: string;
  fullName: string;
    gradeLevel: number;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registrations: Registration[] = [
  {
    studentId: "STU001",
    fullName: "Jang Won-young",
    gradeLevel: 10,
    courseId: "JV-505",
    courseTitle: "Java Lanjutan",
    instructorName: "Bu Jang Da-ah",
    totalLearningHours: 23,
    registrationDate: "2026-07-01",
    isPaymentCompleted: true
  },

  {
    studentId: "STU002",
    fullName: "Heesung",
    gradeLevel: 11,
    courseId: "TS-555",
    courseTitle: "Dasar Typescript",
    instructorName: "Pak Jay",
    totalLearningHours: 45,
    registrationDate: "2025-01-01",
    isPaymentCompleted: true
  },

  {
    studentId: "STU003",
    fullName: "Kim Min-ji",
    gradeLevel: 10,
    courseId: "HT-2521",
    courseTitle: "Dasar HTML dan CSS",
    instructorName: "Pak Kim",
    totalLearningHours: 45,
    registrationDate: "2026-07-27",
    isPaymentCompleted: false
  }
]

console.log("=== Laporan Registrasi Kursus Online ===");

registrations.forEach((regist, index) => {
  console.log(`\nRegistrasi ke-${index + 1}`);
  
  console.log("[Info Siswa]");
  console.log(`ID Siswa      : ${regist.studentId}`);
  console.log(`Nama          : ${regist.fullName}`);
  console.log(`Tingkat Kelas : ${regist.gradeLevel}`);
  
  console.log("[Info Kursus]");
  console.log(`ID Kursus     : ${regist.courseId}`);
  console.log(`Judul Kursus  : ${regist.courseTitle}`);
  console.log(`Instruktur    : ${regist.instructorName}`);
  console.log(`Total Jam     : ${regist.totalLearningHours} jam`);
  
  console.log("[Info Pembayaran]");
  console.log(`Tanggal Daftar: ${regist.registrationDate}`);
  console.log(`Status Bayar  : ${regist.isPaymentCompleted ? "Lunas ✅" : "Belum Lunas ❌"}`);
});