/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */


export {}; // Mencegah bentrok nama variabel dengan file lain

// 1. Data Nilai Mahasiswa (Array of Objects)
const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

// Menyiapkan wadah untuk menghitung jumlah mahasiswa per kategori nilai
let countA: number = 0;
let countB: number = 0;
let countC: number = 0;
let countD: number = 0;

// Menyiapkan wadah untuk total nilai (untuk mencari rata-rata)
let totalScore: number = 0;

// Trik mencari nilai tertinggi & terendah: Jadikan data pertama sebagai patokan awal
let highestScore: number = students[0].score;
let lowestScore: number = students[0].score;

// 2. Menggunakan Loop untuk memproses data setiap mahasiswa
for (let i = 0; i < students.length; i++) {
    
    // Mengambil nilai mahasiswa saat ini agar kode lebih rapi
    const currentScore = students[i].score;
    
    // Menambahkan nilai saat ini ke total keseluruhan
    totalScore = totalScore + currentScore;

    // 3. Pengecekan Nilai Tertinggi dan Terendah
    if (currentScore > highestScore) {
        highestScore = currentScore;
    }

    if (currentScore < lowestScore) {
        lowestScore = currentScore;
    }

    // 4. Klasifikasi Kategori Nilai menggunakan else if
    if (currentScore >= 90) {
        countA++; // 90-100
    } else if (currentScore >= 80) {
        countB++; // 80-89
    } else if (currentScore >= 70) {
        countC++; // 70-79
    } else {
        countD++; // di bawah 70
    }
    
}

// 5. Menghitung Rata-rata Nilai
const averageScore: number = totalScore / students.length;

// 6. Menampilkan Hasil ke Layar
console.log("=== Rekapitulasi Nilai Backend Development ===");
console.log(`Total Mahasiswa : ${students.length} orang`);
console.log(`--------------------------------------------`);
console.log(`🌟 Kategori A (90-100) : ${countA} mahasiswa`);
console.log(`👍 Kategori B (80-89)  : ${countB} mahasiswa`);
console.log(`👌 Kategori C (70-79)  : ${countC} mahasiswa`);
console.log(`⚠️ Kategori D (<70)    : ${countD} mahasiswa`);
console.log(`--------------------------------------------`);
console.log(` Nilai Tertinggi     : ${highestScore}`);
console.log(` Nilai Terendah      : ${lowestScore}`);
console.log(` Rata-rata Nilai     : ${averageScore}`);