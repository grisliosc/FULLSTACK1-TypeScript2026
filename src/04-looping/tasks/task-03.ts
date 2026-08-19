/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */

export {}; // Mencegah bentrok nama variabel dengan file lain

// 1. Data Nilai Ujian (Array)
const scores: number[] = [
  82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 
  84, 92, 58, 79, 86, 71, 90, 67, 83, 76
];

// Menyiapkan "wadah kosong" untuk menyimpan hasil perhitungan
let totalScore: number = 0;
let passedCount: number = 0;
let failedCount: number = 0;

// 2. Iterasi melalui setiap nilai di dalam array menggunakan loop
for (let i = 0; i < scores.length; i++) {
  
  // Mengambil nilai siswa pada urutan ke-i
  const currentScore: number = scores[i];
  
  // Menambahkan nilai siswa tersebut ke total keseluruhan
  totalScore = totalScore + currentScore;
  
  // 3. Menggunakan kondisi untuk menentukan Lulus (>= 75) atau Gagal
  if (currentScore >= 75) {
    passedCount++; // Tambah 1 ke jumlah siswa lulus
  } else {
    failedCount++; // Tambah 1 ke jumlah siswa gagal
  }
  
}

// 4. Menghitung nilai rata-rata (Total Nilai dibagi Jumlah Siswa)
const averageScore: number = totalScore / scores.length;

// 5. Menampilkan Laporan Hasil
console.log("=== Laporan Hasil Ujian Akademik ===");
console.log(`Total Siswa     : ${scores.length} orang`);
console.log(`Siswa Lulus     : ${passedCount} orang`);
console.log(`Siswa Gagal     : ${failedCount} orang`);
console.log(`------------------------------------`);
console.log(`Total Nilai     : ${totalScore}`);
console.log(`Rata-rata Nilai : ${averageScore}`);