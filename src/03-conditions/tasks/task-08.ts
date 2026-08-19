/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

// 1. Declare all variables (Informasi Penumpang)
const passengerName: string = "Fajar Nugroho";
const hasCheckedInOnline: boolean = true;
const cabinClass: string = "Economy";
const baggageWeight: number = 24;

// Variabel untuk menyimpan pesan status akhir
let statusMessage: string = "";

// 2. Implement the airline decision process (Logika Maskapai)

// Step 1: Mengecek apakah penumpang sudah check-in online
if (hasCheckedInOnline === false) {
  
  statusMessage = "Please complete online check-in first.";

} else {
  
  // Step 2: Jika sudah check-in (true), sistem melanjutkan ke pengecekan bagasi
  if (baggageWeight > 20) {
    
    // Bagasi di atas 20 kg, sistem mengecek kelas tiket
    if (cabinClass === "Business") {
      statusMessage = "Extra baggage allowed.";
    } else {
      // Untuk kelas Economy dan lainnya
      statusMessage = "Additional baggage fee required.";
    }
    
  } else {
    
    // Bagasi aman (20 kg atau kurang)
    statusMessage = "Proceed to boarding pass printing.";
    
  }

}

// 3. Display the correct message
console.log("=== Status Check-in Maskapai ===");
console.log(`Nama Penumpang : ${passengerName}`);
console.log(`Check-in Online: ${hasCheckedInOnline ? "Sudah" : "Belum"}`);
console.log(`Kelas Kabin    : ${cabinClass}`);
console.log(`Berat Bagasi   : ${baggageWeight} kg`);
console.log(`--------------------------------`);
console.log(`Pesan Sistem   : ✈️ ${statusMessage}`);