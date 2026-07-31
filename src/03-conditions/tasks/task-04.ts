/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

// 1. Declare all variables
const customerName: string = "Nadia Putri";
let isPremiumMember: boolean = true;
let isRoomAvailable: boolean = false;
let reservationMessage: string = "";

// 2. Implement the logic using nested if statements
// Gerbang Pertama: Mengecek apakah kamar tersedia
if (isRoomAvailable === true) {
  
  // Gerbang Kedua (Kamar Ada): Mengecek status keanggotaan
  if (isPremiumMember === true) {
    reservationMessage = "Reservasi berhasil. Anda mendapatkan free room upgrade!";
  } else {
    reservationMessage = "Reservasi berhasil untuk kamar reguler Anda.";
  }

} else {
  
  // Gerbang Kedua (Kamar Penuh): Mengecek status keanggotaan
  if (isPremiumMember === true) {
    reservationMessage = "Kamar penuh. Anda dimasukkan ke Priority Waiting List.";
  } else {
    reservationMessage = "Mohon maaf, tidak ada kamar yang tersedia.";
  }

}

// 3. Display the reservation result
console.log("=== Hasil Reservasi Hotel ===");
console.log(`Nama Pelanggan : ${customerName}`);
console.log(`Status Member  : ${isPremiumMember ? "Premium" : "Reguler"}`);
console.log(`Ketersediaan   : ${isRoomAvailable ? "Ada Kamar" : "Penuh"}`);
console.log(`---------------------------------`);
console.log(`Pesan Sistem   : ${reservationMessage}`);