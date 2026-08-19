/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

// 1. Declare all variables
const customerName: string = "Raka Saputra";
const monthlyUsage: number = 124;
let recommendedPackage: string = "";

// 2. Implement the business rules using if...else if...else
if (monthlyUsage < 50) {
  // Jika penggunaan di bawah 50 GB
  recommendedPackage = "Basic";
  
} else if (monthlyUsage <= 150) {
  // Jika penggunaan 50 GB sampai 150 GB
  recommendedPackage = "Standard";
  
} else {
  // Jika penggunaan lebih dari 150 GB (selain dari dua kondisi di atas)
  recommendedPackage = "Premium";
  
}

// 3. Display the recommended package
console.log("=== Rekomendasi Paket Internet ===");
console.log(`Nama Pelanggan  : ${customerName}`);
console.log(`Penggunaan Data : ${monthlyUsage} GB`);
console.log(`Paket Disarankan: Paket ${recommendedPackage}`);