/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

// 1. Declare all required variables (Informasi Pasien)
const patientName: string = "Siti Rahma";
const isCritical: boolean = false;
const hasAppointment: boolean = true;
const age: number = 67;
const hasInsurance: boolean = true;

// Variabel untuk menyimpan tujuan akhir pasien
let destination: string = "";

// 2. Implement the hospital workflow using conditional statements
if (isCritical === true) {
  
  // Aturan 1: Kondisi Kritis
  destination = "Emergency Room";
  
} else if (hasAppointment === true) {
  
  // Aturan 2: Tidak kritis, tapi punya janji temu (Appointment)
  if (age >= 60) {
    destination = "Priority Queue"; // Lansia (Usia >= 60)
  } else {
    destination = "Regular Queue";  // Usia di bawah 60
  }
  
} else {
  
  // Aturan 3: Tidak kritis dan tidak punya janji temu (Walk-in)
  if (hasInsurance === true) {
    destination = "Insurance Registration Counter";
  } else {
    destination = "General Registration Counter";
  }
  
}

// 3. Display the patient's destination
console.log("=== Sistem Antrean Rumah Sakit ===");
console.log(`Nama Pasien    : ${patientName}`);
console.log(`Usia           : ${age} tahun`);
console.log(`Status Kritis  : ${isCritical ? "Ya" : "Tidak"}`);
console.log(`Punya Janji    : ${hasAppointment ? "Ya" : "Tidak"}`);
console.log(`----------------------------------`);
console.log(`Tujuan Pasien  : 🏥 ${destination}`);