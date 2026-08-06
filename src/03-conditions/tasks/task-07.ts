/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

// 1. Declare all variables (Informasi Pemohon)
const applicantName: string = "Andi Wijaya";
const monthlyIncome: number = 10000000;
const creditScore: number = 725;
const existingDebt: number = 2500000;
const isPermanentEmployee: boolean = true;

// Variabel untuk menyimpan keputusan akhir bank
let loanDecision: string = "";

// 2. Implement both screening stages
// Screening Pertama: Pendapatan >= 8 juta DAN Credit Score >= 700
if (monthlyIncome >= 8000000 && creditScore >= 700) {
  
  // Menghitung batas maksimal hutang (30% dari pendapatan bulanan)
  const maxAllowedDebt: number = (monthlyIncome * 30) / 100;

  // Screening Kedua: Hutang <= batas maksimal DAN status pegawai tetap
  if (existingDebt <= maxAllowedDebt && isPermanentEmployee === true) {
    
    // Lulus screening 1 dan 2
    loanDecision = "Loan Approved";
    
  } else {
    
    // Lulus screening 1, tapi gagal di screening 2
    loanDecision = "Manual Review";
    
  }

} else {
  
  // Gagal di screening 1
  loanDecision = "Loan Rejected";
  
}

// 3. Display the loan decision
console.log("=== Hasil Evaluasi Pinjaman Bank ===");
console.log(`Nama Pemohon      : ${applicantName}`);
console.log(`Pendapatan        : Rp${monthlyIncome}`);
console.log(`Skor Kredit       : ${creditScore}`);
console.log(`Hutang Saat Ini   : Rp${existingDebt}`);
console.log(`Pegawai Tetap     : ${isPermanentEmployee ? "Ya" : "Tidak"}`);
console.log(`------------------------------------`);
console.log(`Keputusan Sistem  : 🏦 ${loanDecision}`);