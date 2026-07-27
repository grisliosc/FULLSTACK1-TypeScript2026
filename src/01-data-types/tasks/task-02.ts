/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

const product1: string = "Mechanical Keyboard RGB";
const product1Code: string = "KBR-001";
const original1Price: number = 850000; /*850K*/
const disc: number = 0.25;
const quantity: number = 2;
const isPremium: boolean = true;
const stockAvailable: number = 18;

const discountAmount: number = (original1Price * disc);
const afterDiscount: number = original1Price - discountAmount;
const totalPrice: number = afterDiscount * quantity;

console.log("=== Product Data ===");
console.log();

console.log("Nama Produk: ", product1);
console.log("Kode Produk: ", product1Code);
console.log("Harga Asli: ", original1Price);
console.log("Diskon: ", disc);
console.log("Jumlah: ", quantity);
console.log("Premium Member: ", isPremium);
console.log("Stok Tersedia: ", stockAvailable);
console.log("Jumlah Diskon: ", discountAmount);
console.log("Harga Setelah Diskon: ", afterDiscount);

console.log();
console.log("HARGA YANG HARUS DIBAYAR");
console.log("Total Harga: ", totalPrice);