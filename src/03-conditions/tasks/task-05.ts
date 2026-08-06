/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

// 1. Declare all variables (Informasi Siswa)
const studentName: string = "Fajar Hidayat";
const gpa: number = 3.86;
const familyIncome: number = 4200000;
const competitionCount: number = 4;
const hasDisciplinaryRecord: boolean = false;
const documentsComplete: boolean = true;

console.log(`=== Hasil Seleksi Beasiswa: ${studentName} ===`);

// 2. Implement the first screening
// Tahap 1: IPK >= 3.75 DAN Pendapatan < 5.000.000
if (gpa >= 3.75 && familyIncome < 5000000) {
  
  // 3. Implement the second screening ONLY IF the first screening is passed
  // Tahap 2: Lomba >= 3 DAN Tidak ada pelanggaran DAN Dokumen lengkap
  if (competitionCount >= 3 && hasDisciplinaryRecord === false && documentsComplete === true) {
    
    // 4. Display the correct result
    console.log("Scholarship Approved");
    
  } else {
    // Kondisi lulus Tahap 1, tapi gagal di Tahap 2
    console.log("Passed First Screening, but Failed Second Screening");
  }

} else {
  
  // Kondisi langsung gagal di Tahap 1
  console.log("Failed First Screening");
  
}

/* npm run example src/03-conditions/tasks/nama-file.ts */