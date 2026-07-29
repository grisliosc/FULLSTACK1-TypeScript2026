/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

// 1. Informasi Tarif dan Waktu Bermain
const hourlyRate: number = 8000;
const playHours: number = 7;
const playMinutes: number = 35;

// 2. Perhitungan Total Menit dan Sisa Menit
// Menghitung total waktu dalam menit
const totalPlayingMinutes: number = (playHours * 60) + playMinutes;

// Menggunakan operator Modulo (%) untuk mencari sisa menit setelah dibagi 60
const remainingMinutes: number = totalPlayingMinutes % 60; 

// 3. Penentuan Jam Ditagihkan (Billed Hours)
// Jika ada sisa menit lebih dari 0, berarti dia masuk ke jam berikutnya (+1)
const billedHours: number = remainingMinutes > 0 ? playHours + 1 : playHours;

// 4. Perhitungan Biaya dan Diskon
const totalBeforeDiscount: number = billedHours * hourlyRate;

// Jika jam yang ditagihkan lebih dari 5 jam, berikan diskon 15% (15/100)
const discountAmount: number = billedHours > 5 ? (totalBeforeDiscount * 15) / 100 : 0;

// 5. Perhitungan Pembayaran Akhir
const finalPayment: number = totalBeforeDiscount - discountAmount;

// 6. Menampilkan Hasil (Display)
console.log("=== Struk Tagihan Warnet ===");
console.log(`Waktu Main Asli  : ${playHours} jam ${playMinutes} menit`);
console.log(`Total Menit      : ${totalPlayingMinutes} menit`);
console.log(`Sisa Menit       : ${remainingMinutes} menit`);
console.log(`Jam Ditagihkan   : ${billedHours} jam`);
console.log(`--------------------------------`);
console.log(`Biaya Sebelum    : Rp${totalBeforeDiscount}`);
console.log(`Diskon (15%)     : Rp${discountAmount}`);
console.log(`Total Bayar      : Rp${finalPayment}`);