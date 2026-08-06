/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

export {};

// 1. Declare all variables (Informasi Mahasiswa)
const studentName: string = "Nadia Putri";
const isActiveStudent: boolean = true;
const isTuitionPaid: boolean = true;

const hasPassedProgFund: boolean = true;
const hasPassedDBSys: boolean = true;
const gpa: number = 3.45;

const areSeatsAvailable: boolean = false;

// Variabel untuk menyimpan hasil registrasi
let registrationResult: string = "";

// 2. Implement the registration workflow using nested conditional statements

// Step 1: Pengecekan Status Mahasiswa (Aktif DAN Bayar SPP)
if (isActiveStudent === true && isTuitionPaid === true) {
  
  // Step 2: Pengecekan Syarat Akademik (Lulus 2 Matkul Dasar DAN IPK >= 3.20)
  if (hasPassedProgFund === true && hasPassedDBSys === true && gpa >= 3.20) {
    
    // Step 3: Pengecekan Ketersediaan Kursi
    if (areSeatsAvailable === true) {
      registrationResult = "Registration Successful";
    } else {
      registrationResult = "Added to Waiting List"; // Kursi penuh
    }
    
  } else {
    // Gagal di tahap akademik
    registrationResult = "Academic Requirements Not Met";
  }
  
} else {
  // Gagal di tahap administrasi awal
  registrationResult = "Registration Rejected";
}

// 3. Display the final registration result
console.log("=== Hasil Registrasi Mata Kuliah Lanjutan ===");
console.log(`Nama Mahasiswa   : ${studentName}`);
console.log(`Status Aktif     : ${isActiveStudent ? "Ya" : "Tidak"}`);
console.log(`Pembayaran SPP   : ${isTuitionPaid ? "Lunas" : "Belum"}`);
console.log(`IPK Saat Ini     : ${gpa}`);
console.log(`Ketersediaan Seat: ${areSeatsAvailable ? "Ada" : "Penuh"}`);
console.log(`---------------------------------------------`);
console.log(`Status Registrasi: 📝 ${registrationResult}`);