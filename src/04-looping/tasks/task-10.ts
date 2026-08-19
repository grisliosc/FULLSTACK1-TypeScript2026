/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */


export {}; // Mencegah bentrok nama variabel dengan file lain

// 1. Data Pengumpulan Tugas (Array of Objects)
const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

// Menyiapkan wadah untuk menghitung jumlah siswa per kategori
let submittedCount: number = 0;
let notSubmittedCount: number = 0;
let passedCount: number = 0;
let revisionCount: number = 0;

// Menyiapkan array kosong untuk menampung daftar nama siswa
let notSubmittedNames: string[] = [];
let revisionNames: string[] = [];

// Menyiapkan wadah untuk menghitung total nilai
let totalScore: number = 0;

// 2. Menggunakan Loop untuk memproses data setiap siswa
for (let i = 0; i < submissions.length; i++) {
    
    // Menyimpan data siswa saat ini agar lebih mudah dibaca
    const currentSubmission = submissions[i];
    
    // Selalu tambahkan nilainya ke total (yang tidak kumpul bernilai 0, tidak masalah)
    totalScore = totalScore + currentSubmission.score;

    // 3. Pengecekan Status Pengumpulan dan Nilai
    if (currentSubmission.submitted === false) {
        
        // Kasus 1: Tidak mengumpulkan tugas
        notSubmittedCount++;
        notSubmittedNames.push(currentSubmission.student); // Simpan namanya
        
    } else {
        
        // Siswa mengumpulkan tugas, tambahkan ke perhitungan
        submittedCount++;
        
        // Pengecekan lanjutan (Nested If): Apakah nilainya lulus?
        if (currentSubmission.score >= 75) {
            
            // Kasus 2: Mengumpulkan dan Lulus
            passedCount++;
            
        } else {
            
            // Kasus 3: Mengumpulkan tapi nilai di bawah 75 (Butuh Revisi)
            revisionCount++;
            revisionNames.push(currentSubmission.student); // Simpan namanya
            
        }
    }
}

// 4. Menghitung Rata-rata Nilai Kelas
const averageScore: number = totalScore / submissions.length;

// 5. Menampilkan Hasil ke Layar
console.log("=== Laporan Evaluasi Tugas LMS ===");
console.log(`Total Siswa          : ${submissions.length} orang`);
console.log(`Rata-rata Kelas      : ${averageScore}`);
console.log(`----------------------------------`);
console.log(`✅ Sudah Mengumpulkan: ${submittedCount} siswa`);
console.log(`❌ Belum Mengumpulkan: ${notSubmittedCount} siswa`);
console.log(`🎓 Lulus (>= 75)     : ${passedCount} siswa`);
console.log(`📝 Butuh Revisi      : ${revisionCount} siswa`);
console.log(`----------------------------------`);

// Menampilkan daftar nama yang belum mengumpulkan
console.log(`Daftar Belum Mengumpulkan:`);
for (let i = 0; i < notSubmittedNames.length; i++) {
    console.log(`- ${notSubmittedNames[i]}`);
}

console.log(``); // Spasi kosong untuk merapikan tampilan

// Menampilkan daftar nama yang butuh revisi
console.log(`Daftar Butuh Revisi:`);
for (let i = 0; i < revisionNames.length; i++) {
    console.log(`- ${revisionNames[i]}`);
}