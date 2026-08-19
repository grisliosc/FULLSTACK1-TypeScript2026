/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

// 1. Informasi Penggunaan dan Status Rumah
const previousMeter: number = 25640;
const currentMeter: number = 25892;
const pricePerKwh: number = 1650;
const hasSolarPanel: boolean = true;
const hasEnergySavingMode: boolean = false;

// 2. Perhitungan Konsumsi Energi dan Tagihan Dasar
const energyConsumption: number = currentMeter - previousMeter;
const baseBill: number = energyConsumption * pricePerKwh;

// 3. Perhitungan Diskon
// Diskon dihitung dari tagihan dasar jika syaratnya terpenuhi (true)
const solarDiscount: number = hasSolarPanel ? (baseBill * 20) / 100 : 0;
const energySavingDiscount: number = hasEnergySavingMode ? (baseBill * 5) / 100 : 0;

const totalDiscount: number = solarDiscount + energySavingDiscount;

// 4. Perhitungan Tagihan Akhir
const finalBill: number = baseBill - totalDiscount;

// 5. Penentuan Kelayakan Green Energy Program (Logika AND)
// Rumah HANYA lolos jika SEMUA syarat ini bernilai true
const isGreenEnergyEligible: boolean = hasSolarPanel && (energyConsumption < 300) && hasEnergySavingMode;

// 6. Menampilkan Hasil (Display)
console.log("=== Laporan Tagihan Listrik Smart Home ===");
console.log(`Meteran Bulan Lalu : ${previousMeter}`);
console.log(`Meteran Bulan Ini  : ${currentMeter}`);
console.log(`Konsumsi Energi    : ${energyConsumption} kWh`);
console.log(`------------------------------------------`);
console.log(`Tagihan Dasar      : Rp${baseBill}`);
console.log(`Diskon Panel Surya : -Rp${solarDiscount}`);
console.log(`Diskon Mode Hemat  : -Rp${energySavingDiscount}`);
console.log(`------------------------------------------`);
console.log(`Tagihan Akhir      : Rp${finalBill}`);
console.log(`Status Green Energy: ${isGreenEnergyEligible ? "Memenuhi Syarat ✅" : "Tidak Memenuhi Syarat ❌"}`);