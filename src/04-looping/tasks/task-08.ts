/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */


export {}; // Mencegah bentrok nama variabel dengan file lain

// 1. Data Pesanan (Array of Objects)
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

// Menyiapkan wadah untuk menghitung jumlah masing-masing kategori
let readyToShipCount: number = 0;
let unpaidCount: number = 0;
let waitingStockCount: number = 0;

// Menyiapkan array kosong untuk menampung ID pesanan yang siap dikirim
let readyOrderIds: string[] = [];

// 2. Menggunakan Loop untuk mengecek setiap pesanan
for (let i = 0; i < orders.length; i++) {
  
  // Mengambil data pesanan saat ini
  const order = orders[i];

  // Pengecekan 1: Apakah pesanan belum dibayar?
  if (order.paid === false) {
    unpaidCount++;
  }

  // Pengecekan 2: Apakah stok sedang kosong?
  if (order.stockAvailable === false) {
    waitingStockCount++;
  }

  // Pengecekan 3: Apakah sudah dibayar DAN stok tersedia? (Siap Kirim)
  if (order.paid === true && order.stockAvailable === true) {
    readyToShipCount++;
    readyOrderIds.push(order.id); // Memasukkan ID ke dalam daftar siap kirim
  }
  
}

// 3. Menampilkan Hasil ke Layar
console.log("=== Laporan Status Pesanan Gudang ===");
console.log(`Total Pesanan        : ${orders.length} pesanan`);
console.log(`Menunggu Pembayaran  : ${unpaidCount} pesanan`);
console.log(`Menunggu Restock     : ${waitingStockCount} pesanan`);
console.log(`-------------------------------------`);
console.log(`📦 Pesanan Siap Kirim: ${readyToShipCount} pesanan`);
console.log(`Daftar ID Siap Kirim :`);

// Menampilkan ID pesanan yang siap dikirim menggunakan perulangan
for (let i = 0; i < readyOrderIds.length; i++) {
  console.log(`- ${readyOrderIds[i]}`);
}