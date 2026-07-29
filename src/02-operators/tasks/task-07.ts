/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

// 1. Informasi Tamu dan Tarif
const roomPricePerNight: number = 650000;
const nightsStayed: number = 4;
const serviceCharge: number = 120000;
const taxRate: number = 11; // 11 persen
const isVIP: boolean = true;

// 2. Perhitungan Kamar dan Diskon
const roomSubtotal: number = roomPricePerNight * nightsStayed;

// Jika VIP, dapat diskon 12% dari total harga kamar. Jika tidak, diskon 0.
const discount: number = isVIP ? (roomSubtotal * 12) / 100 : 0;
const totalAfterDiscount: number = roomSubtotal - discount;

// 3. Perhitungan Pajak dan Total Akhir
// Pajak dihitung dari total harga kamar setelah diskon ditambah biaya layanan
const taxableAmount: number = totalAfterDiscount + serviceCharge;
const taxAmount: number = (taxableAmount * taxRate) / 100;

const finalPayment: number = taxableAmount + taxAmount;

// 4. Penentuan Sarapan Gratis dengan Logika OR (||)
// Tamu dapat sarapan gratis jika menginap >= 3 malam ATAU merupakan VIP
const isEligibleForFreeBreakfast: boolean = nightsStayed >= 3 || isVIP;

// 5. Menampilkan Hasil ke Layar
console.log("=== Struk Pembayaran Hotel ===");
console.log(`Subtotal Kamar   : Rp${roomSubtotal} (${nightsStayed} malam)`);
console.log(`Diskon VIP (12%) : -Rp${discount}`);
console.log(`Biaya Layanan    : Rp${serviceCharge}`);
console.log(`Pajak (11%)      : Rp${taxAmount}`);
console.log(`----------------------------------`);
console.log(`Total Bayar      : Rp${finalPayment}`);
console.log(`Sarapan Gratis   : ${isEligibleForFreeBreakfast ? "Ya ✅" : "Tidak ❌"}`);