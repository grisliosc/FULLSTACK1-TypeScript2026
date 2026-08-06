/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

export {}; // Mencegah bentrok nama variabel dengan file lain

// 1. Data Kehadiran Siswa (Array of Objects)
const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

// Menyiapkan wadah untuk menghitung jumlah siswa
let presentCount: number = 0;
let absentCount: number = 0;

// Menyiapkan array kosong untuk menampung nama-nama siswa yang absen
let absentStudents: string[] = [];

// 2. Menggunakan Loop untuk mengecek data setiap siswa
for (let i = 0; i < attendances.length; i++) {
  
  // Menyimpan data siswa saat ini ke dalam variabel agar lebih mudah dibaca
  const student = attendances[i];

  // 3. Mengecek apakah siswa tersebut hadir (true) atau absen (false)
  if (student.present === true) {
    presentCount++;
  } else {
    absentCount++;
    // Memasukkan nama siswa yang absen ke dalam daftar absentStudents
    absentStudents.push(student.name); 
  }
  
}

// 4. Menghitung Persentase Kehadiran
// Rumus: (Jumlah Hadir / Total Siswa) * 100
const attendancePercentage: number = (presentCount / attendances.length) * 100;

// 5. Menampilkan Hasil ke Layar
console.log("=== Laporan Kehadiran Kelas ===");
console.log(`Total Siswa      : ${attendances.length} orang`);
console.log(`Siswa Hadir      : ${presentCount} orang`);
console.log(`Siswa Absen      : ${absentCount} orang`);
console.log(`Persentase Hadir : ${attendancePercentage}%`);
console.log(`---------------------------------`);
console.log(`Daftar Siswa Absen:`);

// Menampilkan nama-nama siswa yang absen menggunakan perulangan
for (let i = 0; i < absentStudents.length; i++) {
  console.log(`- ${absentStudents[i]}`);
}