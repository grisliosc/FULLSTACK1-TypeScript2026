/**
 * A shopping mall has a parking building with:
 * - 5 floors
 * - Each floor contains 20 parking spaces
 * 
 * The parking management system wants to display every parking location using the following format:
 * ------------------------------
 * Floor 1 - Slot 1
 * Floor 1 - Slot 2
 * ...
 * Floor 1 - Slot 20
 * 
 * Floor 2 - Slot 1
 * Floor 2 - Slot 2
 * ...
 * 
 * Floor 5 - Slot 20
 * ------------------------------
 * 
 * Tasks:
 *  - Use nested for loops.
 *  - Display every parking location.
 *  - Print a blank line after each floor.
 */

export {}; // Mencegah bentrok nama variabel dengan file lain

console.log("------------------------------");

// 1. Outer loop (Perulangan Luar) untuk Lantai (1 sampai 5)
for (let floor = 1; floor <= 5; floor++) {
  
  // 2. Inner loop (Perulangan Dalam) untuk Slot Parkir (1 sampai 20)
  for (let slot = 1; slot <= 20; slot++) {
    
    // Menampilkan lokasi parkir saat ini
    console.log(`Floor ${floor} - Slot ${slot}`);
    
  }
  
  // 3. Mencetak baris kosong setelah 20 slot di satu lantai selesai dicetak
  console.log(""); 
  
}

console.log("------------------------------");