/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

export {}; // Mencegah bentrok nama variabel dengan file lain

// Data Transaksi (Array)
const sales: number[] = [
  125000, 350000, 78000, 910000, 150000, 
  420000, 275000, 99000, 640000, 18000
];

// Menyiapkan "wadah" untuk menyimpan hasil perhitungan
let totalRevenue: number = 0;
let highValueCount: number = 0;

// Trik mencari nilai tertinggi dan terendah:
// Kita jadikan nilai pertama (index ke-0) sebagai patokan awal
let highestTransaction: number = sales[0];
let lowestTransaction: number = sales[0];

// Melakukan iterasi ke seluruh data transaksi
for (let i = 0; i < sales.length; i++) {
  const currentSale = sales[i];

  // 1. Menghitung Total Pendapatan
  totalRevenue = totalRevenue + currentSale;

  // 2. Mencari Transaksi Tertinggi
  // Jika nilai saat ini lebih besar dari rekor tertinggi, perbarui rekornya!
  if (currentSale > highestTransaction) {
    highestTransaction = currentSale;
  }

  // 3. Mencari Transaksi Terendah
  // Jika nilai saat ini lebih kecil dari rekor terendah, perbarui rekornya!
  if (currentSale < lowestTransaction) {
    lowestTransaction = currentSale;
  }

  // 4. Menghitung jumlah transaksi Rp300.000 atau lebih
  if (currentSale >= 300000) {
    highValueCount++;
  }
}

// 5. Menghitung Rata-rata Transaksi
const averageTransaction: number = totalRevenue / sales.length;

// Menampilkan Laporan Hasil
console.log("=== Laporan Penjualan Toko Online ===");
console.log(`Total Transaksi        : ${sales.length} kali`);
console.log(`---------------------------------------`);
console.log(`Total Pendapatan       : Rp${totalRevenue}`);
console.log(`Transaksi Tertinggi    : Rp${highestTransaction}`);
console.log(`Transaksi Terendah     : Rp${lowestTransaction}`);
console.log(`Transaksi >= Rp300.000 : ${highValueCount} transaksi`);
console.log(`Rata-rata Transaksi    : Rp${averageTransaction}`);