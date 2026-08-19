/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

// 1. Mendefinisikan Tipe Data untuk Produk
type Product = {
  name: string;
  price: number;
  quantity: number;
};

// 2. Menyimpan Informasi Produk ke dalam Array
const cart: Product[] = [
  { name: "Mechanical Keyboard", price: 850000, quantity: 1 },
  { name: "Wireless Mouse", price: 275000, quantity: 2 },
  { name: "Monitor Stand", price: 420000, quantity: 1 }
];

// 3. Informasi Pelanggan dan Aturan Bisnis
const voucherValue: number = 100000;
const isPremiumMember: boolean = true;
const taxRate: number = 11; // 11%

// 4. Menghitung Subtotal Produk Secara Otomatis
let productSubtotal: number = 0;

cart.forEach((item) => {
  productSubtotal = productSubtotal + (item.price * item.quantity);
});

// 5. Perhitungan Diskon Member (10% dari Subtotal jika Premium)
const membershipDiscount: number = isPremiumMember ? (productSubtotal * 10) / 100 : 0;

// 6. Pembayaran Sebelum Pajak (Subtotal - Diskon - Voucher)
const paymentBeforeTax: number = productSubtotal - membershipDiscount - voucherValue;

// 7. Perhitungan Pajak (VAT 11% dari harga sebelum pajak)
const vatAmount: number = (paymentBeforeTax * taxRate) / 100;

// 8. Pembayaran Akhir
const finalPayment: number = paymentBeforeTax + vatAmount;

// 9. Perhitungan Reward Points (Dibulatkan ke bawah)
const rewardPoints: number = Math.floor(paymentBeforeTax / 50000);

// 10. Kelayakan Gratis Ongkir (Premium ATAU Belanja > 1.5 Juta)
const isEligibleForFreeShipping: boolean = isPremiumMember || paymentBeforeTax > 1500000;

// 11. Menampilkan Hasil ke Layar
console.log("=== Struk Checkout Marketplace (Versi Array) ===");
console.log("Rincian Barang:");
cart.forEach((item) => {
  console.log(`- ${item.quantity}x ${item.name} (@Rp${item.price})`);
});
console.log(`\nSubtotal Produk     : Rp${productSubtotal}`);
console.log(`Diskon Premium (10%): -Rp${membershipDiscount}`);
console.log(`Potongan Voucher    : -Rp${voucherValue}`);
console.log(`----------------------------------------------`);
console.log(`Total Sebelum Pajak : Rp${paymentBeforeTax}`);
console.log(`Pajak (VAT 11%)     : Rp${vatAmount}`);
console.log(`----------------------------------------------`);
console.log(`Total Bayar Akhir   : Rp${finalPayment}`);
console.log(`Reward Points       : ${rewardPoints} Poin`);
console.log(`Gratis Ongkir       : ${isEligibleForFreeShipping ? "Ya ✅" : "Tidak ❌"}`);