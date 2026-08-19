/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

export {}; // Mencegah bentrok nama variabel dengan file tugas lain

// 1 & 2. Membuat fungsi calculateFinalGrade beserta parameternya
function calculateFinalGrade(assignment: number, midterm: number, finalExam: number): number {
    
    // 3. Menghitung dan mengembalikan (return) nilai akhir
    const finalGrade = (assignment * 0.30) + (midterm * 0.30) + (finalExam * 0.40);
    return finalGrade;
    
}

// 4. Memanggil fungsi untuk setiap siswa 
const alyaGrade = calculateFinalGrade(85, 80, 92);
const budiGrade = calculateFinalGrade(78, 75, 81);
const citraGrade = calculateFinalGrade(90, 88, 95);

// 5. Menampilkan hasil nilai akhir setiap siswa
console.log("=== Rekap Nilai Akhir Siswa ===");
console.log(`Nilai Akhir Alya  : ${alyaGrade}`);
console.log(`Nilai Akhir Budi  : ${budiGrade}`);
console.log(`Nilai Akhir Citra : ${citraGrade}`);