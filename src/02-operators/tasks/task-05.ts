/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

// 1. Informasi Siswa dan Anggaran Kampus
const studentName: string = "Alya Putri";
const gpa: number = 3.89;
const familyIncome: number = 4200000;
const competitionCount: number = 4;
const hasDisciplinaryRecord: boolean = false;
const documentsComplete: boolean = true;

const totalBudget: number = 500000000;

// 2. Evaluasi Persyaratan Menggunakan Operator Perbandingan
const isGpaEligible: boolean = gpa >= 3.75;
const isIncomeEligible: boolean = familyIncome < 5000000;
const isCompetitionEligible: boolean = competitionCount >= 3;
const isDisciplineEligible: boolean = hasDisciplinaryRecord === false; 
const isDocumentEligible: boolean = documentsComplete === true;

// 3. Menggabungkan Semua Kondisi Menggunakan Operator Logika AND (&&)
// Alya HANYA akan lulus jika SEMUA kondisi di atas bernilai true
const isAccepted: boolean = isGpaEligible && isIncomeEligible && isCompetitionEligible && isDisciplineEligible && isDocumentEligible;

// 4. Menentukan Nominal Beasiswa Menggunakan Ternary Operator
const scholarshipAmount: number = isAccepted ? 12000000 : 0;

// 5. Menghitung Sisa Anggaran
const remainingBudget: number = totalBudget - scholarshipAmount;

// 6. Menampilkan Hasil ke Layar
console.log("=== Hasil Seleksi Beasiswa Universitas ===");
console.log(`Nama Mahasiswa    : ${studentName}`);
console.log(`Status Kelulusan  : ${isAccepted ? "Lulus Beasiswa Penuh ✅" : "Tidak Lulus ❌"}`);
console.log(`Nominal Beasiswa  : Rp${scholarshipAmount}`);
console.log(`------------------------------------------`);
console.log(`Sisa Dana Kampus  : Rp${remainingBudget}`);