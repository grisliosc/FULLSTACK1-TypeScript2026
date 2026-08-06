/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

export {}; // Mencegah bentrok nama variabel dengan file lain

// 1. Data Nilai Peserta (Array)
const scores: number[] = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

// Menyiapkan "wadah" untuk menghitung jumlah masing-masing kategori
let goldCount: number = 0;
let silverCount: number = 0;
let bronzeCount: number = 0;
let noMedalCount: number = 0;

// Menyiapkan wadah untuk total nilai (digunakan untuk menghitung rata-rata)
let totalScore: number = 0;

// 2. Menggunakan Loop untuk mengecek setiap nilai
for (let i = 0; i < scores.length; i++) {
    const currentScore = scores[i];
    
    // Menambahkan nilai saat ini ke total keseluruhan
    totalScore = totalScore + currentScore;

    // 3. Mengklasifikasikan medali berdasarkan aturan (Business Rules)
    if (currentScore >= 95) {
        // Nilai >= 95 dapat Emas
        goldCount++;
    } else if (currentScore >= 85) {
        // Nilai 85 - 94 dapat Perak
        silverCount++;
    } else if (currentScore >= 75) {
        // Nilai 75 - 84 dapat Perunggu
        bronzeCount++;
    } else {
        // Di bawah 75 tidak dapat medali
        noMedalCount++;
    }
}

// 4. Menghitung Rata-rata Nilai
const averageScore: number = totalScore / scores.length;

// 5. Menampilkan Hasil ke Layar
console.log("=== Hasil Kompetisi Pemrograman ===");
console.log(`Total Peserta        : ${scores.length} orang`);
console.log(`-----------------------------------`);
console.log(`🥇 Medali Emas       : ${goldCount} orang`);
console.log(`🥈 Medali Perak      : ${silverCount} orang`);
console.log(`🥉 Medali Perunggu   : ${bronzeCount} orang`);
console.log(`❌ Tanpa Medali      : ${noMedalCount} orang`);
console.log(`-----------------------------------`);
console.log(`Rata-rata Nilai      : ${averageScore}`);