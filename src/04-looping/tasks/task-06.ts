/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */


export {}; // Mencegah bentrok nama variabel dengan file lain

// 1. Data Stok Gudang (Array)
const stocks: number[] = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

// Menyiapkan wadah untuk menghitung jumlah masing-masing kategori
let outOfStockCount: number = 0;
let lowStockCount: number = 0;
let safeStockCount: number = 0;

// Menyiapkan wadah untuk menghitung total keseluruhan barang
let totalInventory: number = 0;

// 2. Menggunakan Loop untuk mengecek setiap stok
for (let i = 0; i < stocks.length; i++) {
    const currentStock = stocks[i];
    
    // Menambahkan jumlah stok saat ini ke total inventaris
    totalInventory = totalInventory + currentStock;

    // 3. Mengklasifikasikan status stok berdasarkan aturan
    if (currentStock === 0) {
        
        // Habis total
        outOfStockCount++;
        
    } else if (currentStock < 10) {
        
        // Stok menipis (1 sampai 9)
        lowStockCount++;
        
    } else {
        
        // Stok aman (10 atau lebih)
        safeStockCount++;
        
    }
}

// 4. Menghitung Rata-rata Stok
const averageStock: number = totalInventory / stocks.length;

// 5. Menampilkan Hasil ke Layar
console.log("=== Laporan Stok Gudang ===");
console.log(`Total Jenis Produk : ${stocks.length}`);
console.log(`Total Inventaris   : ${totalInventory} barang`);
console.log(`Rata-rata Stok     : ${averageStock}`);
console.log(`---------------------------------`);
console.log(`🟢 Safe Stock (>=10): ${safeStockCount} produk`);
console.log(`🟡 Low Stock (<10)  : ${lowStockCount} produk`);
console.log(`🔴 Out of Stock (0) : ${outOfStockCount} produk`);